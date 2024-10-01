import { UserOutlined } from '@ant-design/icons';
import { Button, Comment, Form, Input, List } from 'antd';
import React, { useState } from 'react';

const { TextArea } = Input;

interface CommentItem {
  author: string;
  avatar: React.ReactNode;
  content: React.ReactNode;
  datetime: React.ReactNode;
}

/**
 * Renders a list of comments.
 */
const CommentList = ({ comments }: { comments: CommentItem[] }) => {
  return (
    <List
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={(props) => {
        return <Comment {...props} />;
      }}
    />
  );
};

/**
 * Renders a comment editor form.
 *
 */
const Editor = () => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  /**
   * Handles the form submission.
   *
   * If the text area is empty, the function will return without doing anything.
   *
   * Otherwise, the function will set the `submitting` state to true and then
   * reset the text area value and set `submitting` to false after a delay of
   * 1000 milliseconds.
   */
  const onSubmit = () => {
    if (!value) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
    }, 1000);
  };

  /**
   * Handles the change event of the text area.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement>} e - event object
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Item>
        <TextArea rows={1} onChange={handleChange} value={value} className="rounded-md" />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
          className="rounded-lg">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

/**
 * Renders a list of comments with a form to add a new comment.
 *
 * This component uses the `useState` hook to keep track of the comments and the
 * value of the text area. It also uses the `setTimeout` function to simulate a
 * delay when submitting the form.
 *
 * @returns {React.ReactElement} The CommentsSection component.
 */
const CommentsSection = ({ allComments, selected }: { allComments: any; selected: any }) => {
  return (
    <div>
      <div className="space-y-2">
        {allComments
          ?.filter((user: any) => {
            return user?.id === selected;
          })
          ?.map((comment: any, index: number) => {
            return (
              <div className="bg-gray-50 px-4 rounded-xl" key={index}>
                <Comment
                  avatar={
                    <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
                  }
                  content={
                    <div>
                      <p>
                        <b>{comment.author}</b>
                      </p>
                      <p>{comment.content}</p>
                    </div>
                  }
                />
                {comment.reply?.length > 0 && (
                  <div className="ml-8">
                    <CommentList comments={comment.reply} />
                  </div>
                )}
                <Comment
                  avatar={
                    <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
                  }
                  content={
                    <div>
                      <p>
                        <b>Han Solo</b>
                      </p>
                      <Editor />
                    </div>
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CommentsSection;
