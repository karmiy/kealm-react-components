import React, { memo, useState } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { TagProps, TagDefaultProps } from './interface';
import Icon from '../icon';
import { RenderWrapper } from '../../common';

function Tag(props) {
    const { componentCls } = useContextConf('tag');
    const {
        children,
        className,
        type,
        color,
        font,
        closable,
        effect,
        size,
        onClose,
        style,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${effect}`]: effect,
        [`${componentCls}--${type}`]: type,
        [`${componentCls}--${size}`]: size,
        [className]: className,
    }, [className, componentCls, type, effect, size]);

    // ---------------------------------- style ----------------------------------
    const styles = {
        borderColor: color,
        backgroundColor: color,
        color: font,
        ...style,
    }

    // ---------------------------------- logic code ----------------------------------
    const [isMount, setIsMount] = useState(true);

    // ---------------------------------- render ----------------------------------
    return (
        <span className={classNames} style={styles} {...others}>
            {children}
            <RenderWrapper visible={closable} unmountOnExit={true}>
                <Icon type={'close'} className={`${componentCls}__close`} onClick={e => onClose(e, children)} />
            </RenderWrapper>
        </span>
    );
}

Tag.propTypes = TagProps;
Tag.defaultProps = TagDefaultProps;

export default memo(Tag);