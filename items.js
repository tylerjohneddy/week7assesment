let itemGetData = () => {
    let request = new XMLHttpRequest();
    request.open("GET","http://35.189.102.11:8081/item/all/");
    request.send();

    request.onload = () => {
        let data = JSON.parse(request.response);

        for (let item of data){
            console.log(item);
        }
    }
    
}
itemGetData();