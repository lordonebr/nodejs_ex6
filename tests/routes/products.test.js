const expect = require('chai').expect;

const { get, getById, getProducts, getProductById, postProduct, deleteProductById } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function() {
    describe('get() function', function() {
        it('should return object with title ', function() {
            get(req, res);
            expect(res.jsonCalledWith).to.be.eql({ title: 'Products page'});
        });

        it('should receive return by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });

        it('should return object with items with value array', function(){
            getProducts(req, res);
            expect(res.jsonCalledWith).to.be.have.key('items');
            expect(res.jsonCalledWith.items).to.be.an('array');
        });

        it('should receive object product by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getProductById(getReq, res);
            expect(res.jsonCalledWith).to.be.an('object');
        });   

        it('should receive product with all keys of product', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getProductById(getReq, res);
            expect(res.jsonCalledWith).to.have.all.keys('id', 'name', 'description', 'price');
        });   

        it('should insert product', function() {
            const getReq = req;
            getReq.body = {
                "id":2, 
                "name":"smartwatch", 
                "description":"new smartwatch",
                "price":199.90
            };

            postProduct(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });

        it('should not insert product with description less than 10 characters ', function() {
            const getReq = req;
            getReq.body = {
                "id":3, 
                "name":"phone", 
                "description":"new",
                "price":99.90
            };

            postProduct(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('error')
        });

        it('should not insert product with price less or equal 0', function() {
            const getReq = req;
            getReq.body = {
                "id":4, 
                "name":"chip", 
                "description":"chip of cellphone",
                "price": 0
            };

            postProduct(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('error')
        });

        it('should delete product by id', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            deleteProductById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });   

    })
});