console.log("Hello World!");

const viewesurl = "http://www.girlsintech.co.uk/api/top10?category=views";
const likesurl = "http://www.girlsintech.co.uk/api/top10?category=likes";
const commentsurl = "http://www.girlsintech.co.uk/api/top10?category=comments";
const dislikesurl = "http://www.girlsintech.co.uk/api/top10?category=dislikes";

fetch(viewesurl).then(response => response.json()).then(data => {
    getVideos(data.result, "videosviewed");
    console.log(data.result);         
});
fetch(likesurl).then(response => response.json()).then(data => {
    getVideos(data.result, "videosliked");
    console.log(data.result);         
});
fetch(commentsurl).then(response => response.json()).then(data => {
    getVideos(data.result, "videoscommented");
    console.log(data.result);         
});
fetch(dislikesurl).then(response => response.json()).then(data => {
    getVideos(data.result, "videosdisliked");
    console.log(data.result);         
});

function getVideos(videos, elementId) {
    const element = document.getElementById(elementId);

    for(i = 0; i < videos.length; i++) {
        const title = videos[i]._id;

        var div = document.createElement("div");
    var innerDiv = document.createElement("div");
    div.className = "video";
    innerDiv.className = "card";
    innerDiv.innerHTML = "<h3>" + title + "</h3>";
    var imgDiv = document.createElement("div");
    var imgSrc = document.createElement("img");
    imgDiv.append(imgSrc);
    imgSrc.src = videos[i].thumbnail;
    innerDiv.append(imgDiv);
    innerDiv.append("Likes: " + videos[i].likes);
    innerDiv.append(" Dislikes: " + videos[i].dislikes);
    innerDiv.append(" Comments: " + videos[i].comments);
    innerDiv.append(" Views: " + videos[i].views);
    div.append(innerDiv);
    element.append(div);
    }
}
const button = document.querySelector(".button");
const text = document.querySelector(".text");