import { UserOutlined } from '@ant-design/icons';
import { Card, Comment, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

interface ICommentsProps {
  children?: React.ReactNode;
  data?: any;
  //   action?: any;
}

/**
 * A simple component that displays a single comment.
 *
 * It is likely that this component will be replaced or updated in the future.
 *
 * @param {ICommentsProps} props - The props of the component.
 * @param {React.ReactNode} [props.children] - The children of the component.
 * @param {any} props.data - The data of the comment.
 * @returns {React.ReactElement} The Comment component.
 */
const ExampleComment: React.FC<{ children?: React.ReactNode; data?: any }> = ({
  children,
  data
}: //   actions
ICommentsProps) => {
  return (
    <Comment
      //   actions={[actions ? actions : null]}
      author={<a>{data?.author}</a>}
      avatar={<UserOutlined style={{ fontSize: '25px' }} />}
      content={<p>{data?.content}</p>}>
      {children}
    </Comment>
  );
};

/**
 * A simple component that displays the string "Comments".
 *
 * It is likely that this component will be replaced or updated in the future.
 *
 * @returns {React.ReactElement} The Comments component.
 */
const Comments = () => {
  const allComments = [
    {
      id: 1,
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
      reply: [
        {
          id: 1,
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).'
        },
        {
          id: 2,
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).'
        }
      ]
    },
    {
      id: 2,
      author: 'Ali Hassan',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: 'hahah heheh ehasdkljah sjhaslkjdh alkjdh laskjd'
    }
  ];
  return (
    <Card>
      <Title level={4}>Comments</Title>
      {allComments.map((comment, index) => {
        return (
          <ExampleComment key={comment.id} data={comment}>
            {comment.reply?.map((reply) => {
              return <ExampleComment key={reply.id} data={reply} />;
            })}
          </ExampleComment>
        );
      })}
    </Card>
  );
};

export default Comments;
