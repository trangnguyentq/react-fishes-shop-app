import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import SampleFishes from '../sample-fishes'
import Fish from './Fish'



class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);
        this.state = {
            fishes: {},
            order: {} 
        };
    }

    addFish(fish) {
        //update your state
        const fishes = {...this.state.fishes};
        //add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set stage
        this.setState({fishes: fishes});
    }

    loadSamples() {
        //set stage
        this.setState({fishes: SampleFishes});
    }

    addOrder(key){
        const order = {...this.state.order};
        //add in our new order
        order[key] = order[key] + 1 || 1;
        //set stage
        this.setState({order: order});
    }

    removeFromOrder(key) {
        const order = {...this.state.order};
        //delete in our new order
        delete order[key];
        //set stage
        this.setState({order: order});
    }

    render () {
        return (
            <div className='catch-of-the-day'>
                <div className="menu">
                    <Header tagline='Fresh Market'/> 
                    <ul className='list-of-fishes'>
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addOrder={this.addOrder}/>)}
                    </ul>
                    
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;
