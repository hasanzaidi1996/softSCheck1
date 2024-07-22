import { Card } from 'antd';
import CustomTable from 'components/table';
import { ReportColumns } from 'components/tableColumn';
import TableToolBar from 'components/tableToolBar';
import React from 'react';

/**
 * Table to preview Reports
 *
 * @returns {React.FC} component to render
 */
const ReportsTable: React.FC = () => {
  return (
    <>
      <Card>
        <TableToolBar search refresh add />
        <CustomTable dataSource={[]} columns={ReportColumns} />
      </Card>
    </>
  );
};

export default ReportsTable;
