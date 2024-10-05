import { getRecommendations } from 'appRedux/actions/addOnAction';
import { AddOnSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import UserCard from 'components/userCard/index.tsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IProviders } from 'types/ReduxTypes/addOn';
import { IUser } from 'types/ReduxTypes/auth';

/**
 * A simple component that displays a card with the easy audit heading.
 *
 * @returns A JSX element representing a card with the easy audit heading.
 */
const SecureCohort = () => {
  const dispatch = useAppDispatch();
  const { recommendations, recommendationLoading } = useSelector(AddOnSelector);
  useEffect(() => {
    if (!recommendations && recommendationLoading) {
      dispatch(getRecommendations());
    }
  }, [recommendations]);
  console.log(recommendations);

  return (
    <div className="container ">
      <h1 className="text-2xl my-4">Secure Cohort</h1>
      <div className="bg-tertiary  p-8 rounded-lg">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {recommendations?.map((recomendation, index) => {
            return (
              <div key={index}>
                <UserCard
                  data={recomendation?.serviceProvider as IProviders}
                  recommendedBy={recomendation?.recommendedBy as IUser}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecureCohort;
