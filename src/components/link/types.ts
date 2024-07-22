import { AnchorLinkProps } from 'antd';

interface IAnchorLinkProps extends AnchorLinkProps {
  scalable?: boolean;
  underline?: boolean;
  sameline?: boolean;
  lgClassName?: string;
  mdClassName?: string;
  smClassName?: string;
}

export default IAnchorLinkProps;
