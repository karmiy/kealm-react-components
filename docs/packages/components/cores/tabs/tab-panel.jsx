import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import { TabPanelProps, TabPanelDefaultProps } from './interface';
import RenderWrapper from '../../common/renderWrapper';

function TabPanel(props) {
    const {componentCls} = useContextConf('tab-panel');
    const {
        children,
        className,
        name,
        label,
        active,
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

TabPanel.propTypes = TabPanelProps;
TabPanel.defaultProps = TabPanelDefaultProps;

export default TabPanel;