import React from "react";

/**
 * State management example
 */
class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.TimerID)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}

export default Clock;


/*setValue(){
      // Wrong
    this.setState({
        counter: this.state.counter + this.props.increment,
    });

    // Correct
    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));

}
*/