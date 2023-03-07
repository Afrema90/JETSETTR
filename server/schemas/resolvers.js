const{AuthenticationError} = Require('apollo-server-express');
const {signToken} = require('../utils/auth');
const{User,} = require('../models');

const resolvers = {
    
    Query: {
        profiles: async () => {
            return Profile.find();
        },
        profile: async (parent,{profileId}) => {
            return Profile.findOne({_id: profileId});
        },
        user: async (context) => {
            if (context,User) {
                return User.findOne({_id: context.user._id});
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token, user};
        },
        saveProfile: async (parent, {profileData}, context) => {
            if (context.user) {
                const profile = await Profile.findOneAndUpdate(
                    {_id: profileData.profileId},
                    {$set: {...profileData}},
                    {new: true}
                );
                return profile;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;