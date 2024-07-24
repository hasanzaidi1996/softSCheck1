import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCriticalityFailure,
  getCriticalitySuccess,
  getMaturityLevelFailure,
  getMaturityLevelSuccess,
  getReportsFailure,
  getReportsSuccess,
  getWhitelistedFailure,
  getWhitelistedSuccess
} from 'appRedux/reducers/reportReducer';
import { BackendInstance, backendUrl, config } from 'config';
import { handlerError } from 'utils/ErrorHandler';
import { updateAlert } from './alertAction';
import { IUploadReport } from 'types/ReduxTypes/report/action';

/**
 * fetch all reports for user
 *
 * @returns {boolean} register
 */
export const getReports = createAsyncThunk('reportSlice/getReports', async (_, { dispatch }) => {
  try {
    const res = await BackendInstance.get('report', config);
    dispatch(getReportsSuccess(res.data.data));
    return true;
  } catch (err) {
    dispatch(getReportsFailure());
    handlerError(err).forEach((error: string) => {
      dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
    });
    return false;
  }
});

/**
 * fetch template
 *
 * @returns {boolean} register
 */
export const getTemplate = createAsyncThunk('reportSlice/getTemplate', async (_, { dispatch }) => {
  try {
    window.open(`${backendUrl}/api/static/template.xlsx`);
    return true;
  } catch (err) {
    handlerError(err).forEach((error: string) => {
      dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
    });
    return false;
  }
});

/**
 * upload report
 *
 * @returns {boolean} register
 */
export const uploadReports = createAsyncThunk(
  'reportSlice/uploadReports',
  async (data: IUploadReport, { dispatch }) => {
    try {
      const formData = new FormData();

      formData.append('file', data.file as File);
      const res = await BackendInstance.put('report/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      dispatch(updateAlert({ place: 'tc', message: res.data.msg, type: 'success' }));

      return true;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

/**
 * get Whitelisted Count
 *
 * @returns {boolean} register
 */
export const getWhitelistedCount = createAsyncThunk(
  'reportSlice/getWhitelistedCount',
  async (id: string, { dispatch }) => {
    try {
      const res = await BackendInstance.get(`report/detail/whitelisted/${id}`, config);
      dispatch(getWhitelistedSuccess(res.data.data));
      return true;
    } catch (err) {
      dispatch(getWhitelistedFailure());
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

/**
 * get Criticality Count
 *
 * @returns {boolean} register
 */
export const getCriticalityCount = createAsyncThunk(
  'reportSlice/getCriticalityCount',
  async (id: string, { dispatch }) => {
    try {
      const res = await BackendInstance.get(`report/detail/criticality/${id}`, config);
      dispatch(getCriticalitySuccess(res.data.data));
      return true;
    } catch (err) {
      dispatch(getCriticalityFailure());
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

/**
 * get Maturity Level Count
 *
 * @returns {boolean} register
 */
export const getMaturityLevel = createAsyncThunk(
  'reportSlice/getMaturityLevel',
  async (id: string, { dispatch }) => {
    try {
      const res = await BackendInstance.get(`report/detail/maturity-level/${id}`, config);
      dispatch(getMaturityLevelSuccess(res.data.data));
      return true;
    } catch (err) {
      dispatch(getMaturityLevelFailure());
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);
