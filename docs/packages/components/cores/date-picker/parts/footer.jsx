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
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = mergeStr({
        [`${prefixCls}__footer-wrap`]: true,
        'is-show-time': showTime,
        'is-disabled': disabled,
    });

    // ---------------------------------- event ----------------------------------
    const onTodayTrigger = useCallback(() => {
        if(disabled) return;

        onChange(startOfDay(new Date()), true);
    }, [disabled, onChange]);

    const onNowTrigger = useCallback(() => {
        if(disabled) return;

        onChange(new Date(), true);
    }, [disabled, onChange]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <div className={`${prefixCls}__footer-container`}>
                <RenderWrapper visible={!showTime} unmountOnExit>
                    <a className={`${prefixCls}__footer-opt is-today`} onClick={onTodayTrigger}>今天</a>
                </RenderWrapper>
                <RenderWrapper visible={showTime} unmountOnExit>
                    <a className={`${prefixCls}__footer-opt is-now`} onClick={onNowTrigger}>此刻</a>
                    <a className={`${prefixCls}__footer-opt`}>选择时间</a>
                    <Button className={`${prefixCls}__footer-btn`} type={'primary'} size={'small'} disabled={disabled}>确定</Button>
                </RenderWrapper>
            </div>
        </div>
    );
}

Footer.propTypes = FooterProps;
Footer.defaultProps = FooterDefaultProps;

export default Footer;
