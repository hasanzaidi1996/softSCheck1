import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IReportState } from 'types/ReduxTypes/report';

const initialState: IReportState = {
  reports: null,
  reportsLoading: true,
  whitelistedCount: null,
  whitelistedCountLoading: true,
  criticalityCount: null,
  criticalityCountLoading: true,
  maturityLevel: null,
  maturityLevelLoading: true
};

const ReportSlice = createSlice({
  name: 'report',
  initialState: initialState,
  reducers: {
    getReportsSuccess: (state, { payload }: PayloadAction<IReportState['reports']>) => {
      state.reports = payload;
      state.reportsLoading = false;
    },
    getReportsFailure: (state) => {
      state.reportsLoading = false;
    },
    getCriticalitySuccess: (
      state,
      { payload }: PayloadAction<IReportState['criticalityCount']>
    ) => {
      state.criticalityCount = payload;
      state.criticalityCountLoading = false;
    },
    getWhitelistedSuccess: (
      state,
      { payload }: PayloadAction<IReportState['whitelistedCount']>
    ) => {
      state.whitelistedCount = payload;
      state.whitelistedCountLoading = false;
    },
    getMaturityLevelSuccess: (state, { payload }: PayloadAction<IReportState['maturityLevel']>) => {
      state.maturityLevel = payload;
      state.maturityLevelLoading = false;
    },
    getCriticalityFailure: (state) => {
      state.criticalityCountLoading = false;
    },
    getMaturityLevelFailure: (state) => {
      state.maturityLevelLoading = false;
    },
    getWhitelistedFailure: (state) => {
      state.whitelistedCountLoading = false;
    }
  }
});

export const {
  getReportsFailure,
  getReportsSuccess,
  getCriticalityFailure,
  getCriticalitySuccess,
  getWhitelistedFailure,
  getWhitelistedSuccess,
  getMaturityLevelFailure,
  getMaturityLevelSuccess
} = ReportSlice.actions;

export default ReportSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<IReportState>} state - The state of reports
 * @param {IReportState} state.report - The state of report state
 * @returns {IReportState} returns report state object
 */
export const ReportSelector = (state: { report: IReportState }): IReportState => {
  return state.report;
};
