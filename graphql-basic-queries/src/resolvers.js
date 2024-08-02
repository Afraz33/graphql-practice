import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id == id);
    },
    users: (parent, args, context, info) => {
      return users;
    }
  },
  User: {
    email: (user) => user.email.toLowerCase() // Example of a custom field resolver
  }
};
export default resolvers;