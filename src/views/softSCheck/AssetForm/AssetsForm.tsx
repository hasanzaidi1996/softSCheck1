import { Steps } from 'antd';
import DataSurvey from './DataSurvey';
import HardwareSoftware from './HardwareSoftware';
import People from './People';
import { useState } from 'react';

/**
 * A simple component that renders a div with the text "AssetsForm".
 *
 * @returns {JSX.Element} A JSX element containing the AssetsForm text.
 */
const AssetsForm = ({ setActive }: { setActive: any }) => {
  /**
   * Called when the form is submitted.
   *
   * Logs a success message with the submitted values to the console.
   * @param {Object} values - The values of the form fields.
   */

  const peopleQuestions = [
    'Do employees undergo regular cybersecurity awareness training?',
    'Are there documented cybersecurity policies shared with all staff?',
    'Is there a formal onboarding process to train new employees on cybersecurity hygiene?',
    'Do employees understand how to recognize and report phishing attempts or other cyber threats?',
    'Is cybersecurity responsibility clearly communicated across teams?'
  ];
  const hardwareQuestions = [
    'Is there an up-to-date inventory of all hardware assets (e.g., computers, routers, mobile devices) used within the organization?',
    'Do you maintain a complete list of all software installed across devices?',
    'Are unauthorized devices and software monitored and removed promptly?',
    'Is the use of End-of-Support (EOS) hardware and software identified and addressed?',
    'Is there a process to identify and track new hardware and software acquisitions?'
  ];
  const dataQuestions = [
    'Has your organization classified the types of data it handles (e.g., sensitive, confidential)?',
    'Do you know where your organization’s critical data is stored (both on-premises and in the cloud)?',
    'Is data encrypted when stored and transmitted across the network?',
    'Are there access control policies to restrict unauthorized access to sensitive data?',
    'Do you have a data retention policy that aligns with regulatory requirements?'
  ];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container bg-white rounded-lg p-6">
      <Steps
        className="my-6"
        current={activeStep}
        onChange={setActiveStep}
        items={[
          {
            title: 'People'
            // description: 'Equip employees with know-how to be the first line of defence.'
          },
          {
            title: 'Harware & Software'
            // description: 'Know what hardware and software the organisation has and protect them'
          },
          {
            title: 'Data'
            // description: 'Know what data the organisation has, where they are, and secure the data'
          }
        ]}
      />
      {activeStep === 0 && (
        <People peopleQuestions={peopleQuestions} setActiveStep={setActiveStep} />
      )}
      {activeStep === 1 && (
        <HardwareSoftware hardwareSoftware={hardwareQuestions} setActiveStep={setActiveStep} />
      )}
      {activeStep === 2 && (
        <DataSurvey
          dataQuestions={dataQuestions}
          setActive={setActive}
          setActiveStep={setActiveStep}
        />
      )}
    </div>
  );
};

export default AssetsForm;
