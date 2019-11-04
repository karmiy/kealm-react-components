import React, { memo, useMemo } from 'react';
import { PopoverProps, PopoverDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';
import Trigger from '../trigger';
import { RenderWrapper } from '../../common';

function Popover(props) {
    const {
        className,
        title,
        content,
        children,
        ...others
    } = props;

    const { componentCls } = useContextConf(`popover`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [`km-popper`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- render chunk ----------------------------------
    const renderTitle = useMemo(() => {
        return (
            <RenderWrapper visible={!!title} unmountOnExit={true}>
                <div className={`${componentCls}__title`}>
                    {title}
                </div>
            </RenderWrapper>
        )
    }, [title, componentCls]);

    const renderPopup = useMemo(() => {
        return (
            <>
                {renderTitle}
                {content}
            </>
        )
    }, [renderTitle, content]);

    // ---------------------------------- render ----------------------------------
    return (
        <Trigger
            className={classNames}
            popup={renderPopup}
            {...others}
        >
            {children}
        </Trigger>
    )
}

Popover.propTypes = PopoverProps;
Popover.defaultProps = PopoverDefaultProps;

export default memo(Popover);