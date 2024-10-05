import { AppstoreOutlined, CodeOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';
import { AuthSelector } from 'appRedux/reducers';
import { branding } from 'config/branding';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoMark from '../../assets/icons/logo-white.svg';
import { LogoIcon } from 'assets/icons';

/**
 * A navigation bar component.
 *
 * @returns {React.ReactElement} A <div> containing the navigation bar
 */
const NavBar = () => {
  const { user } = useSelector(AuthSelector);

  const navigate = useNavigate();
  const links = [
    {
      name: 'Home',
      icon: HomeOutlined,
      path: '/'
    },
    {
      name: 'Resources',
      icon: CodeOutlined,
      path: '/resources'
    },
    {
      name: 'Pricing',
      icon: DollarOutlined,
      path: '/pricing'
    }
  ];
  return (
    <div className="bg-secondary">
      <div className="flex items-center justify-between container p-3">
        <div className="flex gap-4 items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={LogoMark} alt="logo" className="md:size-10 size-7 object-contain" />
          <h1 className="text-2xl max-md:hidden">
            <span className="text-tertiary">{branding.BRAND_NAME}</span>
          </h1>
        </div>
        <div className="flex gap-4">
          {links.map((link) => (
            <div
              key={link.path}
              className="flex gap-1 items-center justify-center cursor-pointer rounded-lg p-2 text-tertiary text-lg  hover:text-secondary hover:bg-primary transition-all duration-300 ease-in-out "
              onClick={() => navigate(link.path)}>
              <link.icon />
              <p className="max-md:hidden">{link.name}</p>
            </div>
          ))}
        </div>
        <div onClick={() => navigate('/login')} className="cursor-pointer">
          <div className="md:hidden">
            {user ? (
              <AppstoreOutlined className="text-tertiary" />
            ) : (
              <LogoIcon className="text-tertiary" />
            )}
          </div>

          <button className="bg-primary text-secondary text-lg rounded-lg p-2 cursor-pointer min-w-20  hover:text-secondary hover:bg-tertiary transition-all duration-300 ease-in-out max-md:hidden">
            {user ? 'Dashboard' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
