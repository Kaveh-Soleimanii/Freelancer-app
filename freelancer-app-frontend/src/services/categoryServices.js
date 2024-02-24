import http from "./httpService";

function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}



export default getCategoryApi