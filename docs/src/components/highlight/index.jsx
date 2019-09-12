import React, { useEffect, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import hljs from 'highlight.js';
import { Collapse } from '@kealm/react-components';
import { HighlightProps, HighlightDefaultProps } from "./interface";
const Item = Collapse.Item;

function HighLight(props) {
    const ref = useRef(null);
    const {
        title,
        code,
        collapsible,
        expand,
    } = props;

    (!collapsible || expand ? useLayoutEffect : useEffect)(() => {
        hljs.highlightBlock(ref.current);
    }, [])

    const hocWrap = useCallback((children) => {
        return collapsible ?
                (
                    <Collapse defaultValue={expand ? 1 : 0}>
                        <Item name={1} title={title} wrapClass={'hljs-wrap'}>
                            <pre>
                                {children}
                            </pre>
                        </Item>
                    </Collapse>
                )
                :
                (
                    <pre className={'hljs-container'}>
                        {children}
                    </pre>
                )
    }, [collapsible, expand, title]);

    const renderCode = useMemo(() => {
        return <code ref={ref}>{code}</code>
    }, [code, ref]);

    return hocWrap(renderCode);
}
HighLight.propTypes = HighlightProps;
HighLight.defaultProps = HighlightDefaultProps;

export default HighLight;