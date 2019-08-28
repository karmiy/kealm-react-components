import React from 'react';

function Button(props) {
    return (
        <div className='km-button'>
            <button>{props.children}</button>
        </div>
    )
}

export default Button