exports.create = (req, res) => {
    return res.send({ message: 'Create handler' });
};
exports.findAll = (req, res) => {
    return res.send({ message: 'findAll handler' });
};
exports.findOne = (req, res) => {
    return res.send({ message: 'findOne handler' });
};
exports.update = (req, res) => {
    return res.send({ message: 'update handler' });
};
exports.delete = (req, res) => {
    return res.send({ message: 'delete handler' });
};
exports.deleteAll = (req, res) => {
    return res.send({ message: 'DeleteAll handler' });
};
exports.findAllFavorite = (req, res) => {
    return res.send({ message: 'findAllFavorite handler' });
};