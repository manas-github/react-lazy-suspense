import React, { lazy, Suspense } from 'react';
import './App.css';

const Vegetables = React.lazy(() => import('./Vegetables'));
const Fruits = React.lazy(() => import('./Fruits'));
const Snacks = React.lazy(() => import('./Snacks'));
const Drinks = React.lazy(() => import('./Drinks'));

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    };
    updateCount = (count) => {
        this.setState({count:count})
    }
    render() {
        return (
            <div className="App">
                <h1>SHOP HERE</h1>
                <Suspense fallback={<h1>Still Loading…</h1>}>
                    <h1 onClick={() => this.updateCount(0)}>Veggies</h1>
                    {this.state.count == 0 && <Vegetables />}
                    <h1 onClick={() => this.updateCount(1)}>Fruits</h1>
                    {this.state.count == 1 && <Fruits />}
                    <h1 onClick={() => this.updateCount(2)}>Snacks</h1>
                    {this.state.count == 2 && <Snacks />}
                    <h1 onClick={() => this.updateCount(3)}>Drinks</h1>
                    {this.state.count == 3 && <Drinks />}
                </Suspense>
            </div>
        );
    }
}

