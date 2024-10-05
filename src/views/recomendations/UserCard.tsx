import { FlagOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';
import { Button } from 'antd';
import UserCardImage from '../../assets/img/userCard.jpg';
interface IUserCardProps {
  _id: string;
  country: string;
  city: string;
  vendor: string;
  expertise: string;
  service: string;
  areaCode: number;
  phone: string;
  email: string;
  type: string;
}
/**
 * A simple component that displays a card with the user name.
 *
 * @returns A JSX element representing a card with the user name.
 */
const UserCard = ({ data }: { data: IUserCardProps }) => {
  return (
    <div className="flex flex-col items-center justify-start h-96 shadow-xl mt-20 rounded-lg p-4 ring-1 ring-primary">
      <div>
        <img
          src={UserCardImage}
          className="bg-slate-600 size-32 rounded-full -mt-20 ring-1 ring-primary"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="mt-5 flex flex-col gap-2 w-full">
          <p className="text-xl text-center">{data.vendor}</p>
          <div className="flex items-center justify-center gap-1 text-center">
            <FlagOutlined className="text-red-800" />
            <p className="">
              {data.city}, {data.country}
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm">
            <MailFilled />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm">
            <PhoneFilled />
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </div>
          <div className="h-[1px] w-full bg-primary"></div>
          <p className="font-bold text-lg">{data.service}</p>
          <p>{data.expertise}</p>
        </div>
        <Button className="w-full rounded-lg" type="primary">
          Recommend
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
