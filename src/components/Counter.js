import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({
    number, color, index, onIncrement, onDecrement, onSetColor
}) => {
    return (
        <div
            className='counter'
            onClick={() => onIncrement(index)}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement(index)
            }}
            onDoubleClick={() => onSetColor(index)}
            style={{backgroundColor: color
        }}>
            {number}
        </div>
    );
};



export default Counter;
