let itemGetData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://35.189.102.11:8081/item/all/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        for (let item of data) {
            console.log(item);
        }
    }

}
let itemPostData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    let inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        if (input.name) {
            if(input.name == "price"){
                obj[input.name] = parseFloat(input.value);
            }
            obj[input.name] = input.value;
        }
    }
    console.log(obj)
    let request = new XMLHttpRequest();
    request.open("POST", "http://35.189.102.11:8081/item/");
    request.setRequestHeader("Content-Type", "application/json")
    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);
    request.onload = () => {
        itemGetData();
    }
}
let itemDeleteData = (id) =>{
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://35.189.102.11:8081/item/" + id);
    request.send();
    request.onload = () => {
        itemGetData();
    }

}
//itemPostData();
itemGetData();
