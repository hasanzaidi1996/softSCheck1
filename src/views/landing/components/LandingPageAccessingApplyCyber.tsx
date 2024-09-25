import { Tooltip } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';
import Desktop from '../../../assets/img/Desktop.png';
import Responsive from '../../../assets/img/Responsive.png';
import Saas from '../../../assets/img/Saas.png';
import Server from '../../../assets/img/Server.png';
// import comingSoon from '../../../assets/img/comingSoon.png';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageAccessingApplyCyber = () => {
  const features = [
    {
      title: 'Responsive Web App',
      description:
        'Apply Cyber is designed for optimal viewing and interacrtion experince across all devices',
      image: Responsive
    },
    {
      title: 'Desktop Applications',
      description:
        'Apply Cyber can be intalled on desktop or laptop computers for a richer user experience',
      image: Desktop
    },
    {
      title: 'Saas Web-Portals',
      description:
        'Customer can access Apply Cyber through a web browser, Chrome, Edge, Firefox, etc. via a specific URL',
      image: Saas
    },
    {
      title: 'Server-Hosted Apps',
      description:
        'Installable on a central server. Users can access the application via client software or a web interface',
      image: Server
    }
  ];
  return (
    <div className=" rounded-2xl">
      <div className="container  flex flex-col gap-4 text-secondary p-12 pb-8">
        <h1 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-[60px] underline">
          Accessing Apply Cyber
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
          <p className="text-3xl text-center font-medium p-8">
            Apply Cyber is designed for optimal viewing and interacrtion experince across all
            devices
          </p>
          <div className="flex items-center justify-center mt-10 -space-x-5 ">
            <motion.div
              initial={{
                // if odd index card,slide from right instead of left
                opacity: 0.5,
                x: -280
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}>
              <div
                className={`rotate-45 ring-1 ring-secondary bg-primary rounded-md p-2 size-32 flex items-center justify-center cursor-pointer hover:scale-110 hover:transition hover:ease-in hover:duration-3`}>
                <Tooltip title={features?.[0].title}>
                  <img
                    src={features?.[0].image}
                    className="object-center object-contain -rotate-45"
                    alt="featureImage"
                  />
                </Tooltip>
              </div>
            </motion.div>
            <div className="flex flex-col gap-16">
              <motion.div
                initial={{
                  // if odd index card,slide from right instead of left
                  opacity: 0.5,
                  x: -320
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 2 // Animation duration
                  }
                }}>
                <div
                  className={`rotate-45 ring-1 ring-secondary bg-primary rounded-md p-2 size-32 flex items-center justify-center cursor-pointer hover:scale-110 hover:transition hover:ease-in hover:duration-3 `}>
                  <Tooltip title={features?.[1].title}>
                    <img
                      src={features?.[1].image}
                      className="object-center object-contain -rotate-45"
                      alt="featureImage"
                    />
                  </Tooltip>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  // if odd index card,slide from right instead of left
                  opacity: 0.5,
                  x: -320
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 2 // Animation duration
                  }
                }}>
                <div
                  className={`rotate-45 ring-1 ring-secondary bg-primary rounded-md p-2 size-32 flex items-center justify-center cursor-pointer hover:scale-110 hover:transition hover:ease-in hover:duration-3`}>
                  <Tooltip title={features?.[2].title}>
                    <img
                      src={features?.[2].image}
                      className="object-center object-contain -rotate-45"
                      alt="featureImage"
                    />
                  </Tooltip>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{
                // if odd index card,slide from right instead of left
                opacity: 0.5,
                x: -400
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}>
              <div
                className={`rotate-45 ring-1 ring-secondary bg-primary rounded-md p-2 size-32 flex items-center justify-center cursor-pointer hover:scale-110 hover:transition hover:ease-in hover:duration-3 `}>
                <Tooltip title={features?.[3].title}>
                  <img
                    src={features?.[3].image}
                    className="object-center object-contain -rotate-45"
                    alt="featureImage"
                  />
                </Tooltip>
              </div>
            </motion.div>
          </div>
        </div>
        {/* <div
          className="bg-secondary rounded-xl p-8 space-y-2 mt-8"
          style={{
            backgroundImage: `url(${comingSoon})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundOrigin: 'content-box'
          }}>
          <h1 className=" text-primary text-2xl max-md:text-2xl max-lg:text-3xl font-bold">
            APIs (Application Programming Interfaces)
          </h1>
          <p className="text-xl md:w-3/4 font-bold text-tertiary">
            Clients can integrate and access Apply Cyber&apos;s functionalities via APIs for newar
            Real-Time viewing of Cyber Complienece and Maturity
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPageAccessingApplyCyber;
