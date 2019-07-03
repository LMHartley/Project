function fetchData(){
    const request = new XMLHttpRequest();
    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
        displayAllUploads(parsedData);
    }
    request.open("GET", "http://localhost:8080/upload");
    console.log("received")
    request.send();
    console.log("sent");
}
function displayAllUploads(data){
    const uploadContainer = document.createElement("span");
    for(var i=0;i<data.length;i++){
        if(data == []){
            alert("empty database");
        }
        console.log('Display data:',data.length);
        const title = document.createElement("h2");
        title.innerText = (data[i].uploadTitle+" "+data[i].uploadDescription);
        title.className = "uploadClass";
        uploadContainer.append(title);
        const img = document.createElement("span");
        var imageFile = data[i].uploadImage;
        var filteredImageFile = imageFile.replace(/^.*\\/, "");
        img.innerHTML = '<img style="height: 150px" src="C:/Users/Liam Hartley/Desktop/projects/main/photos/'+ filteredImageFile+'"/>';
        img.className = "uploadClass";
        uploadContainer.append(img);
        const name = document.createElement("p");
        name.innerText = ("Uploaded by "+data[i].uploadName);
        name.className = "uploadClass";
        uploadContainer.append(name);
        const button = document.createElement("span")
        button.innerHTML= '<button onclick="deleteUpload('+data[i].id+ ')" />Delete</button>';
        button.className = "btn btn-outline-danger btn-search my-2 my-sm-0";
        console.log(button);
        uploadContainer.append(button);
    }
    document.getElementById("uploadElement").append(uploadContainer);
}
const formdata={}
function setUpload(form){
    for (control of form){
        formdata[control.id]=control.value;
    }
    console.log("Data: ",form,formdata);
    form.reset();
    sessionStorage.setItem("user data: ",JSON.stringify(formdata));
    const request = new XMLHttpRequest();
    request.onload = () => {
        console.log("DATA:", request.responseText)
    };
    request.open("POST", "http://localhost:8080/upload");
    request.setRequestHeader("Content-Type","application/json");

    const filteredData={};
    for(let k in formdata){
        if(k){
            filteredData[k]=formdata[k];
        }
    }
    request.send(JSON.stringify(filteredData));
    console.log("sent");
    return false;
}

function deleteUpload(id){
    const request = new XMLHttpRequest();
    request.onload = function(){
        const parsedData = JSON.parse(request.responseText);
        console.log("DATA:", parsedData);
    }
    request.open("DELETE", "http://localhost:8080/upload/"+id);
    console.log("received")
    request.send();
    console.log("sent");
    window.location(href="recentuploads.html")
}