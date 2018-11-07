import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === "available";
    const removebutton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available {removebutton}
        </li>
      );
    }
    return (
      <li key={key}>
        <span>{count} lbs {fish.name} {removebutton}</span>
        <span className='price'>{formatPrice(count * fish.price)}</span>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
            {orderIds.map(this.renderOrder)}
            <li className="total">
                <strong>Total:</strong>
                {formatPrice(total)}
            </li>
        </ul>
        
      </div>
    );
  }
}

export default Order;