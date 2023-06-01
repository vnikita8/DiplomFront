class CustomResp{
    constructor(inData, inCode){
        this.Data = inData;
        this.Code = inCode;
    }

    setCode(inCode) {
        this.Code = inCode;
    }

    setData(inData) {
        if(typeof inData === "boolean"){
            this.Data = "Пользователь успешно добавлен";
            this.isBool = inData;
        }
        else {
            this.Data = inData;
            this.isBool = false;
        }
            
    }
}

export default CustomResp;