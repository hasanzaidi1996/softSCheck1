import { Button, Divider } from 'antd';
import { getSubscriptions } from 'appRedux/actions/subscriptionAction';
import { SubscriptionSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ISubscription } from 'types/ReduxTypes/subscription';

/**
 * Subscriptions component
 *
 * This component renders the subscriptions page.
 *
 * @returns {JSX.Element} The Subscriptions component
 */
const Subscriptions = () => {
  const dispatch = useAppDispatch();
  const { subscriptions, subscriptionLoading } = useSelector(SubscriptionSelector);
  useEffect(() => {
    if (!subscriptions && subscriptionLoading) {
      dispatch(getSubscriptions());
    }
  }, [subscriptions]);
  console.log('@@@@', subscriptions, subscriptionLoading);
  return (
    <div className="container mb-4">
      <h1 className="text-2xl my-4">Subscriptions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-6">
        {subscriptions &&
          subscriptions.map((subscription: ISubscription, index: number) => {
            return <SubscriptionCard subscription={subscription} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Subscriptions;

/**
 * SubscriptionCard component
 *
 * This component renders a single subscription card.
 *
 * @returns {JSX.Element} The SubscriptionCard component
 */
const SubscriptionCard = ({ subscription }: { subscription: ISubscription }) => {
  const textHighlight = 'text-xl font-medium text-red-600';
  return (
    <div className="max-w-96 bg-tertiary rounded-lg p-6 flex flex-col justify-between hover:transition hover:scale-105 hover:shadow hover:duration-300 hover:ease-in ">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-center">{subscription.name}</h1>
        <Divider />
        <div className="flex gap-2 items-center">
          <p className="text-2xl font-bold text-red-600">${subscription.price}</p>
          <p>/ {subscription.validity === 'yearly' ? 'year' : 'month'}</p>
        </div>
        <p>
          <span>
            <span className={textHighlight}>{subscription.uploadLimit}</span> Upload Limit
            {subscription.uploadLimit === 1 ? '' : 's'}
          </span>
        </p>
        <p>
          <span>
            <span className={textHighlight}>{subscription.userCreationLimit}</span> User Creation
            Limit
          </span>
        </p>
        <p>
          <span>
            <span className={textHighlight}>{subscription.apiAccess ? 'Has' : 'No'}</span> API
            Access
          </span>
        </p>
        <Divider />
        <div className="flex flex-col">
          <h1 className={textHighlight}>Features</h1>
          <div className="space-y-2 mt-2">
            {subscription.plugins?.map((plugin: string, index: number) => {
              return (
                <span key={index} className="font-medium capitalize flex items-center gap-1">
                  <div className="size-1.5 bg-secondary rounded-full"></div>
                  {plugin}
                </span>
              );
            })}
          </div>
        </div>
        <Divider />
      </div>
      <Button className="w-full rounded-lg" type="primary">
        {subscription.validity === 'yearly' ? (
          <span className="text-sm">Subscribe for ${subscription.price}</span>
        ) : (
          <span className="text-sm">Subscribe for ${subscription.price}/month</span>
        )}
      </Button>
    </div>
  );
};
