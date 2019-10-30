import React from 'react';
import { TooltipProps, TooltipDefaultProps } from './interface';
import Trigger from '../trigger';
import { useContextConf, useClassName } from 'hooks';

function Tooltip(props) {
    const {
        className,
        children,
        manual,
        effect,
        ...others
    } = props;

    const { componentCls } = useContextConf(`tooltip`);

    const classNames = useClassName({
        [`${componentCls}__popper`]: true,
        [`is-${effect}`]: true,
        [className]: className,
    }, [componentCls, className, effect]);

    return (
        <Trigger
            trigger={manual ? 'manual' : 'hover'}
            component={'tooltip'}
            className={classNames}
            title={null}
            {...others}
        >
            {children}
        </Trigger>
    )
}

Tooltip.propTypes = TooltipProps;
Tooltip.defaultProps = TooltipDefaultProps;

export default Tooltip;