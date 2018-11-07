// let's go!
import React from 'react';
import PropTypes from 'prop-types';


class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        console.log("You enter a store!");
        //grab the text from the box
        console.log(this.storeInput.value);
        //transition to /store/:store_id
        const storeId = this.storeInput.value;
        //console.log(`Going to ${storeId}`);
        //console.log(this.context.router);
        this.props.history.push(`/store/${storeId}`)
    }

    render() {
        //anywhere here
        return (
            <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
                <h2> Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" ref={(input) => {this.storeInput = input}}/>
                <button type='submit'> Visit Store -></button>
            </form>
        )
        
    }
}

/*
StorePicker.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
};*/
  

StorePicker.contextTypes = {
    router: PropTypes.object,
}

export default StorePicker;