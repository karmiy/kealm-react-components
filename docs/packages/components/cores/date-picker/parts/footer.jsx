import React, { useCallback } from 'react';
import { FooterProps, FooterDefaultProps } from './interface';
import Button from '../../button';
import { RenderWrapper } from '../../../common';
import { mergeStr } from 'utils/common/base';
import { startOfDay } from 'date-fns';

function Footer(props) {
    const {
        prefixCls,
        onChange,
        showTime,
        disabled,
        isRange,
        timeVisible,
        onTimeVisibleChange,
        onOk,
        disabledDate,
        extra,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const isTodayDisabled = disabledDate(startOfDay(new Date())),
        isNowDisabled = disabledDate(new Date());

    // ---------------------------------- class ----------------------------------
    const classNames = mergeStr({
        [`${prefixCls}__footer-wrap`]: true,
        'is-show-time': showTime,
        'is-disabled': disabled,
    });

    const todayClassNames = mergeStr({
        [`${prefixCls}__footer-opt`]: true,
        'is-today': true,
        'is-disabled': isTodayDisabled,
    });

    const nowClassNames = mergeStr({
        [`${prefixCls}__footer-opt`]: true,
        'is-now': true,
        'is-disabled': isNowDisabled,
    });

    // ---------------------------------- event ----------------------------------
    const onTodayTrigger = useCallback(() => {
        if(disabled || isTodayDisabled) return;

        onChange(startOfDay(new Date()), true);
    }, [disabled, onChange, isTodayDisabled]);

    const onNowTrigger = useCallback(() => {
        if(disabled || isNowDisabled) return;

        onChange(new Date(), true);
    }, [disabled, onChange, isNowDisabled]);

    const onTimeVisibleTrigger = useCallback(() => {
        if(disabled) return;

        onTimeVisibleChange(v => !v);
    }, [disabled]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <div className={`${prefixCls}__footer-container`}>
                {extra}
                <RenderWrapper visible={!showTime && !isRange} unmountOnExit>
                    <a className={todayClassNames} onClick={onTodayTrigger}>今天</a>
                </RenderWrapper>
                <RenderWrapper visible={!!showTime} unmountOnExit>
                    <RenderWrapper visible={!isRange} unmountOnExit>
                        <a className={nowClassNames} onClick={onNowTrigger}>此刻</a>
                    </RenderWrapper>
                    <a className={`${prefixCls}__footer-opt`} onClick={onTimeVisibleTrigger}>
                        {timeVisible ? '选择日期' : '选择时间'}
                    </a>
                    <Button
                        className={`${prefixCls}__footer-btn`}
                        type={'primary'}
                        size={'small'}
                        disabled={disabled}
                        onClick={onOk}
                    >确定</Button>
                </RenderWrapper>
            </div>
        </div>
    );
}

Footer.propTypes = FooterProps;
Footer.defaultProps = FooterDefaultProps;

export default Footer;
