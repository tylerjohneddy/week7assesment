
let itemGetData = () => {
    fetch("http://35.189.102.11:8081/item/all/")
        .then(res => res.json())
        .then(json => {
            let item1 = document.getElementById("item");
            debugger;
            testing = 123;
            let data = JSON.parse(json);
            for (let item of data) {
                for (let hhh in item) {
                    console.log(hhh);
                    if (hhh.name == "price") {
                        let price = document.createElement("h5");
                        price.value = input.value;
                        item1.appendChild(price);
                        body.appendChild(price)
                    }
                    // console.log(item);
                }
            }
        }).catch(err => console.error(err));

}
let itemPostData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    let inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        if (input.name) {
            if (input.name == "price") {
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
let itemDeleteData = (id) => {
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://35.189.102.11:8081/item/" + id);
    request.send();
    request.onload = () => {
        itemGetData();
    }

}
//itemPostData();
itemGetData();
