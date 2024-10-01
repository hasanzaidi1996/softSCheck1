import Dots2 from 'assets/img/Dots2';
import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageStats = () => {
  const stats = [
    {
      title: 'Data Users',
      count: 100,
      postFix: ' M+'
    },
    {
      title: 'Data Sources',
      count: 40
    },
    {
      title: 'Products',
      count: 5,
      postFix: '+'
    }
  ];

  return (
    <div className="bg-primary py-16 text-tertiary relative">
      <div className="text-secondary flex max-lg:flex-col max-lg:justify-center justify-between items-center w-full gap-20 max-lg:gap-10 container">
        <p className="text-3xl max-md:text-xl leading-[40px] w-1/2 max-lg:w-full font-semibold container max-lg:text-center">
          Apply Cyber Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          perferendis aliquam ab. Quasi, vitae eligendi. Id consequ
        </p>
        <div className="h-40 w-[0.5px] bg-secondary max-lg:hidden"></div>
        <div className=" w-1/2 max-lg:w-full container space-y-4">
          <p className="text-lg max-md:text-sm leading-[25px] max-lg:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Pariatur accusamus necessitatibus deleniti optio,
            recusandae ab
          </p>
          <div className="flex justify-between max-lg:flex-col ">
            {stats.map((stat, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-2 mt-4">
                  <p className="text-5xl max-md:text-3xl font-semibold text-secondary flex items-center justify-center">
                    {/* {stat?.preFix ? (
                      <span className="text-5xl  max-md:text-3xl font-semibold text-secondary">
                        {stat?.preFix}
                      </span>
                    ) : (
                      ''
                    )} */}
                    <Counter from={0} to={stat.count} />
                    {stat.postFix ? (
                      <span className="text-5xl  max-md:text-3xl font-semibold text-secondary">
                        {stat.postFix}
                      </span>
                    ) : (
                      ''
                    )}
                  </p>
                  <p className="text-lg  max-md:text-sm">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Dots2 className="absolute bottom-0 left-0 p-4" />
        <Dots2 className="absolute top-0 right-0 p-4" />
      </div>
    </div>
  );
};

export default LandingPageStats;

/**
 * A simple counter component that takes a `from` and `to` number and
 * animates the count from `from` to `to` with a duration of 1 second.
 *
 * @param {{ from: number, to: number }} props
 * @returns {ReactElement}
 */
const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef() as any;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      onUpdate: function (value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => {
      controls.stop();
    };
  }, [from, to]);

  return <p ref={nodeRef} />;
};
