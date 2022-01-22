function get_articles(){

    var directory = "/articles";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', directory, false); // false for synchronous request
    xmlHttp.send(null);
    var ret = xmlHttp.responseText;

    parser = new DOMParser();
    var doc = parser.parseFromString(ret, "text/html");
    var files_list = doc.querySelector("ul").textContent.split("\n");

    var articles_ul = document.getElementById("articles_list");
    console.log(articles_ul)

    
    for (var i = 0; i < files_list.length; i++) {
        
        console.log(files_list[i]);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode( files_list[i] ));
        articles_ul.appendChild(li);

    }

}