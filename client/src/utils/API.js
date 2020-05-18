import axios from "axios";

export default {
  getCategoryItems: function (category) {
    return axios.get(`/api/groceries/${category}`);
  },
  createItem: function (item) {
    return axios.post("/api/groceries", item);
  },
  deleteItem: function (id) {
    return axios.delete(`/api/groceries/${id}`);
  },
};
