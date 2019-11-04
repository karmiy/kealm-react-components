import React, { memo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { TabPaneProps, TabPaneDefaultProps } from './interface';
import { RenderWrapper, LazyWrapper } from '../../common';
import { omit } from 'utils/common/object';

function TabPane(props) {
    const {componentCls} = useContextConf('tab-pane');
    const {
        children,
        className,
        active,
        lazy,
        ...others
    } = props;

    const paneOthers = omit(others, ['name', 'label', 'disabled', 'closable']);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [className]: className,
    }, [className, componentCls]);


    // ---------------------------------- render ----------------------------------
    const WrapperComponent = lazy ? LazyWrapper : RenderWrapper;

    return (
        <WrapperComponent visible={active}>
            <div className={classNames} {...paneOthers}>
                {children}
            </div>
        </WrapperComponent>
    );
};

TabPane.propTypes = TabPaneProps;
TabPane.defaultProps = TabPaneDefaultProps;

export default memo(TabPane);