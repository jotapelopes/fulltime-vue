import http from "@/http-common";

class PostUsuarioDataService {

    getAll() {
        return http.get("/Users");
    }

    create(data) {
        return http.post("/Users/create", data)
    }

    update(data) {
        return http.put("/Users/update", data)
    }

}

export default new PostUsuarioDataService();