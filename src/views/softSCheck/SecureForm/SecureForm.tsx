import { Steps } from 'antd';
import Access from './Access';
import Secure from './Secure';
import Virus from './Virus';
import { useState } from 'react';

/**
 * A simple component that renders a div with the text "SecureForm".
 *
 * @returns {JSX.Element} A JSX element containing the SecureForm text.
 */
const SecureForm = ({ setActive }: { setActive: any }) => {
  const virusQuestions = [
    'Is antivirus software installed on all devices across the organization?',
    'Do you have tools in place to monitor and detect malware, ransomware, and other malicious activities?',
    'Are regular scans performed on systems to identify and mitigate threats?',
    'Is malware protection software kept up to date with the latest definitions?',
    'Are employees trained on safe practices, like avoiding malicious downloads or suspicious email attachments?'
  ];
  const accessQuestions = [
    'Are unique user accounts created for every employee, with no shared credentials?',
    'Do you enforce multi-factor authentication (MFA) for access to sensitive systems and data?',
    'Is role-based access control (RBAC) implemented to ensure users only have access to what is necessary for their job?',
    'Is access to critical data and systems regularly reviewed and adjusted as needed?',
    'Is there a process in place for promptly removing access when employees leave the organization or change roles?'
  ];
  const secureQuestions = [
    'Are default passwords and settings changed before devices and systems are deployed?',
    'Are secure configuration settings applied to all devices (e.g., firewalls, routers, servers, workstations)?',
    'Are system settings regularly reviewed and updated to meet current security standards?',
    'Are unnecessary software, services, and user accounts disabled to minimize exposure?',
    'Do you have automated configuration management tools in place to enforce secure settings across the organization?'
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
            title: 'Virus and Malware Protection'
            // description: 'Protect from malicious software like viruses and malware'
          },
          {
            title: 'Access Control'
            // description: 'Control access to the organisation’s data and services'
          },
          {
            title: 'Secure Configuration'
            // description: 'Use secure settings for the organisation’s hardware and software'
          }
        ]}
      />
      {activeStep === 0 && (
        <Access accessQuestions={accessQuestions} setActiveStep={setActiveStep} />
      )}
      {activeStep === 1 && <Virus virusQuestions={virusQuestions} setActiveStep={setActiveStep} />}
      {activeStep === 2 && (
        <Secure
          secureQuestions={secureQuestions}
          setActive={setActive}
          setActiveStep={setActiveStep}
        />
      )}
    </div>
  );
};

export default SecureForm;
