const PostUser = require('../models/Post')
exports.createPost = async (req, res) => {
    if (req.body.description != null) {
        const { description } = req.body
        const post1 = await PostUser.create({ user_id: req.user.userId, description: description, last_updated: new Date() })
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

exports.getAllPost = async (req, res, next) => {
    const post = await PostUser.find().sort({ 'last_updated': '-1' }).populate("user_id")
    console.log('heeheheh', post)
    return res.send(post)
}