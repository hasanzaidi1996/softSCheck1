// Application Type Definitions

export enum UserRoles {
  Client = 'client'
}

export enum Environment {
  Production = 'production',
  Development = 'development',
  Testing = 'testing'
}

export enum AuthErrors {
  LogOut = 'Session Expired, Loging Out!',
  LoginNeeded = 'Previous Session Expired, Please login Again!'
}

export enum InputLength {
  // commons
  DYNAMIC_INPUTS_LENGTH = 100,
  EMAIL_LENGTH = 100,
  USERNAME_LENGTH = 100,
  FIRST_LAST_NAME_LENGTH = 30,
  ADDRESS_LENGTH = 100,
  PASSWORD_LENGTH = 100,
  TABLE_TOOLBAR_SEARCH_LENGTH = 100,
  DOMAIN_LENGTH = 100,
  DESCRIPTION_LENGTH = 500,
  INTEGRATION_DESCRIPTION = 240,
  API_KEY_NAME = 50,
  // client
  CAMPAIGN_NAME_LENGTH = 100,
  USERGROUP_NAME_LENGTH = 100,
  COMPANY_NAME_LENGTH = 100,
  USER_DESIGNATION_LENGTH = 100,
  OTP_LENGTH = 6,

  // admin
  PRICE_LENGTH = 10,
  EMAIL_GATEWAY_STRATEGY_LENGTH = 100,
  WAF_PAYLOAD_LENGTH = 500,
  MITRE_FIELDS_LENGTH = 40,
  RISK_SCORE_LENGTH = 10
}

export interface ICustomValidationParams {
  setShowErrorMessage: (value: any) => void;
  formData: any;
  showErrorMessage: { [string: string]: boolean };
}

export enum ReportStatus {
  Pending = 'pending',
  Completed = 'completed',
  Failed = 'failed'
}

export enum CombinedAnalyticsMode {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  SixMonths = '6months',
  Year = 'year'
}
