import { Badge, Switch } from 'antd';
import { getSubscriptions } from 'appRedux/actions/subscriptionAction';
import { SubscriptionSelector } from 'appRedux/reducers/subscriptionReducer';
import { useAppDispatch } from 'appRedux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ISubscription } from 'types/ReduxTypes/subscription';
import SubscriptionCard from './SubscriptionCard';

/**
 * Subscriptions component
 *
 * This component renders the subscriptions page.
 *
 * @returns {JSX.Element} The Subscriptions component
 */
const Subscriptions = ({ toSignUp = false }: { toSignUp?: boolean }) => {
  const dispatch = useAppDispatch();
  const { subscriptions, subscriptionLoading, userSubscribed } = useSelector(SubscriptionSelector);
  useEffect(() => {
    if (!subscriptions && subscriptionLoading) {
      dispatch(getSubscriptions());
    }
  }, [subscriptions]);
  // useEffect(() => {
  //   if (!userSubscribed && userSubscribedLoading) {
  //     dispatch(getUserSubsciption());
  //   }
  // }, [userSubscribed]);
  const [validity, setValidity] = useState('monthly');
  return (
    <div className="container mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-4 capitalize">{validity} Subscriptions</h1>

        <div className="flex justify-center">
          <Switch
            className="checked:bg-red-600"
            checkedChildren="Monthly"
            unCheckedChildren="Yearly"
            defaultChecked
            onChange={(checked) => {
              return setValidity(!checked ? 'yearly' : 'monthly');
            }}
          />
        </div>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2  ${
          validity === 'yearly' ? 'gap-4 xl:grid-cols-4' : 'xl:grid-cols-3 gap-8'
        }`}>
        {subscriptions &&
          subscriptions
            .filter((subscription) => {
              return subscription?.validity === validity && subscription.name !== 'Free';
            })
            .map((subscription: ISubscription, index: number) => {
              return (
                <div key={index} className="flex justify-center">
                  {subscription._id === userSubscribed?.subscriptionId ? (
                    <div className="hover:transition hover:scale-[102%] hover:shadow hover:duration-200 hover:ease-in w-80 ">
                      <Badge.Ribbon text="Subscribed" placement="end" color="red" key={index}>
                        <SubscriptionCard
                          userSubscribed={userSubscribed}
                          subscription={subscription}
                        />
                      </Badge.Ribbon>
                    </div>
                  ) : (
                    <div className="hover:transition hover:scale-[102%] hover:shadow hover:duration-200 hover:ease-in w-80 ">
                      <SubscriptionCard
                        toSignUp={toSignUp}
                        userSubscribed={userSubscribed}
                        subscription={subscription}
                        key={index}
                      />
                    </div>
                  )}
                </div>
              );
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
 * @param {{ subscription: ISubscription; userSubscribed: any }} props - The component props
 * @returns {JSX.Element} The SubscriptionCard component
 */
