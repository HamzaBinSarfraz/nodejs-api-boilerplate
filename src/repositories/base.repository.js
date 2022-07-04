class BaseRespository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findById(id).lean();
    }


    async getAll() {
        return await this.model.find({}).lean();
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }

    async getAndPopulateById(id, populate) {
        return await this.model.findById(id).populate(populate).lean();
    }

    async getAllAndPopulate(populate) {
        return await this.model.find({}).populate(populate).lean();
    }

    async getAllWithPagination(page, limit) {
        return await this.model.find({}).skip(page * limit).limit(limit);
    }

    async getAllWithPaginationAndSearch(page, limit, search) {
        return await this.model.find({}).skip(page > 0 ? ((page - 1) * page) : 0).limit(limit).or([{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]);
    }

    async getAllWithPaginationAndSearchAndSort(page, limit, search, sort) {
        return await this.model.find({}).skip(page * limit).limit(limit).or([{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]).sort(sort);
    }

    async getAllWithPaginationAndSearchAndSortAndFilter(page, limit, search, sort, filter) {
        return await this.model.find({}).skip(page * limit).limit(limit).or([{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]).sort(sort).where(filter);
    }

    async getAllWithPaginationAndSearchAndSortAndFilterAndPopulate(page, limit, search, sort, filter, populate) {
        return await this.model.find({}).skip(page * limit).limit(limit).or([{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]).sort(sort).where(filter).populate(populate);
    }
}

module.exports = BaseRespository;