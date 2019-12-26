import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { PickerProps, PickerDefaultProps } from './interface';
import Input from '../../input';
import Trigger from '../../trigger';
import Icon from '../../icon';
import { RenderWrapper } from '../../../common';
import { cloneVElement } from 'utils/common/react-util';
import { isString } from 'utils/common/base';

const { RangeInput } = Input;

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
        size,
        onClear: _onClear,
        isRange,
        startPlaceholder,
        endPlaceholder,
        suffixIcon,
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
        [componentCls]: true,
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
        const calendarIcon =  !suffixIcon ?
            <Icon type={'calendar'} className={`${componentCls}__caret`} />
            :
            (
                isString(suffixIcon)
                ?
                <Icon className={`${componentCls}__caret`} type={suffixIcon} />
                :
                cloneVElement(suffixIcon, {
                    className: `${componentCls}__caret`,
                })
            );
        return (
            <div>
                {calendarIcon}
                <RenderWrapper visible={allowClear} unmountOnExit>
                    <Icon type={'close-circle'} className={`${componentCls}__clear`} onClick={onClear} />
                </RenderWrapper>
            </div>
        )
    }, [allowClear, onClear, suffixIcon]);

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
                {
                    !isRange ?
                    <Input
                        value={pickerValue}
                        readOnly
                        suffix={renderSuffix}
                        placeholder={placeholder}
                        size={size}
                        disabled={disabled}
                    />
                    :
                    <RangeInput
                        value={pickerValue}
                        readOnly
                        suffix={renderSuffix}
                        startPlaceholder={startPlaceholder}
                        endPlaceholder={endPlaceholder}
                        size={size}
                        disabled={disabled}
                    />
                }
            </div>
        </Trigger>
    );
}

Picker.propTypes = PickerProps;
Picker.defaultProps = PickerDefaultProps;

export default Picker;