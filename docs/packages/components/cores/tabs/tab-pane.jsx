import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import { TabPaneProps, TabPaneDefaultProps } from './interface';
import { RenderWrapper, LazyWrapper } from '../../common';

function TabPane(props) {
    const {componentCls} = useContextConf('tab-pane');
    const {
        children,
        className,
        name,
        label,
        active,
        disabled,
        closable,
        lazy,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [className]: className,
    }, [className, componentCls]);


    // ---------------------------------- render ----------------------------------
    const WrapperComponent = lazy ? LazyWrapper : RenderWrapper;

    return (
        <WrapperComponent visible={active}>
            <div className={classNames} {...others}>
                {children}
            </div>
        </WrapperComponent>
    );
};

TabPane.propTypes = TabPaneProps;
TabPane.defaultProps = TabPaneDefaultProps;

export default TabPane;