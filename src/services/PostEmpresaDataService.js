import http from "@/http-common";

class PostEmpresaDataService {

    getAll() {
        return http.get("/Empresa");
    }

    create(data) {
        return http.post("/Empresa", data)
    }

}

export default new PostEmpresaDataService();