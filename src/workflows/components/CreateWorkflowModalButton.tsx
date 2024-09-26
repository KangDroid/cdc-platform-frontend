import {
  Button,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Modal,
  Select,
  Typography,
} from 'antd';
import { useState } from 'react';

import { DatabaseType } from '../../common/lib/workflow/api';
import { useAlertMessage } from '../../common/provider/MessageAlertProvider.tsx';
import {
  useCreateWorkflow,
  useDatabaseSourceHealthCheck,
  useDatabaseTargetHealthCheck,
} from '../services/WorkflowService.ts';

export function CreateWorkflowModalButton({
  updateList,
}: {
  updateList: () => void;
}) {
  const alertMessage = useAlertMessage();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [sourceVerified, setSourceVerified] = useState(false);
  const [targetVerified, setTargetVerified] = useState(false);
  const { mutate: createWorkflow } = useCreateWorkflow(() => {
    alertMessage.success('Workflow가 성공적으로 추가되었습니다.');
    setTimeout(() => {
      updateList();
      setVisible(false);
    }, 600);
  });
  return (
    <>
      <Button
        style={{
          marginBottom: '10px',
        }}
        onClick={() => setVisible(true)}
      >
        Workflow 생성
      </Button>
      <Modal
        title={'Workflow 생성'}
        okText="확인"
        cancelText="취소"
        onOk={async () => {
          await form.validateFields();
          if (sourceVerified && targetVerified) {
            form.submit();
          } else {
            alertMessage.error(
              'Source 또는 Target Database 연결이 확인되지 않았습니다. "연결 확인하기" 버튼을 눌러 확인해 주세요.',
            );
          }
        }}
        open={visible}
        onCancel={() => {
          setVisible(false);
          form.resetFields();
        }}
      >
        <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
          <Form
            form={form}
            onFinish={(values) => {
              createWorkflow({
                name: values.name,
                sourceMetadata: {
                  ...values.sourceMetadata,
                  port: values.sourceMetadata.port.toString(),
                },
                targetMetadata: {
                  ...values.targetMetadata,
                  port: values.targetMetadata.port.toString(),
                },
              });
            }}
            style={{ maxWidth: '600px' }}
            layout={'vertical'}
          >
            <Form.Item
              name={'name'}
              rules={[
                {
                  required: true,
                  message: '워크플로우 이름을 입력해 주세요.',
                },
              ]}
            >
              <Input placeholder="워크플로우 이름" />
            </Form.Item>
            <Typography.Title level={5}>Source Database 정보</Typography.Title>
            <CdcDatabaseInput
              target={'sourceMetadata'}
              form={form}
              setVerified={setSourceVerified}
            />
            <Typography.Title level={5}>Target Database 정보</Typography.Title>
            <CdcDatabaseInput
              target={'targetMetadata'}
              form={form}
              setVerified={setTargetVerified}
            />
          </Form>
        </div>
      </Modal>
    </>
  );
}

function CdcDatabaseInput({
  target,
  form,
  setVerified,
}: {
  target: 'sourceMetadata' | 'targetMetadata';
  form: FormInstance;
  setVerified: (verified: boolean) => void;
}) {
  const alertMessage = useAlertMessage();
  const { mutate: testSourceConnection } = useDatabaseSourceHealthCheck(
    (response) => {
      if (response.result) {
        setVerified(true);
        alertMessage.success('Source Database 연결이 확인되었습니다.');
      } else {
        setVerified(false);
        alertMessage.error(
          `Source Database 연결이 실패했습니다: ${response.reason}`,
        );
      }
    },
  );
  const { mutate: testTargetConnection } = useDatabaseTargetHealthCheck(
    (response) => {
      if (response.result) {
        setVerified(true);
        alertMessage.success('Target Database 연결이 확인되었습니다.');
      } else {
        setVerified(false);
        alertMessage.error(
          `Target Database 연결이 실패했습니다: ${response.reason}`,
        );
      }
    },
  );
  return (
    <>
      <Form.Item
        name={[target, 'databaseType']}
        label={'Database 종류'}
        rules={[
          {
            required: true,
            message: 'Source Database 종류를 선택해 주세요.',
          },
        ]}
      >
        <Select
          placeholder={'Source Database 종류'}
          options={Object.values(DatabaseType).map((databaseType) => ({
            label: databaseType,
            value: databaseType,
          }))}
        />
      </Form.Item>
      <Form.Item
        name={[target, 'host']}
        label={'Database 호스트네임'}
        rules={[
          {
            required: true,
            message: '데이터베이스 호스트 이름을 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder={'데이터베이스 호스트 이름'} />
      </Form.Item>
      <Form.Item
        name={[target, 'port']}
        label={'Database 포트 번호'}
        rules={[
          {
            required: true,
            message: '데이터베이스 포트 번호를 입력해 주세요.',
          },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          placeholder={'데이터베이스 포트 번호'}
          controls={false}
        />
      </Form.Item>
      <Form.Item
        name={[target, 'username']}
        label={'Database 사용자 이름'}
        rules={[
          {
            required: true,
            message: '데이터베이스 사용자 이름을 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder={'데이터베이스 사용자 이름'} />
      </Form.Item>
      <Form.Item
        name={[target, 'password']}
        label={'Database 비밀번호'}
        rules={[
          {
            required: true,
            message: '데이터베이스 비밀번호를 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder={'데이터베이스 비밀번호'} type={'password'} />
      </Form.Item>
      <Form.Item
        name={[target, 'targettedDatabaseName']}
        label={'CDC 대상 데이터베이스'}
        rules={[
          {
            required: true,
            message: 'CDC 대상 데이터베이스를 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder={'데이터베이스 이름'} />
      </Form.Item>
      <Button
        onClick={() => {
          const formFieldValue = form.getFieldsValue();
          if (target === 'sourceMetadata') {
            const sourceData = {
              ...formFieldValue.sourceMetadata,
              port: formFieldValue.sourceMetadata?.port?.toString(),
            };
            testSourceConnection(sourceData);
          }

          if (target === 'targetMetadata') {
            const targetData = {
              ...formFieldValue.targetMetadata,
              port: formFieldValue.targetMetadata?.port?.toString(),
            };
            testTargetConnection(targetData);
          }
        }}
      >
        연결 확인하기
      </Button>
    </>
  );
}
