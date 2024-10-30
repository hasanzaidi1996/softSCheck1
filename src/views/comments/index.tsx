import { Tabs } from 'antd';
import { getComments } from 'appRedux/actions/commentAction';
import { CommentSelector } from 'appRedux/reducers/commentReducer';
import { useAppDispatch } from 'appRedux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IComment } from 'types/ReduxTypes/comment/action';
import CommentIcon from '../../assets/img/comment.png';
import CommentsSection from './CommentsSection';
import CommentsSider from './CommentsSider';

/**
 * Renders a list of comments with a form to add a new comment.
 *
 * This component uses the `useState` hook to keep track of the comments and the
 * value of the text area. It also uses the `setTimeout` function to simulate a
 * delay when submitting the form.
 *
 * @returns {React.ReactElement} The Comments component.
 */
const Comments = () => {
  const [selected, setSelected] = useState(null);

  const dispatch = useAppDispatch();
  const { comments, commentsLoading } = useSelector(CommentSelector);
  useEffect(() => {
    if (!comments && commentsLoading) {
      dispatch(getComments());
    }
  }, [comments]);
  console.log('@@@@', comments);
  const users: IComment[] = [];

  comments?.forEach((comment) => {
    // @ts-ignore
    if (!users.find((user) => user?.createdBy?._id === comment?.createdBy?._id)) {
      users.push(comment);
    }
  });
  const commentsTabs = [
    {
      label: 'All Comments',
      value: 'all',
      data: users
    }
    // {
    //   label: 'Employees',
    //   value: 'employees',
    //   data: allComments.filter((comment) => {
    //     return comment?.role === 'Employee';
    //   })
    // },
    // {
    //   label: 'Auditors',
    //   value: 'auditor',
    //   data: allComments.filter((comment) => {
    //     return comment?.role === 'Auditor';
    //   })
    // },
    // {
    //   label: 'Service Providers',
    //   value: 'service-provider',
    //   data: allComments.filter((comment) => {
    //     return comment?.role === 'Service Provider';
    //   })
    // }
  ];

  return (
    <div className="container">
      <h1 className="text-2xl my-4">All Comments</h1>
      <div className=" bg-white p-6 rounded-lg ">
        <Tabs
          defaultActiveKey="all"
          className="border-0 ring-0"
          type="line"
          onChange={() => {
            setSelected(null);
          }}
          items={commentsTabs.map((tab, i) => {
            return {
              label: tab.label,
              key: tab.value,
              children: (
                <div className="flex items-start justify-start gap-4" key={i}>
                  <div className="h-[70vh]">
                    <CommentsSider data={tab.data} selected={selected} setSelected={setSelected} />
                  </div>
                  <div className="max-h-[70vh] overflow-auto w-full">
                    {selected === null ? (
                      <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden">
                        <img src={CommentIcon} className="size-56 animate-pulse" />
                        <h1 className="text-xl font-bold text-center -mt-10 overflow-hidden">
                          Please Select A User To View Comments
                        </h1>
                      </div>
                    ) : (
                      <CommentsSection allComments={comments} selected={selected} />
                    )}
                  </div>
                </div>
              )
            };
          })}
        />
      </div>
    </div>
  );
};

export default Comments;
