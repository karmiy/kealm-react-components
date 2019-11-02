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
        content,
        ...others
    } = props;

    const { componentCls } = useContextConf(`tooltip`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__popper`]: true,
        [`is-${effect}`]: true,
        [className]: className,
    }, [componentCls, className, effect]);

    // ---------------------------------- render ----------------------------------
    return (
        <Trigger
            trigger={manual ? 'manual' : 'hover'}
            className={classNames}
            popup={content}
            {...others}
        >
            {children}
        </Trigger>
    )
}

Tooltip.propTypes = TooltipProps;
Tooltip.defaultProps = TooltipDefaultProps;

export default Tooltip;