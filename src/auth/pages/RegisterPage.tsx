import { Button, Card, Flex, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { LocalStorageUtils } from '../../common/utils/LocalStroageUtils.ts';
import { useRegistration } from '../services/AuthService.ts';

export function RegisterPage() {
  const navigate = useNavigate();
  const { mutate: register } = useRegistration((response) => {
    // Set Local storage
    LocalStorageUtils.setAccessToken(response.token);
    LocalStorageUtils.setRefreshToken(response.refreshToken!);

    // Redirect to main page
    navigate('/');
  });
  const joinToken = LocalStorageUtils.getJoinToken();
  const email = JSON.parse(atob(joinToken.split('.')[1])).email;
  return (
    <Flex
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        title={'Register'}
        style={{
          width: '100%',
          maxWidth: '500px',
          minWidth: '300px',
        }}
      >
        <Form
          labelCol={{ span: 6 }}
          onFinish={(values) =>
            register({
              email: values.email,
              name: values.name,
              joinToken: joinToken,
              provider: 'Google',
            })
          }
        >
          <Form.Item
            label={'사용자 이름'}
            name="name"
            rules={[{ required: true, message: '이름은 필수입니다.' }]}
          >
            <Input placeholder="이름" />
          </Form.Item>
          <Form.Item
            label={'이메일 주소'}
            name="email"
            rules={[{ required: true, message: '이메일은 필수입니다.' }]}
            initialValue={email}
          >
            <Input placeholder="이메일" />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                width: '100%',
              }}
              type="primary"
              htmlType="submit"
            >
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}
