/* eslint-disable no-magic-numbers */
import React from 'react';
import { Row, Col, Grid } from 'antd';
import Icon from '@ant-design/icons';
import { RefreshCustom, AddCustom, SearchCustom } from 'assets/icons';
import { ITableToolBarProps } from './types';
import { ScalableButton, ScalableInput } from 'components';
import { InputLength } from 'types';

const { useBreakpoint } = Grid;
/**
 * This is table header component
 *
 * @param {ITableToolBarProps} props - Input
 * @returns {React.FC} TableHeader component
 */
const TableToolBar: React.FC<ITableToolBarProps> = (props: ITableToolBarProps) => {
  const {
    search,
    searchFieldHandler,
    searchPlaceHolder,
    childrenBoxColProps,
    searchBoxColProps,
    refresh,
    children,
    add,
    justifyParent,
    gutter,
    utilityBtnsColProps,
    forceRerender
  } = props;
  const { sm } = useBreakpoint();
  /*
   As edit || refresh || add || deleteAll use 4 flex
   so if all of them are not available, we have 4 ramaining
   flex. If one of them is present we set it to 24 to go to next line
   */
  return (
    <Row
      className="toolbar-container"
      justify={justifyParent}
      key={forceRerender}
      align="middle"
      gutter={gutter}>
      {search && (
        <Col {...searchBoxColProps}>
          <Row justify="space-evenly">
            {props.SearchNode ? (
              <>{props.SearchNode}</>
            ) : (
              <ScalableInput
                onChange={(e) => {
                  if (searchFieldHandler) {
                    return searchFieldHandler(e);
                  }
                  return undefined;
                }}
                placeholder={searchPlaceHolder}
                className="toolbar-search"
                suffix={<Icon component={SearchCustom} />}
                maxLength={InputLength.TABLE_TOOLBAR_SEARCH_LENGTH}
              />
            )}
          </Row>
        </Col>
      )}

      {(refresh || add) && (
        <Col {...(utilityBtnsColProps || { xs: 24, sm: 16 })}>
          <Row justify="space-around">
            {refresh && (
              <ScalableButton
                onClick={props.refreshEventListener ? props.refreshEventListener : () => {}}
                type="link"
                icon={<Icon component={RefreshCustom} />}
                className="icon-btn">
                Refresh
              </ScalableButton>
            )}
            {add && (
              <ScalableButton
                onClick={props.addEventListener ? props.addEventListener : () => {}}
                type="link"
                icon={<Icon component={AddCustom} />}
                className="icon-btn">
                Add
              </ScalableButton>
            )}
          </Row>
        </Col>
      )}
      {children && (
        <Col className={!sm ? 'toolbar-additional-xs-col' : ''} {...childrenBoxColProps}>
          {children}
        </Col>
      )}
    </Row>
  );
};

TableToolBar.defaultProps = {
  gutter: 0,
  justifyParent: 'start',
  searchPlaceHolder: 'Search',
  searchBoxColProps: {
    xs: 24,
    sm: 8
  },
  childrenBoxColProps: {
    xs: 24,
    sm: 8
  },
  SearchNode: undefined
};

export default TableToolBar;
