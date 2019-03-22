import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6'
    ];

    const random = Math.floor(Math.random() * 7);

    return colors[random];
}

const mapStateToProps = (state) => ({counters: state.counters});

const mapDispatchToProps = (dispatch) => ({
   onIncrement: (index) => dispatch(actions.increment(index)),
   onDecrement: (index) => dispatch(actions.decrement(index)),
   onSetColor: (index) => {
       const color = getRandomColor();
       dispatch(actions.setColor({index,color}));
   }
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;
