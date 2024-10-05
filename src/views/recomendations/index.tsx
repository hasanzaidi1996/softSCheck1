import { recomendationsData } from './recomendationsData';
import UserCard from './UserCard';

/**
 * A simple component that displays a card with the easy audit heading.
 *
 * @returns A JSX element representing a card with the easy audit heading.
 */
const Recomendations = () => {
  return (
    <div className="container p-8 rounded-lg bg-tertiary">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {recomendationsData.map((recomendation, index) => {
          return (
            <div key={index}>
              <UserCard data={recomendation} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomendations;
