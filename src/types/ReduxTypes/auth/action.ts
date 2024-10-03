// Auth action types

import { UploadChangeParam } from 'antd/lib/upload/interface';

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IConfirmPasswordData {
  password: string;
}

export interface ILoginResponseData {
  role?: string;
  id?: string;
  otp?: boolean;
}

export interface IVerifyOTP {
  otp: string;
  userId: string;
}

export interface IRegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  password: string;
  confirmPassword: string;
}

export interface IChangePasswordProps {
  oldPassword: string;
  newPassword: string;
}

export interface IForgotPasswordProps {
  user: {
    email: string;
  };
}

export interface IResetPasswordProps {
  password: string;
  token: string;
}

export interface IValidTokenProps {
  token: string;
}

export interface IUserAvatarProps {
  avatar: UploadChangeParam;
}
