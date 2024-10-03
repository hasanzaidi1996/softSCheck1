import React from 'react';

export interface OTPData {
  url: string;
  secret: string;
}

export interface IOTPModal {
  modalVisibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  data: OTPData;
}
