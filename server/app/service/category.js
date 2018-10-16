const Service = require('egg').Service;

class FoodService extends Service {
    // GET /shopping/v2/restaurant/category
    async getCategories() {
        try {
            const categories = await this.ctx.model.Category.find({}, '-_id')
            this.ctx.body = {
                data: categories
            }
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取categories失败:' + err
            })
        }
    }

    async addCategory(type) {}

    async findById(id) {}

    async getDelivery() {}

    async getActivity() {}
}


module.exports = FoodService;