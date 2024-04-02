
const searchForm =document.getElementById('searchForm');
const searchBox =document.getElementById('search-box');
const searchResult =document.getElementById('search-result');
const showMoreBtn =document.getElementById('showMoreBtn');

let keyword="";
let page=1;
let accessKey="_pQQ9VYGBlFCvHjnPiPoMQ42YIkyFnnTaCmxioEQPh4";



async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}
    &query=${keyword}&client_id=${accessKey}&per_page=12`;


    const response = await fetch(url);
    const data = await response.json();


    if (page === 1) {
        searchResult.innerHTML = "";
        
    }

    const result = data.results;

   
    result.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
} 

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
 

showMoreBtn.addEventListener("click", ()=>{
  page++;
  searchImage();
})

