class ProductDetail extends React.Component {
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
          <button className="col-md-12 hvr-fade">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

