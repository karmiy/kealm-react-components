import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DomWrapper extends Component {
    el = null;

    componentDidMount() {
        this.reloadDOM();
    }
    componentDidUpdate() {
        this.reloadDOM();
    }
    reloadDOM() {
        this.el = ReactDOM.findDOMNode(this);
    }
    render() {
        return this.props.children;
    }
}

export default DomWrapper;