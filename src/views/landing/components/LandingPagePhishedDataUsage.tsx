import { useState } from 'react';
import { motion } from 'framer-motion';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPagePhishedDataUsage = () => {
  const [active, setActive] = useState(0);
  const services = [
    {
      title: 'Overall status Percentage',
      description: 'Implemented, Activated, Restricted, Completed, Hardened'
    },
    {
      title: 'Date of Implementation',
      description: 'Range of dates for implementation of various components'
    },
    {
      title: 'Implementation Date',
      description: 'The implementation date range of various components'
    },
    {
      title: 'Compliance Status by Year, Quarter and Month',
      description: 'Trend line showing compliance status over line for various componets'
    },
    {
      title: 'Maturity Level',
      description: 'Illustration of maturity levels (Levels 0, 1, 2, and 3)'
    },
    {
      title: 'Count of Test Results by Months',
      description: 'Number of Test Results by month'
    },
    {
      title: 'Success/Faliure Status Count by Component',
      description: 'Percentage of Success and Faliur status for each component '
    },
    {
      title: 'Components by Tree',
      description:
        'Number of components by type (for example Multi-factor Authentication, Admin restrictions and Daily Backup)'
    }
  ];
  return (
    <div className=" p-8 ">
      <div className="container flex flex-col gap-8 max-md:gap-4">
        <h1 className="text-4xl max-md:text-2xl font-bold text-center mb-6 max-md:mb-2 text-secondary underline">
          Deep Assesment Insights
        </h1>

        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4">
          {services.map((service, index: number) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: index % 2 === 0 ? -100 : 100
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  y: 0,
                  transition: {
                    duration: 1 // Animation duration
                  }
                }}
                className={`flex flex-col items-center justify-center gap-5 p-8 max-md:p-4 cursor-pointer ${
                  active === index && 'bg-primary'
                }
                `}
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '10px'
                  // transition: 'all 0.3s ease-in-out'
                }}
                key={index}
                onClick={() => {
                  return setActive(index);
                }}>
                {/* <div className="flex items-center justify-center max-md:scale-75">
                  {service.icon}
                </div> */}
                <h1
                  className={`text-2xl max-md:text-xl font-medium text-center text-secondary ${
                    active === index && 'text-secondary'
                  }`}>
                  {service.title}
                </h1>
                {/* <p
                  className={`text-xl max-md:text-sm text-center text-tertiary ${
                    active === index && ''
                  }`}>
                  {service.description}
                </p> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPagePhishedDataUsage;
