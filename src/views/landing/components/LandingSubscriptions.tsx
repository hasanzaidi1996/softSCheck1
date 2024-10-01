import { getSubscriptions } from 'appRedux/actions/subscriptionAction';
import { SubscriptionSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ISubscription } from 'types/ReduxTypes/subscription';
import SubscriptionCard from 'views/subscriptions/SubscriptionCard';

/**
 * LandingSubscriptions component
 *
 * This component renders the subscriptions page of the landing page.
 *
 * @returns {JSX.Element} The LandingSubscriptions component
 */
const LandingSubscriptions = () => {
  const dispatch = useAppDispatch();
  const { subscriptions, subscriptionLoading } = useSelector(SubscriptionSelector);
  useEffect(() => {
    if (!subscriptions && subscriptionLoading) {
      dispatch(getSubscriptions());
    }
  }, [subscriptions]);
  return (
    <div className="container flex flex-col gap-8 max-md:gap-4">
      <h1 className="text-4xl max-md:text-2xl font-bold text-center mb-6 max-md:mb-2 text-secondary underline">
        Our Subscriptions
      </h1>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-4`}>
        {subscriptions &&
          subscriptions.map((subscription: ISubscription, index: number) => {
            return (
              index < 4 && (
                <div key={index} className="flex justify-center">
                  <div className="hover:transition hover:scale-[102%] hover:shadow hover:duration-200 hover:ease-in w-80 ">
                    <SubscriptionCard subscription={subscription} key={index} hasSwitch={false} />
                  </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default LandingSubscriptions;
