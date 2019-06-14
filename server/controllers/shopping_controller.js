module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    db.get_all_products().then(response => {
      res.status(200).send(response);
    });
  },
  addItem: (req, res) => {
    const db = req.app.get("db")
    const { product } = req.body
    const { cart_id} = req.session.user
    console.log(product)
    console.log(req.session)
    db.add_shopping_cart({cart_id, item_name: product.product_name, description: product.product_description, price: product.price}).then(response => {
        console.log(response)
    })
  }
};
