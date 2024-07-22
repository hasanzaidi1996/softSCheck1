import { ReactNode } from 'react';
import { UploadProps } from 'antd';
export interface IUploadProps extends UploadProps {
  title?: string;
  icon?: ReactNode;
  dragger?: boolean;
  draggerText?: string;
  btnColor?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  preview?: boolean;
  defaultStyle?: boolean; // button
  previewImage?: string;
}
