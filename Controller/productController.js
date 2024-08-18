
const getProduct = ((req, res) => {
    // const id = Number(req.params.productID)
    // const product = products.find(product => product.id === id)

    // if (!product) {
    // return res.status(404).send('Product not found')
    // }
    // res.json(product)

    return res.status(200).send("All Product..............")
})

export { getProduct }