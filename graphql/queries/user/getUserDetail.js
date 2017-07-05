import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql'
import { userType } from '../../types'
import UserModel from '../../../models/user'

export default {
    type: userType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLid)
        }
    },
    resolve(root, params) {
        return UserModel.findById(params.id).exec()
    }
}