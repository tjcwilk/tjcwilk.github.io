function load_articles(){

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

        if(files_list[i])
        {
            var filename = files_list[i];

            var date = filename.split("_")[0];
            var title_and_extension = filename.split("_")[1];
            var title = title_and_extension.split(".")[0]
            var article_url = `/articles/${filename}`;

            var a = document.createElement('a');
            var link_text = document.createTextNode(`${title}`);
            a.appendChild(link_text);
            a.href = article_url;

            var li = document.createElement("li")         
            li.appendChild(a);
            articles_ul.appendChild(li);
        }

    }

}