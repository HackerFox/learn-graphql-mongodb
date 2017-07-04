import express from 'express'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'

// import schema from './graphql'

const app = express()

mongoose.connect('mongodb://localhost/graphql-api')
const db = mongoose.connection
db.on('error', () => console.log('Failed to connect to databse'))
    .once('open', () => console.log('Connected to mongo db'))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

// GraphQL API Endpoint

// app.use('/graphql', graphqlHTTP(() => ({
//     schema,
//     graphiql: true,
//     pretty: true
// })))

app.listen(3000, () => {
    console.log('Express connected to port 3000')
})