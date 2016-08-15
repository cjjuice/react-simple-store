class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      subtotal: this.props.initialSubtotal
    };
  }

  updateSubtotal (price) {
    this.setState({subtotal: this.state.subtotal - price})
  }

  render () {
    var createItem  = (ci) => <CartItem key={ci.id} item={ci} subtotalHandler={this.updateSubtotal.bind(this)} />;

    return (
      <div>
        <div className="row" style={{display: this.state.subtotal == 0 ? "block" : "none" }}>
          <div className="col-md-12 no-cart">
            <h3>Nothing Here :(</h3>
            <p>
              There are no items in your cart. would you like to
              <a href="/">add one?</a>
            </p>
          </div>
        </div>
        <div className="cart" style={{display: this.state.subtotal > 0 ? "block" : "none"}}>
          <h4>Shopping Cart</h4>
          <div className="row">
            {this.props.cartItems.map(createItem)}
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1">
              <a href="/"><p>Continue Shopping</p></a>
            </div>
            <div className="col-md-3 col-md-offset-6">
              <p>Subtotal: ${this.state.subtotal.toFixed(2)}</p>
              <p>Tax: ${(.0865 * this.state.subtotal).toFixed(2)}</p>
              <p>Total: ${((.0865 * this.state.subtotal) + this.state.subtotal).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

