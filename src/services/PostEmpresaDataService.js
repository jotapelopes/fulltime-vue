import http from "@/http-common";

class PostEmpresaDataService {

    getAll() {
        return http.get("/Empresa");
    }

    create(data) {
        return http.post("/Empresa", data)
    }

    getEmpresa(param) {
        return http.get("/Empresa/nome/" + param)
    }

}

export default new PostEmpresaDataService();