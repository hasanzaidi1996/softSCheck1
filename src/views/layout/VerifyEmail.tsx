import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';
import { verifyEmail } from 'appRedux/actions/authAction';
import { useAppDispatch } from 'appRedux/store';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    title: 'Checking for Mail Authentication',
    subTitle: 'Please wait few minutes, to verify the mail.'
  });

  useEffect(() => {
    (async () => {
      if (tokenId) {
        if (await dispatch(verifyEmail(tokenId)).unwrap()) {
          setStatus({
            status: 'success',
            title: 'Email has been successfully verified',
            subTitle: 'Congratulations!, your email has been verified, you can login now!'
          });
        }
      }
    })();
  }, [tokenId]);

  return (
    <Result
      status={status.status as ResultStatusType}
      title={status.title}
      subTitle={status.subTitle}
      extra={
        <Button
          onClick={() => {
            navigate('/');
          }}>
          Login
        </Button>
      }
    />
  );
};

export default VerifyEmail;
