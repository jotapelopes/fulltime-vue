import http from "@/http-common";

class PostUsuarioDataService {

    getAll() {
        return http.get("/Usuario");
    }

    create(data) {
        return http.post("/Usuario", data)
    }

}

export default new PostUsuarioDataService();