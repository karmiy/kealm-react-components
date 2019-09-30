import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { RenderWrapperProps, RenderWrapperDefaultProps } from './interface';

class RenderWrapper extends Component {
    componentDidMount() {
        this.nodeControl();
    }
    componentDidUpdate() {
        this.nodeControl();
    }
    nodeControl() {
        const { visible, unmountOnExit } = this.props;
        if(unmountOnExit) return;

        const node = ReactDom.findDOMNode(this);
        node && (node.style.display = visible ? '' : 'none');
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