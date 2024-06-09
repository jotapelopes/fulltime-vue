import http from "@/http-common";

class PostUsuarioDataService {

    getAll() {
        return http.get("/Users");
    }

    create(data) {
        return http.post("/Users/create", data)
    }

    // getUsuario(param) {
    //     return http.get("/User/nome/" + param)
    // }

    getUsuarioId(param) {
        return http.get("/Users/id/" + param)
    }

}

export default new PostUsuarioDataService();