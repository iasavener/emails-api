const paginate = async (model, options) => {
    const limit = options.limit || 10;
    const offset = options.offset || 0;
    const count = await model.count({     where: { ...options.where }});
    const rows = await model.findAll({ ...options, limit, offset });

    return {
        total_items: count,
        items: rows
    };
};

module.exports = paginate;