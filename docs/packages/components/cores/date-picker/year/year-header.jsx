import React, { useMemo, useCallback, useState } from 'react';
import { YearHeaderProps, YearHeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Icon from '../../icon';
import DecadePanel from '../decade';
import { RenderWrapper } from '../../../common';
import { getDecades, handleDate, MIN_SAFE_YEAR, MAX_SAFE_YEAR } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';

function YearHeader(props) {
    const {
        prefixCls,
        value,
        disabled,
        onChange,
        visible,
    } = props;

    // ---------------------------------- variable ---------------------------------
    const year = value ? value.getFullYear() : new Date().getFullYear();
    const isMinDecade = getDecades(MIN_SAFE_YEAR).includes(year),
        isMaxDecade = getDecades(MAX_SAFE_YEAR).includes(year);
    const [decadePanelVisible, setDecadePanelVisible] = useState(false);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && setDecadePanelVisible(false);
    }, [visible]);

    // ---------------------------------- event ----------------------------------
    const onPrevDecade = useCallback(() => {
        if(disabled || isMinDecade) return;
        onChange(v => handleDate(new Date(v || new Date()), { year: year - 10 }));
    }, [disabled, year, isMinDecade]);

    const onNextDecade = useCallback(() => {
        if(disabled || isMaxDecade) return;

        onChange(v => handleDate(new Date(v || new Date()), { year: year + 10 }));
    }, [disabled, year, isMaxDecade]);

    const onDecadeSelect = useCallback(selectedDate => {
        setDecadePanelVisible(false);
        year !== selectedDate.getFullYear() && onChange(selectedDate);
    }, [year]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrevDecade = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-prev-decade`]: true,
            'is-disabled': disabled || isMinDecade,
        });

        return (
            <button className={className} onClick={onPrevDecade}>
                <Icon type={'double-left'} />
            </button>
        )
    }, [prefixCls, onPrevDecade, disabled, isMinDecade]);

    const renderNextDecade = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-next-decade`]: true,
            'is-disabled': disabled || isMaxDecade,
        });

        return (
            <button className={className} onClick={onNextDecade}>
                <Icon type={'double-right'} />
            </button>
        )
    }, [prefixCls, onNextDecade, disabled, isMaxDecade]);

    const renderSelect = useMemo(() => {
        const decades = getDecades(year);

        const className = mergeStr({
            [`${prefixCls}__header-select`]: true,
            'is-disabled': disabled,
        })

        return (
            <span className={className}>
                <a onClick={() => setDecadePanelVisible(true)}>{decades[0]} - {decades[decades.length - 1]}</a>
            </span>
        )
    }, [prefixCls, year, disabled]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__header`}>
            <div className={`${prefixCls}__header-wrap`}>
                {renderPrevDecade}
                {renderSelect}
                {renderNextDecade}
            </div>
            <RenderWrapper visible={decadePanelVisible}>
                <DecadePanel value={value} onSelect={onDecadeSelect} disabled={disabled} visible={visible} />
            </RenderWrapper>
        </div>
    );
}

YearHeader.propTypes = YearHeaderProps;
YearHeader.defaultProps = YearHeaderDefaultProps;

export default YearHeader;