let xhr = new XMLHttpRequest();
//set method and url
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');

//handle status code from response
xhr.onreadystatechange = function (){
    if (this.readyState === 4 && this.status === 200){
        console.log('success');
    }
}

//initiate the request
xhr.send();