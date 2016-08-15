class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      display: 'block'
    };
  }

  handleClick (event) {
    event.preventDefault()
    $.ajax({
      url: "/cart",
      method: "delete",
      dataType: "json",
      data: {
        "cart_item_id": this.props.item.id
      },
      success: function(data) {
        $(document).trigger("itemDeletedFromCart")
        this.setState({display: "none"})
        this.props.subtotalHandler(this.props.item.price)
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(xhr, err, status);
      }.bind(this)
    });

  }

  render () {
    return (
      <div className="cart-item col-md-10 col-md-offset-1" style={{display: this.state.display}}>
        <div className="col-md-3 cart-image">
          <a href={this.props.item.product_show_url}>
            <img src={this.props.item.thumb_image_url} />
          </a>
        </div>
        <div className="col-md-3 cart-name"><p>{this.props.item.name}</p></div>
        <div className="col-md-3 cart-price"><p>${this.props.item.price}</p></div>
        <div className="col-md-3 cart-remove">
          <p><a href="#" onClick={this.handleClick.bind(this)}>X</a></p>
        </div>
      </div>
    );
  }
}
