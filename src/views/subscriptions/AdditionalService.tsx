import React from 'react';
import { ISubscription } from 'types/ReduxTypes/subscription';

/**
 * AdditionalService component
 *
 * This component renders a single additional service of a subscription.
 *
 * @param {{ services: string[] }} props - The component props
 * @returns {JSX.Element} The AdditionalService component
 */
const AdditionalService = ({ subscription }: { subscription: ISubscription }) => {
  const textHighlight = 'text-xl font-medium text-red-600';

  const servicces =
    subscription.name === 'Basic'
      ? ['Standard Email, Faq and Chat Support']
      : subscription.name === 'Standard'
      ? ['Priority Email, Faq and Chat Support']
      : [
          'Dedicated account manager',
          '24/7 priority support',
          'Onsite Training and consulting services'
        ];
  return (
    <div className="flex flex-col">
      <h1 className={textHighlight}>Additional Services</h1>
      <div className="space-y-2 mt-2">
        {servicces?.map((service, index) => {
          return (
            <span key={index} className="font-medium capitalize flex items-center gap-1">
              <div className="size-1.5 bg-secondary rounded-full"></div>
              {service}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AdditionalService;
