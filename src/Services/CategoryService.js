import http from "./HttpService";

export function getCategoryApi() {
    return http.get("/category/list").then(({ data }) => data.data)
}
