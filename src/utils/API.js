import axios from "axios";
const BASEURL = "https://randomuser.me/api";
const APIKEY = "?format=JSON"

// Export an object containing methods we'll use for accessing the Random Employee API

export default {
  getRandomEmployee: function() {
    return axios.get(BASEURL + query + APIKEY);
  }

};