class ProductList extends React.Component {
  render () {
    var createItem  = (product) => <ProductBlock key={product.id} product={product} />;

    return <div className="row">{this.props.products.map(createItem)}</div>;
  }
}

