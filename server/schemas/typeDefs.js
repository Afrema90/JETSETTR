const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    token: String
}

type Auth {
    token: ID!
    user: User
  }



type Query {
    user(_id: ID!): User
}

type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
      ): Auth
    
      login(email: String!, password: String!): Auth 
}`;

// input RegisterInput {
//     username: String
//     email: String
//     password: String
//     confirmPassword: String
// }
// registerUser(registerInput: RegisterInput): User
// loginUser(loginInput: LoginInput ): User

// input LoginInput {
//     email: String
//     password: String
// }
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