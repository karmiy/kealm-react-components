import React from 'react';
import { PopoverProps, PopoverDefaultProps } from './interface';
import Trigger from '../trigger';

function Popover(props) {
    const {
        children,
        ...others
    } = props;
    return <Trigger
        component={'popover'}
        className={'km-popper'}
        {...others}
    >{children}</Trigger>
}

Popover.propTypes = PopoverProps;
Popover.defaultProps = PopoverDefaultProps;

export default Popover;