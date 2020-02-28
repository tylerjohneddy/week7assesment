

let getdata = () => {

    let request = new XMLHttpRequest();
    request.open('GET', 'http://35.189.102.11:8081//order/all/')
    request.send();
    request.onload = () =>{
        let data = JSON.parse(request.response);

        for(let order of data){
            console.log(order)
        }
        
    }
    
    
}

getdata()