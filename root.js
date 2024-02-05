import axios from "axios";


const root = {
  hello: () => {
    return "hello world";
  },
  welcomeMessage: (params) => {
    return `Welcome ${params.name}`;
  },
  userName: () => "Gopi",
  age: () => 25,
  getUser: () => {
    const User = {
      name: "Gopi",
      age: 25,
      city: "Chennai",
      indian: true,
    };
    return User;
  },
  getUsers: () => {
    const users = [
      {
        name: "Gopi",
        age: 25,
        city: "Chennai",
        indian: true,
      },
      {
        name: "Saravana",
        age: 26,
        city: "Madurai",
        indian: true,
      },
    ];
    return users;
  },
  getAPIData: async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    const response = await axios.get(API_URL)
    return response.data;
  }
};

export default root;
