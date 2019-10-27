import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Reference extends Component {
    el = null;
    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this);
    }
    render() {
        return this.props.children;
    }
}

export default Reference;