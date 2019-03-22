import * as types from '../actions/ActionTypes';

const initialState = {
    couters: [
        {
            number: 0,
            color: 'black'
        }
    ]
};

function counter(state = initialState, action) {
    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {

            };
        case types.REMOVE:
            return {

            };
        case types.INCREMENT:
            return {

            };
        case types.DECREMENT:
            return {

            };
        case types.SET_COLOR:
            return {

            };
            defatul:
            return state;
    }
}

export default counter;
