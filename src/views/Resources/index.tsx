import {
  ApiOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
  KeyOutlined,
  PaperClipOutlined
} from '@ant-design/icons';
import React from 'react';
import logo from '../../assets/img/logo.png';
import Res1 from '../../assets/img/res1.png';
import Res2 from '../../assets/img/res2.png';

/**
 * Resources
 *
 * A page that contains links to various cyber security
 * resources that may be useful to the user.
 *
 * @returns {React.ReactElement} The Resources component.
 */
const Resources = () => {
  const apiData = [
    {
      name: 'APIs for All Your Needs',
      heading: 'Minimize evidence gaps by integrating to the endpoints that matter',
      descp1:
        'Apply Cyber’s Open API empowers you to take control by facilitating integrations with the endpoints you rely on. It enables you to connect various solutions—such as security training platforms, background check services, MDM systems, and more—allowing you to access crucial evidence that has been stored separately.',
      descp2:
        'Leverage our endpoints to go beyond just compliance and audit requirements. With Apply Cyber’s Open API, you gain a complete suite of tools to enhance your security posture, streamline your risk management program, and seamlessly integrate other risk solutions.',
      image: Res1
    },
    {
      name: 'Effortless Click-and-Go Automations with Minimal to No Coding',
      heading: 'Get tasks done quickly and efficiently with easy-to-use templates',
      descp1:
        'Apply Cyber’s Open API simplifies connecting with both first-party developers and third-party solutions through pre-built templates, enabling you to accomplish common tasks quickly. But that’s not all—if you use automation tools like Tines, Torq, and Tray.io, you can access hundreds more integrations with Apply Cyber.',
      descp2:
        'We’ve designed our API based on REST API standards to enhance accessibility for developers and speed up implementation. This allows your team to quickly connect to Apply Cyber without disrupting your business, compliance, and risk initiatives. Visit our developer portal for more information.',
      image: Res2
    }
  ];
  const whatCanDo = [
    {
      title: 'Connect to Critical Endpoints',
      icon: DeploymentUnitOutlined,
      description:
        'Import controls and file-based evidence from external locations to help you maintain continuous compliance. '
    },
    {
      title: 'Push & Pull Evidence From External Sources',
      icon: CodeOutlined,
      description:
        'Bring in evidence from your security training solutions, background check providers, MDM systems, and more. '
    },
    {
      title: 'Get Granular Access',
      icon: ApiOutlined,
      description:
        'Determine what access level you give. Assign read and write permissions for every API key. '
    },
    {
      icon: ApiOutlined,
      title: 'REST API',
      description:
        'Built on REST API technology to make implementation seamless and simple for your team.'
    },
    {
      icon: PaperClipOutlined,
      title: 'API Documentation',
      description:
        'Get full documentation to help your team integrate and effectively use our Open API.'
    },
    {
      icon: KeyOutlined,
      title: 'API Key Tracking',
      description:
        'Every call made for each key is tracked ensuring an audit trail and automated evidence collection.'
    }
  ];
  return (
    <div className="md:space-y-16 space-y-4">
      <div className="bg-primary md:p-10 p-6 w-full text-secondary">
        <div className="container flex gap-4">
          <div className="max-w-32 max-h-32 flex items-center justify-center max-lg:hidden">
            <img src={logo} alt="logo" />
          </div>
          <div className="space-y-4">
            <h1 className="md:text-6xl text-3xl font-semibold text-secondary lg:w-3/4 md:leading-snug">
              Automate More With Apply Cyber&apos;s Open API
            </h1>
            <p className="md:text-xl text-lg font-semibold md:leading-snug lg:w-3/5">
              Use Apply Cyber&apos;s Open API to connect and scale your security program without
              compromising automation
            </p>
          </div>
        </div>
      </div>
      <div className="md:space-y-10 space-y-6">
        {apiData.map((data, index) => (
          <div key={index} className="p-10">
            <div className="container grid lg:grid-cols-2 grid-cols-1 gap-10 ">
              <div className={`flex flex-col gap-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <div>
                  <p className="mb-2 text-primary text-lg">{data.heading}</p>
                  <h1 className="md:text-4xl text-2xl font-bold">{data.name}</h1>
                </div>
                <p className="md:text-xl text-lg opacity-85 text-justify">{data.descp1}</p>
                <p className="md:text-xl text-lg opacity-85 text-justify">{data.descp2}</p>
              </div>
              <div
                className={`flex items-center justify-center ${
                  index % 2 === 0 ? 'order-1' : 'lg:order-2'
                }`}>
                <img src={data.image} alt="" className="w-full max-h-[400px] object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="p-10">
          <div className="container flex flex-col gap-8">
            <h1 className="text-3xl font-bold leading-10">
              What Can You Do With Apply Cyber&apos;s Open API?
            </h1>
            <div className="flex flex-col gap-4">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {whatCanDo.map((data, index) => (
                  <div
                    key={index}
                    className="shadow-md p-4 rounded-lg flex max-sm:flex-col items-start justify-start gap-4">
                    {data.icon ? <data.icon className="text-6xl text-primary" /> : <></>}
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-lg font-semibold">{data.title}</h1>
                      <p className="text-lg">{data.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
