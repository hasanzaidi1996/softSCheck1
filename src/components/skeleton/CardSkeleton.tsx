import { Divider, Skeleton } from 'antd';

/**
 * A skeleton component for the SubscriptionCard.
 *
 * This component is used to display a loading view when the SubscriptionCard is
 * loading or when the data is not available.
 *
 * @returns A JSX element representing a skeleton of the SubscriptionCard.
 */
const CardSkeleton = () => {
  return (
    <div className={`h-full bg-tertiary rounded-lg p-4 flex flex-col justify-between shadow-lg`}>
      <div className="space-y-2">
        <Skeleton paragraph={{ rows: 1 }} active={true} />
        <Skeleton active={true} />
        <Divider />
        <Skeleton active={true} />
        <Skeleton active={true} />
      </div>
    </div>
  );
};

export default CardSkeleton;
