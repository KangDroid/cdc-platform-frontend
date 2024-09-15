import { notification } from 'antd';
import axios from 'axios';
import { Component, ReactNode, useEffect } from 'react';

import { ErrorResponse } from '../lib/auth/api';
import { ErrorMap } from '../utils/ErrorMap.ts';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryStates {
  error?: Error | null;
  info?: {
    componentStack?: string;
  };
}

export class CustomErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryStates
> {
  state = {
    error: undefined,
  };

  componentDidCatch(error: Error | null) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    const errorMessage = error ? this.convertErrorToMessage(error) : undefined;
    return (
      <ErrorMessage
        message={errorMessage}
        setError={() => {
          this.setState({ error: null });
        }}
      >
        {children}
      </ErrorMessage>
    );
  }

  convertErrorToMessage(error: unknown) {
    if (!axios.isAxiosError<ErrorResponse>(error)) {
      console.error('not an axios error or ErrorResponse', error);

      if (error instanceof Error) {
        return error.message;
      }

      return '알 수 없는 에러가 발생했습니다.';
    }

    if (error.response === undefined) {
      console.error('no response', error);
      return '알 수 없는 에러가 발생했습니다.(errorResponse 타입이지만, 실제 응답이 없습니다.)';
    }

    const errorTitle = error.response.data.errorTitle ?? '';
    return ErrorMap[errorTitle] ?? '알 수 없는 에러가 발생했습니다.';
  }
}

function ErrorMessage({
  message,
  children,
  setError,
}: {
  message: string | undefined;
  children: ReactNode;
  setError: (error: Error | null) => void;
}) {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (message) {
      api['error']({
        message: 'Error occurred',
        description: message,
        duration: 3,
        onClose: () => setError(null),
      });
    }
  }, [api, message, setError]);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
}
