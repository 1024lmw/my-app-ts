
import React, { Component } from 'react';
import { incrementAction, reduceAction } from '../reducers/calculate';
import { connect } from 'react-redux';
//
interface Props {
    num: number,
    increment: ()=>any,
    decrement: ()=>any,
}

const mapStateToProps = (state: any) => {
    return {
        num: state.calculate.num
    };
};


//数据流
const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch(incrementAction),
    decrement: () => dispatch(reduceAction)
});
//
console.log(connect)
 @(connect( mapStateToProps, mapDispatchToProps, ) as any)
export default class Home extends Component<Props, any>{
    render() {
        console.log(this.props)
        return (<div className='container'>
            <p onClick={this.props.increment}>click to increment num</p>
            <p onClick={this.props.decrement}>click to decrement num</p>
            <p>{this.props.num}</p>
        </div>)
    }
}
