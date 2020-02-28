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
    //     let obj = {"imageUrl": "https://vignette.wikia.nocookie.net/roary-the-racing-car/images/0/05/Roary.png/revision/latest/scale-to-width-down/340?cb=20150717034653",
    //     "name": "rory",
    //     "price": 9.99
    //   };
    let inputs = form.getElementsByTagName("itemInsert");
    for (let input of inputs) {
        if (item.name) {
            obj[input.name] = input.value;
        }
    }
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
//itemPostData();
itemGetData();
