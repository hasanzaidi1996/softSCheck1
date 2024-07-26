import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';
import { verifyEmail } from 'appRedux/actions/authAction';
import { useAppDispatch } from 'appRedux/store';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

/**
 * Verify mail page component
 *
 * @returns {React.FC} component to render
 */
const VerifyEmail: React.FC = () => {
  const { tokenId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState({
    status: 'info',
    title: 'Verifying your email address Please wait',
    subTitle: 'Please wait few minutes, to verify the mail.'
  });

  useEffect(() => {
    (async () => {
      console.log('token id', tokenId);
      if (tokenId) {
        if (await dispatch(verifyEmail(tokenId)).unwrap()) {
          setStatus({
            status: 'success',
            title: 'Email has been successfully verified',
            subTitle: 'Congratulations!, your email has been verified, you can login now!'
          });
        } else {
          setStatus({
            status: 'error',
            title: 'Email could not be verified',
            subTitle:
              'Please make sure your, verification link is proper, otherwise contact support at contact@connectingdots.com'
          });
        }
      }
    })();
  }, [tokenId]);

  return (
    <Result
      status={status.status as ResultStatusType}
      title={
        <>
          {status.title}{' '}
          {status.status === 'info' && (
            <ReactTyped strings={['....']} loop typeSpeed={200} showCursor={false} />
          )}
        </>
      }
      subTitle={status.subTitle}
      extra={
        status.status === 'success' && (
          <Button
            onClick={() => {
              navigate('/auth/login');
            }}>
            Login
          </Button>
        )
      }
    />
  );
};

export default VerifyEmail;
