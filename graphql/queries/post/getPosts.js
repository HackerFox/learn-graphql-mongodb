import {
    GraphQLList
} from 'graphql'

import { postType } from '../../types'
import PostModel from '../../../models/post'

export default {
    type: new GraphQLList(postType),
    resolve() {
        const post = PostModel.find().exec()
        if (!post) {
            throw new Error('Error while fetching posts')
        }
        return post
    }
}