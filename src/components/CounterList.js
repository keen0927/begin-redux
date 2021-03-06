import React from 'react';
import Counter from './Counter';

import './CounterList.scss';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const counterList = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );
    return (
        <div className={`CounterList`}>
            {counterList}
        </div>
    );
};

export default CounterList;
