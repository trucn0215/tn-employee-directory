import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
    getUsers: function () {
        return axios.get(BASEURL + `?results=10`);
    }
}
export default API;
