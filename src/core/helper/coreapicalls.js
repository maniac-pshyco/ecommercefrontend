// import { API } from "../../backend";

const API = "https://ecommercebackendapi.onrender.com"


export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
