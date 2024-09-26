import { Button, Divider } from 'antd';
import { getSubscriptions, getUserSubsciption } from 'appRedux/actions/subscriptionAction';
import { SubscriptionSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ISubscription } from 'types/ReduxTypes/subscription';

interface IAddOnsProps {
  addOn: {
    name: string;
    price: any;
    description: string;
  };
}
/**
 * AddOns component
 *
 * This component renders a single add-on card.
 *
 * @returns {JSX.Element} The AddOns component
 */
const AddOns = () => {
  const dispatch = useAppDispatch();
  const { subscriptions, subscriptionLoading, userSubscribed, userSubscribedLoading } =
    useSelector(SubscriptionSelector);
  const [subsData, setSubsData] = useState<ISubscription>();
  console.log(subsData);
  useEffect(() => {
    if (!subscriptions && subscriptionLoading) {
      dispatch(getSubscriptions());
    }
  }, [subscriptions]);
  useEffect(() => {
    if (!userSubscribed && userSubscribedLoading) {
      dispatch(getUserSubsciption());
    }
  }, [userSubscribed]);
  useEffect(() => {
    if (subscriptions && userSubscribed) {
      const currentSubscription = subscriptions?.filter((subscription) => {
        if (userSubscribed) {
          return subscription?._id === userSubscribed?.subscriptionId;
        }
        return false;
      });

      setSubsData(currentSubscription?.[0]);
    }
  }, [subscriptions, userSubscribed]);

  console.log('@@@@', subscriptions, subscriptionLoading, userSubscribed, userSubscribedLoading);
  const addOns = [
    {
      name: 'EasyAudit',
      price:
        subsData?.name === 'Free'
          ? 'Not Available'
          : subsData?.name === 'Basic'
          ? '$ 200'
          : subsData?.name === 'Standard'
          ? '$ 200'
          : 'Custom',
      description:
        'Automates 80% of pre-audit work, generates compliance reports, and tracks regulatory requirements. With business consent, assessment reports can be shared with EasyAudit-registered auditors, reducing manual work and saving costs.'
    },
    {
      name: 'SecureCohort',
      price:
        subsData?.name === 'Free'
          ? 'Not Available'
          : subsData?.name === 'Basic'
          ? '$ 200'
          : subsData?.name === 'Standard'
          ? '$ 200'
          : 'Custom',
      description:
        'A network of cybersecurity service providers offering targeted remediation services. Businesses can share assessment reports with SecureCohort-registered providers to receive specialized support for addressing vulnerabilities.'
    }
  ];

  return (
    <div className="container mb-4">
      <h1 className="text-2xl my-4 capitalize">
        Add Ons to Your{' '}
        <b>
          {subsData?.name} - {subsData?.validity}
        </b>{' '}
        Subscription
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 gap-y-6">
        {addOns.map((addOn, index) => {
          return <AddOnsCard key={index} addOn={addOn} />;
        })}
      </div>
    </div>
  );
};

export default AddOns;
/**
 * AddOnsCard component
 *
 * This component renders a single add-on card.
 *
 * @returns {JSX.Element} The AddOnsCard component
 */
const AddOnsCard = ({ addOn }: IAddOnsProps) => {
  return (
    <div className=" bg-tertiary rounded-lg p-6 flex flex-col justify-between hover:transition hover:scale-105 hover:shadow hover:duration-300 hover:ease-in ">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-center">{addOn.name}</h1>
        <div className="flex flex-col gap-0">
          <Divider />
          <p className="text-2xl font-bold text-red-600">{addOn.price}</p>
          <Divider />
        </div>
        <p className="text-justify text-lg">{addOn.description}</p>

        {/* <div className="flex flex-col">
          <h1 className={textHighlight}>Features</h1>
          <div className="space-y-2 mt-2">
            {addOn.plugins?.map((plugin: string, index: number) => {
              return (
                <span key={index} className="font-medium capitalize flex items-center gap-1">
                  <div className="size-1.5 bg-secondary rounded-full"></div>
                  {plugin}
                </span>
              );
            })}
          </div>
        </div>
        <Divider /> */}
        <Button
          className="w-full rounded-lg"
          type="primary"
          disabled={addOn.price === 'Not Available'}>
          <span className="text-sm">
            {addOn.price === 'Not Available'
              ? 'N/A for current subscription'
              : `Add on For ${addOn.price}`}
          </span>
        </Button>
      </div>
    </div>
  );
};
