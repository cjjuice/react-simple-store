class MiniCart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numItems: this.props.initialNumItems
    };
  }

  render () {
    return (
      <div className="mini-cart">
        <img className="max-full-width" src="/bag-icon.png"/>
        <div className="num-items">{this.state.numItems}</div>
      </div>
    );
  }
}

MiniCart.propTypes = {
  initialNumItems: React.PropTypes.number,
  cartId: React.PropTypes.number
};
