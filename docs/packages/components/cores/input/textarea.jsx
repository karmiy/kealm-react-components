import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TextareaProps, TextareaDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';
import { ResizeObserver } from '../../common';
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
    const [textareaState, setTextareaState] = useState({
        textareaStyles: {},
        resizing: false,
    })
    const textareaRef = useRef(null);
    const nextFrameActionRef = useRef(null);

    useEffect(() => {
        cancelAnimationFrame(nextFrameActionRef.current);
        nextFrameActionRef.current = requestAnimationFrame(() => {
            setTextareaState(state => ({
                ...state,
                resizing: false,
            }))
        })
    }, [textareaState]);

    const { textareaStyles, resizing } = textareaState;
    const styles = {
        ...style,
        ...textareaStyles,
        ...(resizing ? { overflow: 'hidden' } : null),
    };

    // ---------------------------------- event ----------------------------------
    const resizeTextarea = useCallback(() => {
        if (!autosize || !textareaRef.current) return;
        const { minRows, maxRows } = autosize;
        const textareaStyles = calculateNodeHeight(textareaRef.current, false, minRows, maxRows);
        setTextareaState({ textareaStyles, resizing: true });
    }, []);

    const resizeOnNextFrame = useCallback(() => {
        cancelAnimationFrame(nextFrameActionRef.current);
        nextFrameActionRef.current = requestAnimationFrame(resizeTextarea);
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <ResizeObserver onResize={resizeOnNextFrame}>
                <textarea
                    ref={textareaRef}
                    className={`${componentCls}__inner`}
                    style={styles}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    placeholder={placeholder} />
            </ResizeObserver>
        </div>
    )
}

TextArea.propTypes = TextareaProps;
TextArea.defaultProps = TextareaDefaultProps;

export default TextArea