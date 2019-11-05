import React, { memo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { GroupProps, GroupDefaultProps } from './interface';

function Group(props) {
    const {componentCls} = useContextConf('select-group');
    const {
        children,
        className,
        label,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__wrap`]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <li className={classNames} {...others}>
            <ul>
                <li className={`${componentCls}__title`}>{label}</li>
                {children}
            </ul>
        </li>
    );
}

Group.propTypes = GroupProps;
Group.defaultProps = GroupDefaultProps;

export default memo(Group);