import React from 'react';
import AddFishForm from './AddFishForm'


class Inventory extends React.Component {
    render () {
        return (
            <div>
                <h2> Add To Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSamples}>Add Sample Fishes</button>
            </div>
            
            
        )
    }
}

export default Inventory;