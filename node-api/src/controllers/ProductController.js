const connection = require('../../database/connection');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

module.exports = {
    async create(request, response) {
        // const { nome, tipo } = request.body;
        const [id] = await connection('produto').insert(request.body);
        return response.json({id});
    },

    async list(request, response) {
        const { page = 1 } = request.query;
        const productList = await connection('produto')
            .select('*')
            .paginate({
                perPage: 5,
                currentPage: page,
                isLengthAware: true
            });
            
        return response.json(productList);
    },

    async findById(request, response) {
        const productList = await connection('produto').select('*').where({id: request.params.id});
        return response.json(productList);
    },

    async update(request, response, next) {
        const id = await connection('produto')
            .where({id: request.params.id})
            .update(request.body, ['id']);
        
        next();
    },

    async delete(request, response) {
        const id = await connection('produto')
        .where({id: request.params.id})
        .del();

        return response.send();
    }
}