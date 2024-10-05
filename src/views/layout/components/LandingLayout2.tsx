import NavBar from 'components/navBar';
import { Outlet } from 'react-router-dom';

/**
 * LandingLayout2 component
 *
 * This component renders the layout for the landing page.
 *
 * @returns {JSX.Element} The LandingLayout2 component
 */
const LandingLayout2 = () => {
  return (
    <div>
      <header className="sticky w-full top-0 z-50">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default LandingLayout2;
