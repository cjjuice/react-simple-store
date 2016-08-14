class ProductBlock extends React.Component {
  handleMouseEnter (event) {
    var target = $(event.currentTarget);
    target.find(".info-overlay").velocity("stop").velocity(
      {opacity: "1"},
      {ease: "easeOutExpo", duration: 300}
    )
  }

  handleMouseLeave (event) {
    var target = $(event.currentTarget);
    target.find(".info-overlay").velocity("stop").velocity(
      {opacity: "0"},
      {ease: "easeOutExpo", duration: 300}
    )
  }

  render () {
    return (
      <div className="col-xs-6 col-md-4 product-block" onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
        <div className="block-container">
          <a href={this.props.product.product_show_url}>
            <img className="max-full-width" src={this.props.product.medium_image_url}/>
          </a>
          <div className="info-overlay">
            <p>{this.props.product.name}</p>
            <p>${this.props.product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
