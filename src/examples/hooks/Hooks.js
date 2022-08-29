import React, { useState, useEffect } from 'react';


class Example2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked updated ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}


function Example() {
    const [count, setCount] = useState(0);



    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


function sum1(){
    console.log("hello")
}

const sum2 = function (){
    console.log("hello")
}


const sum3 = () => {
    console.log("hello")
    fetch("")
        .then(s =>
    console.log(s.json())
    );
}

const js = {
    name: "bob",
    id: 1
}

const {name} = js

const a = async () => {
    const p = await fetch("")
    const ar1 = [1,2,3];
    const ar2 = [4,5,6]
    const ar = [...ar1, ...ar2]
    const [last] = ar.reverse();

}


export default Example;