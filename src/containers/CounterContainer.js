import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        'olive',
        'pink',
        'blue',
        'red',
        'yellow',
    ];
    const random = Math.floor(Math.random() * 5);

    return colors[random];
}

const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
