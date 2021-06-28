const axios = require("axios");

const getUser = () => {
   return axios.get("https://jsonplaceholder.typicode.com/users/2")
       .then(response => response.data)
       .catch(err => console.log(err.message))
}


console.log(getUser().then(data => console.log(data.email)))


module.exports = getUser;