import mongoose from 'mongoose'
const Schema = mongoose.Schema

const postSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
}, {
        timestamps: true
    })

const Post = mongoose.model('Post', postSchema)
export default Post