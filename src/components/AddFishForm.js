import React from 'react';


class AddFishForm extends React.Component {
    createFish(event) {
        event.preventDefault();
        console.log('Add a fish');
        const fishes = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        }
        console.log(fishes);
        this.props.addFish(fishes);
        this.fishForm.reset();

    }

    render () {
        return (
            <form className="fish-edit" ref={(input) => this.fishForm = input} onSubmit={(e) => this.createFish(e)}>
                <input name="name" ref={(input) => this.name = input} type="text" placeholder="Name" />
                <input name="price" ref={(input) => this.price = input} type="text" placeholder="Price"/>
                <select name="status" ref={(input) => this.status = input}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc" ref={(input) => this.desc = input} placeholder="Desc" />
                <input name="image" ref={(input) => this.image = input} type="text" placeholder="Image"/>
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;
