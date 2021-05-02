const PostUser = require('../models/Post')
exports.createPost = async (req, res) => {
    if (req.body.description != null) {
        const { email, description } = req.body
        var date = new Date();
        const post1 = await PostUser.create({ email: email, description: description, last_updated: date })
        return res.send(post1)
    }
    else {
        return res.send("Description cant be empty")
    }
};
exports.edit_post = async (req, res) => {
    const { email, description, last_updated } = req.body
    const date1 = new Date()
    const updated = await PostUser.findOneAndUpdate({ email: email, last_updated: last_updated }, { description: description, last_updated: date1 });
    if (!updated)
        res.send('updation failed')
    else {
        const user = await PostUser.findOne({ email: email, last_updated: date1 })
        res.send(user)
    }
}
exports.delete_post = async (req, res) => {
    const { email, date } = req.body
    const date1 = new Date()
    const deleted = await PostUser.findOneAndDelete({ email: email, last_updated: date });
    if (!deleted)
        res.send('deletion failed')
    else {
        res.send("deletion successfull")
    }
}