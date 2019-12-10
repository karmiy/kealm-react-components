import React, { useMemo, useCallback } from 'react';
import { DecadeHeaderProps, DecadeHeaderDefaultProps } from './interface';
import Icon from '../../icon';
import { getCenturies, MIN_SAFE_YEAR, MAX_SAFE_YEAR } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';

function DecadeHeader(props) {
    const {
        prefixCls,
        year,
        disabled,
        onChange,
    } = props;

    // ---------------------------------- variable ---------------------------------
    const isMinCentury = getCenturies(MIN_SAFE_YEAR).includes(year),
        isMaxCentury = getCenturies(MAX_SAFE_YEAR).includes(year);

    // ---------------------------------- event ----------------------------------
    const onPrevCentury = useCallback(() => {
        if(disabled || isMinCentury) return;

        onChange(year - 100);
    }, [disabled, year, isMinCentury]);

    const onNextCentury = useCallback(() => {
        if(disabled || isMaxCentury) return;

        onChange(year + 100);
    }, [disabled, year, isMaxCentury]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrevCentury = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-prev-century`]: true,
            'is-disabled': disabled || isMinCentury,
        });

        return (
            <button className={className} onClick={onPrevCentury}>
                <Icon type={'double-left'} />
            </button>
        )
    }, [prefixCls, onPrevCentury, disabled, isMinCentury]);

    const renderNextCentury = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-next-century`]: true,
            'is-disabled': disabled || isMaxCentury,
        });

        return (
            <button className={className} onClick={onNextCentury}>
                <Icon type={'double-right'} />
            </button>
        )
    }, [prefixCls, onNextCentury, disabled, isMaxCentury]);

    const renderSelect = useMemo(() => {
        const centuries = getCenturies(year);

        const className = mergeStr({
            [`${prefixCls}__header-select`]: true,
            'is-disabled': disabled,
        })

        return (
            <span className={className}>
                {centuries[0]} - {centuries[centuries.length - 1]}
            </span>
        )
    }, [prefixCls, year, disabled]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__header`}>
            {renderPrevCentury}
            {renderSelect}
            {renderNextCentury}
        </div>
    );
}

DecadeHeader.propTypes = DecadeHeaderProps;
DecadeHeader.defaultProps = DecadeHeaderDefaultProps;

export default DecadeHeader;