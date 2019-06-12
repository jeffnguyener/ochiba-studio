module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.get_all_products()
            .then(response => {
                res.status(200).send(response)
            })
    }
}