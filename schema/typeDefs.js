const {gql} = require('apollo-server')

const typeDefs = gql`
    type Task {
        id: String!,
        name: String,
        startDate: String,
        endDate: String,
        done: Boolean
    }

    type Query {
        tasks: [Task]
    }
`

module.exports = { typeDefs }