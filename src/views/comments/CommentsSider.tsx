import React from 'react';
/**
 * Renders a list of comments with a form to add a new comment.
 *
 * This component uses the `useState` hook to keep track of the comments and the
 * value of the text area. It also uses the `setTimeout` function to simulate a
 * delay when submitting the form.
 *
 * @returns {React.ReactElement} The Comments component.
 */
const CommentsSider = ({
  data,
  selected,
  setSelected
}: {
  data: any;
  selected: any;
  setSelected: any;
}) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-4 w-72 h-full">
      {data?.map((user: any, index: number) => {
        return (
          <div
            key={index}
            className={`flex items-center gap-4 hover:bg-white p-2 rounded-lg ${
              user?.id === selected ? 'bg-white' : ''
            }`}
            onClick={() => {
              return setSelected(user?.id);
            }}>
            <div className="bg-gray-950 rounded-full size-10"></div>
            <div className="flex flex-col">
              <p className="font-medium">{user.name}</p>
              <p className="opacity-80">{user.organization}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsSider;
