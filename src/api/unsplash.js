//We have created this to refectore our code to make it look good by creating axios's blueprint.

import axios from "axios";

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers : {
    Authorization: "Client-ID w7V7wWKLwVZ0sATYFgh4lJBvlR3-qpIThvhsfmFxwNc"
  }
});
