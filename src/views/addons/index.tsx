import { Badge, Button, Divider } from 'antd';
import { getAddOns } from 'appRedux/actions/addOnAction';
import { getSubscriptions, getUserSubsciption } from 'appRedux/actions/subscriptionAction';
import { AddOnSelector, SubscriptionSelector } from 'appRedux/reducers';

import { useAppDispatch } from 'appRedux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IAddOn } from 'types/ReduxTypes/addOn';
import { ISubscription, IUserSubscription } from 'types/ReduxTypes/subscription';

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
  const { addOnLoading, addOns } = useSelector(AddOnSelector);

  useEffect(() => {
    if (!subscriptions && subscriptionLoading) {
      dispatch(getSubscriptions());
    }
  }, [subscriptions]);
  useEffect(() => {
    if (!addOns && addOnLoading) {
      dispatch(getAddOns());
    }
  }, [addOns]);
  useEffect(() => {
    if (!userSubscribed && userSubscribedLoading) {
      dispatch(getUserSubsciption());
    }
  }, [userSubscribed]);

  const [subsData, setSubsData] = useState<ISubscription>();

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

  return (
    <div className="container mb-4">
      <h1 className="text-2xl my-4 capitalize">
        Add Ons to Your{' '}
        <b>
          {subsData?.name} - {subsData?.validity}
        </b>{' '}
        Subscription
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6">
        {addOns?.map((addOn, index) => {
          return (
            <div key={index} className="flex justify-center">
              {userSubscribed && userSubscribed?.addons?.includes(addOn?._id as any) ? (
                <div
                  className="hover:transition hover:scale-[102%] hover:shadow hover:duration-200 hover:ease-in w-80 "
                  key={index}>
                  <Badge.Ribbon text="Subscribed" placement="end" color="red" key={index}>
                    <AddOnsCard key={index} addOn={addOn} userSubscribed={userSubscribed} />
                  </Badge.Ribbon>
                </div>
              ) : (
                <div
                  className="hover:transition hover:scale-[102%] hover:shadow hover:duration-200 hover:ease-in w-80 "
                  key={index}>
                  <AddOnsCard key={index} addOn={addOn} />
                </div>
              )}
            </div>
          );
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
const AddOnsCard = ({
  addOn,
  userSubscribed
}: {
  addOn: IAddOn;
  userSubscribed?: IUserSubscription;
}) => {
  return (
    <div className=" bg-tertiary rounded-lg p-6 flex flex-col justify-between h-full">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-center">{addOn.name}</h1>
        <div className="flex flex-col gap-0">
          <Divider />
          <p className="text-2xl font-bold text-red-600">$ {addOn.price}</p>
          <Divider />
        </div>
        <p className="text-lg">{addOn.description}</p>
      </div>
      <Button
        className="w-full rounded-lg"
        type="primary"
        disabled={addOn.price === 0 || userSubscribed?.addons?.includes(addOn?._id as any)}>
        <span className="text-sm">
          {addOn.price === 0 ? 'N/A for current subscription' : `Add on For $ ${addOn.price}`}
        </span>
      </Button>
    </div>
  );
};
