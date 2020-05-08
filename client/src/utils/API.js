import axios from "axios";

export default {
  getCategoryItems: function (category) {
    return axios.get(`/api/groceries/${category}`);
  },
};
