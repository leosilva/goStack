const connection = require('../../database/connection');

module.exports = {
    async create(request, response) {
        // const { nome, tipo } = request.body;
        const [id] = await connection('produto').insert(request.body);
        return response.json({id});
    },

    async list(request, response) {
        const productList = await connection('produto').select('*');
        return response.json(productList);
    }
}