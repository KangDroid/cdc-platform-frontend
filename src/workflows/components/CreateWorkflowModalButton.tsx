import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Typography,
} from 'antd';
import { useState } from 'react';

import { DatabaseType } from '../../common/lib/workflow/api';
import { useAlertMessage } from '../../common/provider/MessageAlertProvider.tsx';
import { useCreateWorkflow } from '../services/WorkflowService.ts';

export function CreateWorkflowModalButton({
  updateList,
}: {
  updateList: () => void;
}) {
  const alertMessage = useAlertMessage();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
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
        onOk={() => form.submit()}
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
            <CdcDatabaseInput target={'sourceMetadata'} />
            <Typography.Title level={5}>Target Database 정보</Typography.Title>
            <CdcDatabaseInput target={'targetMetadata'} />
          </Form>
        </div>
      </Modal>
    </>
  );
}

function CdcDatabaseInput({
  target,
}: {
  target: 'sourceMetadata' | 'targetMetadata';
}) {
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
    </>
  );
}
