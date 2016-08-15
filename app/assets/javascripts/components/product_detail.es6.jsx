class ProductDetail extends React.Component {
  constructor () {
    super();
    this.state = {
      title: "Add To Cart"
    };
  }

  handleClick (event) {
    $.ajax({
      url: "/cart",
      method: "post",
      dataType: "json",
      data: {
        "product_id": this.props.id
      },
      success: function(data) {
        $(document).trigger("itemAddedToCart")
        this.setState({title: "Added To Cart"})
      }.bind(this),
      error: function(xhr, status, err) {
        // emit error event (cart added)
      }.bind(this)
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-6 detail-left">
          <img className="max-full-width" src={this.props.large_image_url} alt={this.props.name}/>
        </div>
        <div className="col-md-6 detail-right">
          <h3>{this.props.name}</h3>
          <h5>${this.props.price}</h5>
          <p>{this.props.description}</p>
          <button className="add-to-cart-btn col-md-12 hvr-fade" onClick={this.handleClick.bind(this)}>
            {this.state.title}
          </button>
        </div>
      </div>
    );
  }
}

