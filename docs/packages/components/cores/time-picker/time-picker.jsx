import React, { useMemo } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { TimePickerProps, TimePickerDefaultProps } from './interface';
import Input from '../input';
import {Icon} from "../index";
import Trigger from '../trigger';

function TimePicker(props) {
    const {componentCls} = useContextConf('time-picker');
    const {
        children,
        className,
        selectorClassName,
        selectorStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        placeholder,
        disabled,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        'km-popper': true,
        [className]: className,
    }, [className]);

    const inputClassNames = useClassName({
        [componentCls]: true,
        [selectorClassName]: selectorClassName,
    }, [componentCls, selectorClassName]);

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);

    // ---------------------------------- render mini chunk ----------------------------------
    const suffixIcon = useMemo(() => {
        return (
            <div>
                <Icon type={'time-circle'} className={`${componentCls}__caret`} />
                <Icon type={'close-circle'} className={`${componentCls}__clear`} />
            </div>
        )
    }, [componentCls]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPanel = useMemo(() => {
        return (
            <>
                <div className={`${componentCls}-panel__inner`}>
                    <div className={`${componentCls}-panel__input-wrap`}>
                        <Input placeholder={placeholder} size={'small'} />
                    </div>
                    <div className={`${componentCls}-panel__combobox`}>
                        <div className={`${componentCls}-panel__mask`} />
                        <div className={`${componentCls}-panel__select km-scroll-hidden`}>
                            <ul className={`${componentCls}-panel__list`}>
                                {
                                    Array(24).fill('').map((_, index) => {
                                        return <li key={index} className={`${componentCls}-panel__item`}>{`${index}`.padStart(2, 0)}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={`${componentCls}-panel__select km-scroll-hidden`}>
                            <ul className={`${componentCls}-panel__list`}>
                                {
                                    Array(60).fill('').map((_, index) => {
                                        return <li key={index} className={`${componentCls}-panel__item`}>{`${index}`.padStart(2, 0)}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={`${componentCls}-panel__select km-scroll-hidden`}>
                            <ul className={`${componentCls}-panel__list`}>
                                {
                                    Array(60).fill('').map((_, index) => {
                                        return <li key={index} className={`${componentCls}-panel__item`}>{`${index}`.padStart(2, 0)}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="popper__arrow" style={{left: '35px'}} />
            </>
        )
    }, [componentCls, placeholder]);

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
                <Input readOnly suffix={suffixIcon} placeholder={placeholder} />
            </div>
        </Trigger>
    );
}

TimePicker.propTypes = TimePickerProps;
TimePicker.defaultProps = TimePickerDefaultProps;

export default TimePicker;