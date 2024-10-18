import { Button } from 'antd';
import { trigerPhishing } from 'appRedux/actions/phishingAction';
import { useAppDispatch } from 'appRedux/store';
import { useParams } from 'react-router-dom';
import Phishing from '../../assets/img/Phished2.png';
const YouHaveBeenPhished = () => {
  const employeeName = 'Ali Baba';
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id || '';
  console.log(id);
  dispatch(trigerPhishing({ id }));

  return (
    <div className="container flex flex-col items-center justify-center p-6 gap-4 bg-tertiary rounded-lg">
      <div className="flex items-center justify-center ">
        <img src={Phishing} alt="phishing" className="w-96" />
      </div>
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-semibold text-primary">
          You Have Been 😈<span className="text-red-500">Phished!</span>😈{' '}
          <span className="font-bold animate-pulse text-5xl">{employeeName}</span>
        </h1>
        <p className="text-xl text-secondary">
          Don&apos;t worry, you&apos;re all good. We just wanted to show you how easy it is to fall
          for a phishing scam.
        </p>
      </div>
      <Button type="primary" className="rounded-lg">
        Go Back
      </Button>
    </div>
  );
};

export default YouHaveBeenPhished;
