import { UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import moment from 'moment';
import { useState } from 'react';
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
  const allComments = [
    {
      id: '1',
      name: 'Syed Ali Hassan Zaidi',
      organization: 'Elite IT',
      role: 'Agent',
      avatar: (
        <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
      ),
      content:
        'Great tool! Easy to use and really boosts security. Love the real-time alerts and user-friendly interface. A must-have for any team!',
      datetime: moment().fromNow(),
      reply: [
        {
          id: '2',
          name: 'Syed Ali Hassan Zaidi',
          organization: 'Elite IT',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'Absolutely agree! The real-time alerts are a game changer for staying proactive.',
          datetime: moment().fromNow()
        },
        {
          id: '3',
          name: 'Syed Ali Hassan Zaidi',
          organization: 'Elite IT',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'I’ve found it super helpful for streamlining our security processes. What features do you use the most?',
          datetime: moment().fromNow()
        },
        {
          id: '3',
          name: 'Syed Ali Hassan Zaidi',
          organization: 'Elite IT',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'Totally! It makes managing threats so much simpler. Have you tried the latest updates?',
          datetime: moment().fromNow()
        },

        {
          id: '3',
          name: 'Syed Ali Hassan Zaidi',
          organization: 'Elite IT',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'Yes! The updates have been fantastic. They really improved the interface and added useful features!',
          datetime: moment().fromNow()
        }
      ]
    },
    {
      id: '4',
      name: 'Anand Kumar',
      organization: 'Connecting Dots',
      role: 'Agent',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content:
        'Secure Cohort is impressive! It enhances collaboration while keeping data safe. The encryption features are top-notch. Perfect for team projects!',
      datetime: moment().fromNow(),
      reply: [
        {
          id: '5',
          name: 'Syed Ali Hassan Zaidi',
          organization: 'Elite IT',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'Totally agree! The encryption really gives peace of mind. Have you tried it for remote teams?',
          datetime: moment().fromNow()
        },
        {
          id: '5',
          name: 'Syed Ali Hassan Zaidi',
          organization: 'Elite IT',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'Yes! It’s great for collaboration. I love how user-friendly it is while maintaining strong security.',
          datetime: moment().fromNow()
        }
      ]
    },
    {
      id: '6',
      name: 'Sir Sarwanan',
      organization: 'Apply Cyber',
      role: 'Agent',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content:
        'Secure Cohort is a game changer! The seamless integration with existing tools makes it so convenient. Plus, the security features are robust—definitely a must for any organization!',
      datetime: moment().fromNow(),
      reply: [
        {
          name: 'Sir Sarwanan',
          organization: 'Apply Cyber',
          role: 'Agent',
          avatar: (
            <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
          ),
          content:
            'Absolutely! The integration is so smooth, it makes onboarding a breeze. Have you noticed any specific benefits for your team?',
          datetime: moment().fromNow()
        }
      ]
    },
    {
      id: '7',
      name: 'Talha Talreja',
      organization: 'USquare',
      role: 'Client',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content:
        'The overall system is highly efficient and user-friendly! It streamlines processes while ensuring top-notch security. Great balance between functionality and safety!',
      datetime: moment().fromNow()
      // reply: [
      //   {
      //     name: 'Sir Sarwanan',
      //     organization: 'Apply Cyber',
      //     role: 'Agent',
      //     avatar: (
      //       <UserOutlined className="bg-gray-300 p-2 rounded-full size-10 flex justify-center items-center" />
      //     ),
      //     content:
      //       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).',
      //     datetime: moment().fromNow()
      //   }
      // ]
    }
  ];
  const commentsTabs = [
    {
      label: 'All Comments',
      value: 'all',
      data: allComments
    },
    {
      label: 'Agents',
      value: 'agents',
      data: allComments.filter((comment) => {
        return comment?.role === 'Agent';
      })
    },
    {
      label: 'Clients',
      value: 'clients',
      data: allComments.filter((comment) => {
        return comment?.role === 'Client';
      })
    }
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
                <div className="flex items-start justify-start gap-4">
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
                      <CommentsSection allComments={tab.data} selected={selected} />
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
