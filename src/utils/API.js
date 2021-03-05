import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
    getUsers: function () {
        return axios.get(BASEURL + `?results=100&nat=US`);
    }
}
export default API;
