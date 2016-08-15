class MiniCart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numItems: this.props.initialNumItems
    };
  }

  componentDidMount () {
    $(document).on("itemAddedToCart", this.incrementItemNum.bind(this));
    $(document).on("itemDeletedFromCart", this.decrementItemNum.bind(this));
  }

  componentWillUnmount () {
    $(document).off("itemAddedToCart");
    $(document).off("itemDeletedFromCart");
  }

  incrementItemNum () {
    this.setState({numItems: this.state.numItems + 1});
  }

  decrementItemNum () {
    this.setState({numItems: this.state.numItems - 1});
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
