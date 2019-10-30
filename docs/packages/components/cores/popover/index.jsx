import React from 'react';
import { PopoverProps, PopoverDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';
import Trigger from '../trigger';

function Popover(props) {
    const {
        className,
        children,
        ...others
    } = props;

    const { componentCls } = useContextConf(`popper`);

    const classNames = useClassName({
        [`${componentCls}`]: true,
        [className]: className,
    }, [componentCls, className]);

    return (
        <Trigger
            component={'popover'}
            className={classNames}
            {...others}
        >
            {children}
        </Trigger>
    )
}

Popover.propTypes = PopoverProps;
Popover.defaultProps = PopoverDefaultProps;

export default Popover;