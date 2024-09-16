import { Button, Layout, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Layout
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="이 페이지는 찾을 수 없어요!"
        extra={
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            홈으로 돌아가기
          </Button>
        }
      />
    </Layout>
  );
}
