function fetchData(){
    const request = new XMLHttpRequest();
    displayData(parsedData);

    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
    }
    request.open("GET", "jdbc:h2:mem:upload");

    request.send();
    console.log("sent");
}

function displayData(data){
    console.log('display data!', data);
    document.getElementById('id').innerText = ("ID: "+data.id);
    document.getElementById('uploadName').innerText = ("Upload Name: "+data.uploadName);
}