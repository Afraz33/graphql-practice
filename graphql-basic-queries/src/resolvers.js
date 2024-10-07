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
    email: (user) => user.email.toLowerCase() ,
  
  },
  User :{
  age: (user ) => user.age = parseInt(user.age)
  },
  Mutation: {
    createUser:(parent, { id, name, email, age }, context, info) =>{
     
      const newUser ={name, email, id, age};
      users.push(newUser)
      console.log(users)
      return newUser;
    },
    deleteUser: (parent, { id }, context, info) => {
      console.log(id)
      users.forEach(user => {
        console.log(typeof(id) )
      });
      const index = users.findIndex(user => user.id === id);
      if (index === -1) {
        throw new Error(`User with id ${id} not found`);
      }
      const [deletedUser] = users.splice(index, 1);
      console.log(deletedUser);
      return deletedUser;
    },
    updateUser: (parent, { id, name, email, age }, context, info) => {
      let newUser = users.find(user => user.id === id);

      newUser.name = name;
      newUser.email = email;
      newUser.age = age;

      return newUser;
    },
   //coomment
  }

};
export default resolvers;