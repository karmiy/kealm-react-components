import React, { useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { SwitchProps, SwitchDefaultProps } from './interface';
import { RenderWrapper } from '../../common';
import Icon from '../icon';

const { createConfig } = useController;

function Switch(props) {
    const {componentCls} = useContextConf('switch');
    const {
        children,
        className,
        defaultChecked,
        checked,
        onChange,
        disabled,
        activeColor,
        inActiveColor,
        activeContent,
        inActiveContent,
        loading,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isChecked, setIsChecked] = useController(defaultChecked, checked, onChange, false, disabled || loading);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-checked': isChecked,
        'is-disabled': disabled,
        'is-loading': loading,
        [className]: className,
    }, [className, componentCls, isChecked, disabled, loading]);

    // ---------------------------------- style ----------------------------------
    const switchCoreStyle = {
        borderColor: isChecked ? activeColor : inActiveColor,
        backgroundColor: isChecked ? activeColor : inActiveColor,
        color: isChecked ? activeColor : inActiveColor,
    }

    // ---------------------------------- render ----------------------------------
    return (
        <div
            role={'switch'}
            className={classNames}
            onClick={e => setIsChecked(createConfig({ value: c => !c, event: [c => !c, e] }))}
            {...others}
        >
            {/*<input type="checkbox" className={`${componentCls}__input`} />*/}
            <span className={`${componentCls}__core`} style={switchCoreStyle}>
                <span className={`${componentCls}__button`}>
                    <RenderWrapper visible={loading} unmountOnExit>
                        <Icon type={'loading'} />
                    </RenderWrapper>
                </span>
                <RenderWrapper visible={!!(activeContent || inActiveContent)} unmountOnExit>
                    <span className={`${componentCls}__inner`}>
                        {isChecked ? activeContent : inActiveContent}
                    </span>
                </RenderWrapper>
            </span>
        </div>
    );
}

Switch.propTypes = SwitchProps;
Switch.defaultProps = SwitchDefaultProps;

export default Switch;