// Нужно сделать по типу моделей и у них метод получения, чтобы не универсальный один, а с спецификой каждого


class GroupsModel{

    static async getGroups2(){

        let code, data;
        const url = "https://transfer.kemsu.ru/api/v1/groups/";

        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
        } 
        
        const response = fetch(url, options)
                        .then((response) => {
                            code = (response.status);
                            return response.json()
                        })
                        .then((data) => { 
                            data = (data);
                        })
                        .catch( this.ERROR = true );
        return new {code: code, data: data}
    }

}


export default GroupsModel;