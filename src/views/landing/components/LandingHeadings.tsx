import React from 'react';

/**
 * LandingHeadings component
 *
 * This component renders the headings on the landing page.
 *
 * @returns {JSX.Element} The LandingHeadings component
 */
const LandingHeadings = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="w-full h-0.5 mt-2 bg-primary"></div>
      <h1 className="text-4xl max-md:text-2xl font-bold text-center text-secondary text-nowrap">
        {heading}
      </h1>
      <div className="w-full h-0.5 mt-2 bg-primary"></div>
    </div>
  );
};

export default LandingHeadings;
