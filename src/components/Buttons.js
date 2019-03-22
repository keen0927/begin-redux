import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.scss';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className={`Buttons`}>
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    );
};

export default Buttons;
