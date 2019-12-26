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
        showToday,
        showNow,
        showOk,
        timePicker,
        disabled,
        okDisabled,
        isRange,
        timeVisible,
        onTimeVisibleChange,
        onOk,
        disabledDate,
        renderFooter,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const isTodayDisabled = disabledDate(startOfDay(new Date())),
        isNowDisabled = disabledDate(new Date());

    // ---------------------------------- class ----------------------------------
    const classNames = mergeStr({
        [`${prefixCls}__footer-wrap`]: true,
        'is-show-time': showTime,
        'is-range': isRange,
    });

    const todayClassNames = mergeStr({
        [`${prefixCls}__footer-opt`]: true,
        'is-today': true,
    });

    const nowClassNames = mergeStr({
        [`${prefixCls}__footer-opt`]: true,
        'is-now': true,
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
                <RenderWrapper visible={!!renderFooter} unmountOnExit>
                    <div className={`${prefixCls}__footer-extra`}>
                        {renderFooter}
                    </div>
                </RenderWrapper>
                <RenderWrapper visible={showToday} unmountOnExit>
                    <Button className={todayClassNames} type={'text'} disabled={isTodayDisabled} onClick={onTodayTrigger}>今天</Button>
                </RenderWrapper>
                <RenderWrapper visible={showNow} unmountOnExit>
                    <Button className={nowClassNames} type={'text'} disabled={isTodayDisabled} onClick={onNowTrigger}>此刻</Button>
                </RenderWrapper>
                <RenderWrapper visible={timePicker} unmountOnExit>
                    <Button className={`${prefixCls}__footer-opt`} type={'text'} disabled={disabled} onClick={onTimeVisibleTrigger}>
                        {timeVisible ? '选择日期' : '选择时间'}
                    </Button>
                </RenderWrapper>
                <RenderWrapper visible={showOk} unmountOnExit>
                    <Button
                        className={`${prefixCls}__footer-btn`}
                        type={'primary'}
                        size={'small'}
                        disabled={disabled || okDisabled}
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
