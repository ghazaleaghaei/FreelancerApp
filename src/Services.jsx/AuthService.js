import http from "./HttpService";

export function getOtp(data) {
    return http.post("/user/get-otp", data).then(({ data }) => data.data)
    // because our response is data={data:{},...} ,and we wanna inside data
    // return http.post("/user/get-otp", data)
}

export function checkOtp(data) {
    return http.post("/user/check-otp", data).then(({ data }) => data.data)
}
