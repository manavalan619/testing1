import * as request from "request-promise-native";

export class ApiAdaptar {

    post = (url, body) => {
        console.log('post url ', url);
        return new Promise((resolve, reject) => {
            request.post({ url: url, json: body }, (error, response, body) => {
                console.log("url---------->", url);
                console.log("body--------->", body);
                if (body !== undefined) {
                    this.sendResponse(resolve, reject, error, response, body);
                } else if (body === undefined) {
                    this.sendResponse(resolve, reject, error, response, null);
                }
            });
        });
    }

    get = (url) => {
        console.log('get url ', url);
        return new Promise((resolve, reject) => {
            request.get(url, (error, response, body) => {
                if (body) {
                    this.sendResponse(resolve, reject, error, response, JSON.parse(body));
                } else if (body === undefined) {
                    this.sendResponse(resolve, reject, error, response, null);
                }
            });
        });
    }

    put = (url, body) => {
        console.log('put url ', url);
        return new Promise((resolve, reject) => {
            request.put({ url: url, json: body }, (error, response, body) => {
                if (body !== undefined) {
                    this.sendResponse(resolve, reject, error, response, body);
                } else if (body === undefined) {
                    this.sendResponse(resolve, reject, error, response, null);
                }
            });
        });
    }

    delete = (url) => {
        console.log('delete url ', url);
        return new Promise((resolve, reject) => {
            request.delete(url, (error, response, body) => {
                if (body !== undefined) {
                    this.sendResponse(resolve, reject, error, response, body);
                } else if (body === undefined) {
                    this.sendResponse(resolve, reject, error, response, null);
                }
            });
        });
    }


    FileUploadPost = (url, formdata) => {
        console.log('post url ', url);
        return new Promise((resolve, reject) => {
            request.post({ url: url, formData: formdata }, (error, response, body) => {
                console.log("url---------->", url);
                console.log("body--------->", body);
                if (body !== undefined) {
                    this.sendResponse(resolve, reject, error, response, body);
                } else if (body === undefined) {
                    this.sendResponse(resolve, reject, error, response, null);
                }
            });
        });

    }
    private sendResponse = (resolve, reject, error, response, body) => {
        console.log('send response in apiad --errror-- ', error, ' --- boidy ---- ', body);
        if (body !== null) {
            if (response.statusCode === 200) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: " request has succeeded"
                });
            } else if (response.statusCode === 201) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: "request has succeeded and a new resource has been created"
                });
            } else if (response.statusCode === 202) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: "request has been received but not yet acted upon"
                });
            } else if (response.statusCode === 203) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: "non authoritative info"
                });
            } else if (response.statusCode === 204) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: "no conent"
                });
            } else if (response.statusCode === 205) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: "reset content"
                });
            } else if (response.statusCode === 206) {
                resolve({
                    body,
                    code: response.statusCode,
                    message: "partial content"
                });
            } else if (response.statusCode === 400) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "bad request"
                });
            } else if (response.statusCode === 401) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "unauthorized"
                });
            } else if (response.statusCode === 402) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "Payment Required"
                });
            } else if (response.statusCode === 403) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "forbidden"
                });
            } else if (response.statusCode === 404) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "not found"
                });
            } else if (response.statusCode === 405) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "method not allowed"
                });
            } else if (response.statusCode === 406) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "not acceptable"
                });
            } else if (response.statusCode === 407) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "proxy authentication required"
                });
            } else if (response.statusCode === 408) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "request timeout"
                });
            } else if (response.statusCode === 500) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "internal server error"
                });
            } else if (response.statusCode === 501) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "request method is not supported by the server and cannot be handled"
                });
            } else if (response.statusCode === 502) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "bad request"
                });
            } else if (response.statusCode === 503) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "service available"
                });
            } else if (response.statusCode === 504) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "gateway timeout"
                });
            } else if (response.statusCode === 505) {
                reject({
                    body,
                    code: response.statusCode,
                    message: "HTTP version used in the request is not supported by the server"
                });
            } else {
                reject(error);
            }
        } else if (error !== undefined && error !== null) {
            if (error.port !== undefined && error.port !== null) {

                let errormsg = {
                    error: "Microservice Down",
                    service_port: error.port,
                };
                console.error(errormsg)
                reject(errormsg);
            } else {
                reject(error);
            }
        }
    }

}
