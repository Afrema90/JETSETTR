const User = require("../../models/User");
const { ApolloError } = require("apollo-server-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

  Mutation: {
    async registerUser(_, { register: { username, email, password } }) {
      //see if old user exists
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        throw new ApolloError(
          "A user is already registered with that email" + email,
          "USER_ALREADY_EXISTS"
        );
      }
      //throw err if user exists

      //encrypt pw
      var encryptedPassword = await bcrypt.hash(password, 10);

      //build mongoose model
      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });
      //create jwt (attach to user model)
      const token = jwt.sign({ user_id: newUser._id, email }, "UNSAFE_STRING", {
        expiresIn: "2h",
      });

      newUser.token = token;
      //save user in MongoDB
      const res = await newUser.save();

      return {
        id: res.id,
        ...res._doc
      }
    },

    async loginUser(_, { Login: {email, password } }) {
        //see if user exists with email
        const user = await User.findOne({ email });

  //check if entered password equals encrypted password
        if (user && (await bcrypt.compare(password, user.password))) {
            //create new token
            const token = jwt.sign({ user_id: newUser._id, email }, "UNSAFE_STRING", {
                expiresIn: "2h",
              });

        //attach token to user model
        user.token = token;

        return {
            id: user.id,
            ...user._doc
        }
        } else {
            //if user doesnt exist return error
throw new ApolloError('Incorrect Password', 'INCORRECT_PASSWORD');
        }
      

        //if user doesnt exist return error
  },

  // Query: { 
  //   user: (_, {ID}) = User.findById(ID) 
  // }
}
};
