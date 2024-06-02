import http from "@/http-common";

class PostUsuarioDataService {

    getAll() {
        return http.get("/Colaborador");
    }

    create(data) {
        return http.post("/Colaborador", data)
    }

    getUsuario(param) {
        return http.get("/Colaborador/nome/" + param)
    }

    getUsuarioId(param) {
        return http.get("/Colaborador/id/" + param)
    }

}

export default new PostUsuarioDataService();