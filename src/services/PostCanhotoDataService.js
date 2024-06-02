import http from "@/http-common";

class PostCanhotoDataService {

    getAll() {
        return http.get("/Canhoto");
    }

    create(data) {
        return http.post("/Canhoto", data)
    }

    update(data) {
        return http.put("/Canhoto", data)
    }

    getImagemCanhoto(id) {
        return http.get("/Canhoto/imagem/" + id, { responseType: 'blob' })
    }

    getCanhotoId(id) {
        return http.get("/Canhoto/id/" + id);
    }

}

export default new PostCanhotoDataService();