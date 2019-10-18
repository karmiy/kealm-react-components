import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import { TabPaneProps, TabPaneDefaultProps } from './interface';
import RenderWrapper from '../../common/renderWrapper';

function TabPane(props) {
    const {componentCls} = useContextConf('tab-pane');
    const {
        children,
        className,
        name,
        label,
        active,
        disabled,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <RenderWrapper visible={active}>
            <div className={classNames} {...others}>
                {children}
            </div>
        </RenderWrapper>
    );
};

TabPane.propTypes = TabPaneProps;
TabPane.defaultProps = TabPaneDefaultProps;

export default TabPane;