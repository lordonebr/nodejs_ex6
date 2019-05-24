let products = { items: [] };

products.items.push({
    "id":1, 
    "name":"smartphone", 
    "description":"new smartphone",
    "price":299.90
  });
  
function insertProduct(product){
    if(product.id && product.name && 
        product.description && product.description.length >= 10 && 
        product.price && product.price > 0){
        products.items.push(product);
        return true;
    }
    else
        return false;
}

module.exports = {

    get(_, res) {
        res.json({ title: 'Products page' });
    },
    getById(req, res) {
        if (!req.params.id) {
            res.json({ error: 'Should receive an id' })
        }

        res.json({ success: 'Id received!' })
    },
    getProducts(_, res){
        res.json(products);
    },
    getProductById(req, res){

        let product = [];
        if (req.params.id) {

            for(var i = 0; i < products.items.length; i++){
                if(products.items[i]){
                  if(products.items[i].id == req.params.id){
                    product = products.items[i];
                    break;
                  }
                }
            }
        }

        res.json(product);
    },
    postProduct(req, res){

        if(insertProduct(req.body))
            res.json({ success: 'Product inserted!' });
        else
            res.json({ error: 'Invalid product' });
    },
    deleteProductById(req, res){

        for(var i = 0; i < products.items.length; i++){
            if(products.items[i]){
              if(products.items[i].id == req.params.id){
                products.items.splice(i, 1);
                res.json({ success: 'Product deleted!' });
                return;
              }
            }
        }

        res.json({ error: 'Product not exist!' });
    }
};
