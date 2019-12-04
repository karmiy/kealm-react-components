import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { DatePickerProps, DatePickerDefaultProps } from './interface';
import Input from '../input';
import Trigger from '../trigger';
import { formatDate } from 'utils/common/date';
import {Icon} from "../index";
import { RenderWrapper } from '../../common';
import Panel from './panel';
import Header from "./header";

function DatePicker(props) {
    const { componentCls, prefix } = useContextConf('date-picker');
    const {
        className,
        selectorClassName,
        selectorStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultPickerValue,
        defaultValue,
        value,
        onChange,
        disabled,
        placeholder,
        format,
        allowClear,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null, disabled);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${prefix}-picker-panel`]: true,
        [className]: className,
    }, [className]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        [selectorClassName]: selectorClassName,
    }, [componentCls, selectorClassName]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(e => {
        e.stopPropagation();

        setDateValue(null);
    }, []);

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
    }, [componentCls, allowClear]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPanel = useMemo(() => {
        return (
            <>
                <Panel prefixCls={componentCls} placeholder={placeholder} disabled={disabled} />
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, [componentCls, placeholder, disabled]);

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
            <div className={inputClassNames} style={selectorStyle}>
                <Input
                    value={dateValue ? formatDate(dateValue, format) : ''}
                    readOnly
                    suffix={renderSuffix}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </Trigger>
    );
}

DatePicker.propTypes = DatePickerProps;
DatePicker.defaultProps = DatePickerDefaultProps;

export default DatePicker;