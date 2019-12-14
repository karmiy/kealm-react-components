import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { PickerProps, PickerDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import Icon from '../icon';
import { RenderWrapper } from '../../common';

function Picker(props) {
    const { componentCls } = useContextConf('picker');
    const {
        className,
        children,
        pickerClassName,
        pickerStyle,
        pickerValue,
        defaultVisible,
        visible,
        onVisibleChange,
        disabled,
        placeholder,
        allowClear,
        onClear: _onClear,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [className]: className,
    }, [className]);

    const inputClassNames = useClassName({
        [pickerClassName]: pickerClassName,
        'is-clearable': allowClear && !disabled,
        'is-disabled': disabled,
    }, [pickerClassName, allowClear, disabled]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(e => {
        e.stopPropagation();

        _onClear(e);
    }, [_onClear]);

    // ---------------------------------- render mini chunk ----------------------------------

    const renderSuffix = useMemo(() => {
        return (
            <div>
                <Icon type={'calendar'} className={`${componentCls}__caret`} />
                <RenderWrapper visible={allowClear} unmountOnExit>
                    <Icon type={'close-circle'} className={`${componentCls}__clear`} onClick={onClear} />
                </RenderWrapper>
            </div>
        )
    }, [allowClear, onClear]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPanel = useMemo(() => {
        return (
            <>
                {children}
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, [children]);

    // ---------------------------------- render ----------------------------------
    return (
        <Trigger
            trigger={'manual'}
            disabled={disabled}
            popup={renderPanel}
            className={classNames}
            modifiers={{
                computeStyle: {
                    gpuAcceleration: false,
                }
            }}
            visible={isVisible}
            onVisibleChange={setIsVisible}
            {...others}
        >
            <div className={inputClassNames} style={pickerStyle}>
                <Input
                    value={pickerValue}
                    readOnly
                    suffix={renderSuffix}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </Trigger>
    );
}

Picker.propTypes = PickerProps;
Picker.defaultProps = PickerDefaultProps;

export default Picker;