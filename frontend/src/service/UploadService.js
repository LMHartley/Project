import axios from 'axios'

const UPLOAD_URL = 'http://localhost:8080/upload';

class UploadService {

    executeGetService() {
        return axios.get(UPLOAD_URL);
    }

    executePostService(upload) {
        return axios.post(UPLOAD_URL, upload);
    }

    executeDeleteService(id) {
        return axios.delete(UPLOAD_URL + "/" + id);
    }

}

export default new UploadService()