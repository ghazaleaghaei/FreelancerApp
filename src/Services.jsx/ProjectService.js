import http from "./HttpService";

export function getOwnerProjectsApi() {
    return http.get("/project/owner-projects").then(({ data }) => data.data);
}
