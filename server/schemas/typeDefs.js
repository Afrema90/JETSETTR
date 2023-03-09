const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    username: String
    email: String
    password: String
    token: String
}

input Register {
    username: String
    email: String
    password: String
}

input Login {
    email: String
    password: String
}

type Query {
    user(id: ID!): User
}

type Mutation {
    registerUser(register: Register): User
    loginUser(login: Login ): User

}


`;


// type Profile {
//     _id: ID
//     name: String
//     email: String
//     password: String
//     phone: String
//     address: String
//     city: String
//     state: String
//     zip: String
//     country: String
//     about: String
// }
// type Auth {
//     token: ID!
//     user: Profile
// }
// type Query {
//     profiles: [Profile]
//     profile(profileId: ID!): Profile
//     user: Profile
// }
// type Mutation {
//     addUser(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     saveProfile(profileData: ProfileInput!): Profile
// }
// input ProfileInput {
//     _id: ID
//     name: String
//     email: String
//     password: String
//     phone: String
//     address: String
//     city: String
//     state: String
//     zip: String
//     country: String
//     about: String
// }

module.exports = typeDefs;