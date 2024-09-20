import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ITableProps } from './types';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { RenderExpandIconProps } from 'rc-table/lib/interface';
import { searchInArrayOfObjectsandStrings } from 'utils';
// const { useBreakpoint } = Grid;
/**
 * expandable table icon props
 *
 * @param {RenderExpandIconProps<any>} props - table icon props
 * @returns {React.FC} return icon
 */
const ExpandIconRenderer: React.FC<RenderExpandIconProps<any>> = (
  props: RenderExpandIconProps<any>
) => {
  const { expanded, onExpand, record } = props;
  return expanded ? (
    <UpOutlined
      onClick={(e) => {
        return onExpand(record, e);
      }}
    />
  ) : (
    <DownOutlined
      onClick={(e) => {
        return onExpand(record, e);
      }}
    />
  );
};
/**
 * Component
 *
 * @param {ITableProps<any>} props - props for table component
 * @returns {React.FC} returns React.Component for table
 */
const CustomTable: React.FC<ITableProps> = (props: ITableProps) => {
  const { size = 'small', children, dataSource, search, searchFilter, ...rest } = props;
  // const screens = useBreakpoint();
  const zero = 0;
  // const mdOrUp = Boolean(screens.md);
  // const tableSize = mdOrUp ? 'large' : 'small';

  const [dataKeys, setDataKeys] = useState<Array<string | Record<string, string>>>([]);

  useEffect(() => {
    /**
     * If search filter is available use it oterhwise
     * get datasource keys if available.
     */
    if (dataKeys?.length <= zero) {
      setDataKeys(
        searchFilter && searchFilter?.length > zero
          ? searchFilter
          : dataSource && dataSource?.length > zero
          ? Object.keys(dataSource[zero])
          : []
      );
    }
  }, [searchFilter, dataSource]);

  const filteredData = search
    ? dataSource?.filter(searchInArrayOfObjectsandStrings(search, dataKeys))
    : dataSource;
  return (
    <>
      <div>
        <Table
          size={size}
          rowSelection={undefined}
          dataSource={filteredData}
          {...rest}
          style={{
            borderRadius: '10px',
            border: '1px solid #E9E9E9',
            backgroundColor: 'white',
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            width: '100%',
            height: '100%',
            ...rest?.style
          }}>
          {children}
        </Table>
      </div>
    </>
  );
};
CustomTable.defaultProps = {
  scroll: { x: true },
  selectable: true,
  className: 'tbody-primary thead-primary',
  search: '',
  searchFilter: [],
  pagination: {
    position: ['bottomCenter'],
    showSizeChanger: true,
    defaultPageSize: 5,
    // eslint-disable-next-line no-magic-numbers
    pageSizeOptions: [5, 10, 20, 50]
  }
};

ExpandIconRenderer.defaultProps = {};
export default CustomTable;
