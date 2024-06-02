import http from "@/http-common";

class PostStatusDataService {

    getAll() {
        return http.get("/Status");
    }

    create(data) {
        return http.post("/Status", data)
    }

    getStatus(param) {
        return http.get("/Status/nome/" + param)
    }

    getStatusId(param) {
        return http.get("/Status/id/" + param)
    }

}

export default new PostStatusDataService();