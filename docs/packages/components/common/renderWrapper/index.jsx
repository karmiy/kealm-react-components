import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RenderWrapperProps, RenderWrapperDefaultProps } from './interface';

class RenderWrapper extends Component {
    componentDidMount() {
        this.nodeControl(true);
    }
    componentDidUpdate() {
        this.nodeControl();
    }
    nodeControl(mount = false) {
        const { visible, unmountOnExit } = this.props;
        if(unmountOnExit) return;

        const node = ReactDOM.findDOMNode(this);
        if(mount) node._display = node.style.display || '';

        node && (node.style.display = visible ? (node._display || '') : 'none');
    }
    render() {
        const { visible, unmountOnExit, children } = this.props;
        if(!visible && unmountOnExit) return null;

        if(!unmountOnExit && React.Children.count(children) !== 1) {
            throw new Error('There can only be one child when unmountOnExit is false');
        }
        return children;
    }
}

RenderWrapper.propTypes = RenderWrapperProps;
RenderWrapper.defaultProps = RenderWrapperDefaultProps;

export default RenderWrapper;