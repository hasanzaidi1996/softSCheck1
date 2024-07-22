import React from 'react';
import { Anchor, Grid } from 'antd';
import IAnchorLinkProps from './types';
import { NavLink } from 'react-router-dom';

const { Link } = Anchor;
const { useBreakpoint } = Grid;

/**
 * Antd Customized Input component with scalability breakpoints
 *
 * @param {IAnchorLinkProps} props - Properties of the Input
 * @returns {React.FC} Input component
 */
const ScalableLink: React.FC<IAnchorLinkProps> = (props: IAnchorLinkProps) => {
  const { lg, md } = useBreakpoint();
  const lnkClasses = props.scalable
    ? lg
      ? `lg-scalable-lnk ${props.lgClassName || ''}`
      : md
      ? `md-scalable-lnk ${props.mdClassName || ''}`
      : `sm-scalable-lnk ${props.smClassName || ''}`
    : '';
  const lnkUnderline = props.underline ? 'lnk-underline' : '';
  const customClasses = props.className || '';
  return (
    <NavLink to={props.href}>
      <Anchor
        className={`${props.sameline ? 'lnk-sameline' : ''}`}
        affix={false}
        showInkInFixed={false}>
        <Link className={`${lnkClasses} ${lnkUnderline} lnk ${customClasses}`} {...props} />
      </Anchor>
    </NavLink>
  );
};
ScalableLink.defaultProps = {
  scalable: true,
  sameline: false
};

export default ScalableLink;
