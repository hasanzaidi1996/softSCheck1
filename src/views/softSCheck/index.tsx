import { Layout } from 'antd';
import { useState } from 'react';
import SoftSCheckLogo from '../../assets/img/softsCheck.png';
import AssetsForm from './AssetForm/AssetsForm';
import BackupForm from './BackupForm/BackupForm';
import RespondForm from './RespondForm/RespondForm';
import SecureForm from './SecureForm/SecureForm';
import UpdateForm from './UpdateForm/UpdateForm';

/**
 * A page for softSCheck
 * @return {React.ReactElement} The rendered page
 */
const SoftSCheck = () => {
  const { Header, Sider, Content, Footer } = Layout;
  const siderItems = ['Assets', 'Secure/Protect', 'Update', 'Backup', 'Respond'];
  const [active, setActive] = useState(siderItems[0]);

  return (
    <Layout>
      <Header className="bg-white sticky top-0 z-50 p-0 m-0">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-2xl">Cyber Security Essentials Singapore</h1>
          <img src={SoftSCheckLogo} alt="logo" className="w-32" />
        </div>
      </Header>
      <Layout>
        <Sider className="bg-blue-50" width={250}>
          <div className="flex flex-col gap-4 p-4">
            {siderItems.map((item) => (
              <div
                key={item}
                className={`bg-white rounded-md text-left p-2 cursor-pointer ${
                  active === item && 'bg-blue-500 text-white'
                }`}
                onClick={() => setActive(item)}>
                {item}
              </div>
            ))}
          </div>
        </Sider>
        <Content>
          <div className="container p-4">
            {active === 'Assets' && <AssetsForm setActive={setActive} />}
            {active === 'Secure/Protect' && <SecureForm setActive={setActive} />}
            {active === 'Update' && <UpdateForm setActive={setActive} />}
            {active === 'Backup' && <BackupForm setActive={setActive} />}
            {active === 'Respond' && <RespondForm />}
          </div>
        </Content>
      </Layout>
      <Footer className="bg-white h-10 p-0 m-0 flex items-center justify-center">
        <h1 className="text-lg text-center">Powered by Apply Cyber</h1>
      </Footer>
    </Layout>
  );
};

export default SoftSCheck;
