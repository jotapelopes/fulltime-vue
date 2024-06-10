import http from "@/http-common";

class PostUsuarioDataService {

    getAll() {
        return http.get("/Users");
    }

    create(data) {
        return http.post("/Users/create", data)
    }

}

export default new PostUsuarioDataService();