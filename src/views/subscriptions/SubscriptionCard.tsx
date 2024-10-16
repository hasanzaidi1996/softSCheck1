import { Button, Divider } from 'antd';
import { ISubscription } from 'types/ReduxTypes/subscription';
import AdditionalService from './AdditionalService';
import { useNavigate } from 'react-router-dom';
/**
 * SubscriptionCard component
 *
 * This component renders a single subscription card.
 *
 * @param {{ subscription: ISubscription; userSubscribed: any; hasSwitch?: boolean }} props - The component props
 * @returns {JSX.Element} The SubscriptionCard component
 */
const SubscriptionCard = ({
  subscription,
  userSubscribed,
  hasSwitch = false,
  toSignUp = false,
  hasButton = true
}: {
  subscription: ISubscription;
  userSubscribed?: any;
  hasSwitch?: boolean;
  toSignUp?: boolean;
  hasButton?: boolean;
}) => {
  const textHighlight = 'text-xl font-medium text-red-600';
  const navigate = useNavigate();
  return (
    <div
      className={`h-full bg-tertiary rounded-lg p-4 flex flex-col justify-between shadow-lg  ${
        userSubscribed && subscription?._id === userSubscribed?.subscriptionId
          ? 'border-2 border-green-500'
          : ''
      }`}>
      <div className="space-y-2">
        <h1
          className={`text-xl font-semibold text-center capitalize ${
            userSubscribed && subscription?._id === userSubscribed?.subscriptionId
              ? 'text-red-600'
              : ''
          }`}>
          {subscription.name} - {subscription.validity}
        </h1>

        <Divider />
        {subscription.price === -1 ? (
          <p className="text-2xl font-bold text-red-600">Custom Price</p>
        ) : (
          <div className="flex gap-2 items-center">
            <p className="text-2xl font-bold text-red-600">${subscription.price}</p>
            <p>/ {subscription.validity === 'yearly' ? 'year' : 'month'}</p>
          </div>
        )}
        <p>
          <span>
            <span className={textHighlight}>
              {subscription.uploadLimit === -1 ? 'Custom' : subscription.uploadLimit}
            </span>{' '}
            Upload Limit
            {subscription.uploadLimit === 1 ? '' : 's'}
          </span>
        </p>
        <p>
          <span>
            <span className={textHighlight}>
              {subscription.userCreationLimit === -1 ? 'Custom' : subscription.userCreationLimit}
            </span>{' '}
            User Creation Limit
          </span>
        </p>
        <p>
          <span>
            <span className={textHighlight}>
              {subscription.apiAccess ? <span className="text-green-600">Has</span> : 'No'}
            </span>{' '}
            API Access
          </span>
        </p>
        {/* <Divider />
          <div className="flex flex-col">
            <h1 className={textHighlight}>Plugins</h1>
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
          <Divider /> */}
        <AdditionalService subscription={subscription} />
        {subscription?.features && subscription.features.length > 0 && <Divider />}
        {subscription?.features && subscription.features.length > 0 && (
          <div className="flex flex-col">
            <h1 className={textHighlight}>Features</h1>
            <div className="space-y-2 mt-2">
              {subscription.features?.map((plugin: string, index: number) => {
                return (
                  <span key={index} className="font-medium capitalize flex items-center gap-1">
                    <div className="size-1.5 bg-secondary rounded-full"></div>
                    {plugin}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {hasButton && (
        <Button
          className="w-full rounded-lg mt-4"
          type="primary"
          onClick={() => {
            toSignUp ? navigate('/signup') : navigate(`/mssp/payment/${subscription._id}`);
          }}
          disabled={subscription._id === userSubscribed?.subscriptionId}>
          {subscription.validity === 'yearly' && subscription.price !== -1 ? (
            <span className="text-sm">Subscribe for ${subscription.price}/year</span>
          ) : subscription.validity === 'monthly' && subscription.price !== -1 ? (
            <span className="text-sm">Subscribe for ${subscription.price}/month</span>
          ) : subscription.price === 0 ? (
            <span className="text-sm">Subscribe</span>
          ) : (
            <span className="text-sm">Request Pricing</span>
          )}
        </Button>
      )}
    </div>
  );
};

export default SubscriptionCard;
