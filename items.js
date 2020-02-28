
let itemGetData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://35.189.102.11:8081/item/all/");
    request.send();
    request.onload = () => {

        let carList = document.getElementById("car-list");
        carList.innerText = "";
        testing = 123;
        let data = JSON.parse(request.response);
        for (let item of data) {
            let row = document.createElement("div");
            row.className = "row";

            let imageCol = document.createElement("div");
            imageCol.className = "col-3";

            let image = document.createElement("img");
            image.style.width = "100%"
            image.src = item.imageUrl;

            imageCol.appendChild(image);

            let descCol = document.createElement("div");
            descCol.className = "col-3";

            let carName = document.createElement("h5");
            carName.innerText = item.name;

            descCol.appendChild(carName)

            let cost = document.createElement("h5");
            cost.innerText = item.price;

            descCol.appendChild(cost)

            let deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger";
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", () => {
                itemDeleteData(item.id);
            })

            descCol.appendChild(deleteButton);
            row.appendChild(imageCol)
            row.appendChild(descCol);
            carList.appendChild(row);
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
