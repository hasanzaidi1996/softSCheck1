// import LandingSubscriptions from 'views/landing/components/LandingSubscriptions';
import Subscriptions from 'views/subscriptions';

/**
 * Pricing component
 *
 * This component renders a page with pricing information.
 *
 * @returns {React.ReactElement} The Pricing component
 */
const Pricing = () => {
  return (
    <div className="md:space-y-16 space-y-4">
      <div className="bg-secondary md:p-10 p-6 w-full text-primary">
        <div className="container flex gap-4">
          {/* <img src={LogoMark} alt="logo" className="size-20" /> */}
          <div className="space-y-4">
            <h1 className="md:text-6xl text-3xl font-semibold text-primary md:leading-snug">
              Apply Cyber Pricing Plans
            </h1>
            <p className="md:text-xl text-lg font-semibold md:leading-snug ">
              Choose the plan that’s right for you. We have plans for everyone.
            </p>
          </div>
        </div>
      </div>
      {/* <LandingSubscriptions />
       */}
      <Subscriptions toSignUp />
    </div>
  );
};

export default Pricing;
