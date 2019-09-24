import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { TextareaProps, TextareaDefaultProps } from "./interface";
import { useContextConf, useClassName, useStateCallable, useThrottle } from 'hooks';
// import { ResizeObserver } from '../../common';
import calculateNodeHeight from './calculateNodeHeight';

function TextArea(props) {
    const { componentCls } = useContextConf('textarea');
    const {
        className,
        style,
        placeholder,
        disabled,
        defaultValue,
        value,
        onChange,
        rows,
        autosize,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [className]: className
    }, [className, componentCls, disabled]);

    // ---------------------------------- logic code ----------------------------------
    const [textareaStyles, setTextareaStyles] = useStateCallable(null);
    const [resizing, setResizing] = useState(false);
    const textareaRef = useRef(null);
    const resizeFrameIdRef = useRef(null);

    // Calculate the height when props.value changes
    useLayoutEffect(() => {
        if (!autosize || !textareaRef.current) return;

        throttleResize();
    }, [value, autosize]);

    const styles = {
        ...style,
        ...textareaStyles,
        ...(resizing ? { overflow: 'hidden' } : null),
    };

    // ---------------------------------- event ----------------------------------

    const resetResizingNextFrame = useCallback(() => {
        cancelAnimationFrame(resizeFrameIdRef.current);
        resizeFrameIdRef.current = requestAnimationFrame(() => setResizing(false));
    }, [setResizing]);

    const resizeTextarea = useCallback(() => {
        if (!autosize || !textareaRef.current) return;

        const { minRows, maxRows } = autosize;
        const textareaStyles = calculateNodeHeight(textareaRef.current, false, minRows, maxRows);

        setResizing(true);
        setTextareaStyles(textareaStyles, resetResizingNextFrame);
    }, [autosize, setResizing, setTextareaStyles, resetResizingNextFrame]);

    const throttleResize = useThrottle(resizeTextarea, 1000 / 60);

    const handleTextareaChange = useCallback((e) => {
        if(!('value' in props) && autosize && textareaRef.current) {
            throttleResize();
        }
        onChange(e);
    }, [throttleResize, onChange]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {/*<ResizeObserver onResize={resizeOnNextFrame}>*/}
            <textarea
                ref={textareaRef}
                className={`${componentCls}__inner`}
                style={styles}
                defaultValue={defaultValue}
                value={value}
                onChange={handleTextareaChange}
                rows={rows}
                placeholder={placeholder} />
            {/*</ResizeObserver>*/}
        </div>
    )
}

TextArea.propTypes = TextareaProps;
TextArea.defaultProps = TextareaDefaultProps;

export default TextArea