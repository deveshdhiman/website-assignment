let http = new XMLHttpRequest(); // creating xmlhttp-request object
http.open('get', 'items.json', true); // preparing request with open object
http.send(); // sending the request

http.onload = function(){
    if(this.readyState == 4 && this,this.status == 200){
        let items = JSON.parse(this.responseText);
        let output = "";
        for(let item of items){
            output += `
            <div class="feature-col">
                <h3>${item.name}</h3>
                <br>
                <a href="#" class="col_items">Read More</a>
            </div>

            `;
        }
        document.querySelector(".products").innerHTML = output;
    }
}
