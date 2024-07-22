import { Col, Row } from 'antd';
import React, { Fragment } from 'react';
import { ILegendProps } from './types';

/**
 *
 * @param {ILegendProps} props - props for legend
 * @returns {React.FC} Legends Component
 */
const Legend: React.FC<ILegendProps> = (props: ILegendProps) => {
  const { legends, height, width, type } = props;
  const className = type === 'heatMap' ? 'heat-map-legend-text' : 'legend-text';
  return (
    <>
      <Row style={{ width: '100%' }} justify="center">
        {type === 'heatMap' && <p className="heat-map-legend-end-text">Most Secure</p>}
        {legends &&
          legends.map((obj, index) => {
            return (
              <Col key={index}>
                <div
                  className="legend-color"
                  style={{ background: `${obj.color}`, width: `${width}px`, height: `${height}px` }}
                />
                <p className={className} style={{ color: '#111c4e' }}>
                  {obj.label}
                </p>
              </Col>
            );
          })}
        {type === 'heatMap' && <p className="heat-map-legend-end-text">Least Secure</p>}
      </Row>
    </>
  );
};

Legend.defaultProps = {
  height: 12,
  width: 12
};

export default Legend;
