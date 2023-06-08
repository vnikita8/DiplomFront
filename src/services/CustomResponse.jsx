// Нужно сделать по типу моделей и у них метод получения, чтобы не универсальный один, а с спецификой каждого

class CustomResp{
    constructor(){
        this.Data = "";
        this.Code = 0;
        this.ERROR = false;
    }

    setCode(inCode) {
        this.Code = inCode;
    }

    setData(inData) {
        this.Data = inData;     
    }

    async setDataUrl(url, method, body){
        console.log(url, method)

        const options = method == "GET" ? {
            method: method,
            mode: "cors",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
        } : {
            method: method,
            mode: "cors",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        
        const response = fetch(url, options)
                        .then((response) => {
                            this.Code = (response.status);
                            return response.json()
                        })
                        .then((data) => { 
                            this.Data = (data);
                        })
                        .catch( this.ERROR = true );
        console.log(this.Data)
        console.log(this.Code)
    }

    getData() {
        return Array.from(this.data);
    }
}


export default CustomResp;