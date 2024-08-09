import { Card } from 'antd';
import CustomTable from 'components/table';
import { ReportColumns } from 'components/tableColumn';
import TableToolBar from 'components/tableToolBar';
import React, { useState } from 'react';
import { IReportTableProps } from './types';
import { useAppDispatch } from 'appRedux/store';
import { getReports } from 'appRedux/actions/reportAction';
import UploadReportModal from './UploadReportModal';

/**
 * Table to preview Reports
 *
 * @param {IReportTableProps} props data for report table
 * @returns {React.FC<IReportTableProps>} component to render
 */
const ReportsTable: React.FC<IReportTableProps> = (props: IReportTableProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const tableData =
    props.data?.map((row) => {
      return {
        id: row._id,
        ...row
      };
    }) || [];

  /**
   * Get Reports
   */
  const refreshReports = async () => {
    setLoading(true);
    await dispatch(getReports());
    setLoading(false);
  };
  return (
    <>
      <Card title="Upload Report">
        <UploadReportModal />
      </Card>
      <Card>
        <TableToolBar
          search
          refresh
          refreshEventListener={refreshReports}
          searchFieldHandler={(e) => {
            setSearch(e.target.value);
          }}
        />
        <CustomTable
          dataSource={tableData}
          search={search}
          columns={ReportColumns}
          loading={props.loading || loading}
        />
      </Card>
    </>
  );
};

export default ReportsTable;
