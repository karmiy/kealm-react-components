import React from 'react';
import { IconProps } from './interface';

function Icon(props) {
    const { type } = props;
    return <i className={`km-icon-${type}`} />
}

Icon.propTypes = IconProps;

export default Icon;