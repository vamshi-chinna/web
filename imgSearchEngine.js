const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");
const accessKey ="tMJ0-eIgBHEGejm1syHopR9FYuG4CkGntTMrw93rSCk";



let keyword="";

let page= 1;
async function searchImage (){
    keyword=searchBox.value

const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=2`
const response=await fetch(url);
const data =await response.json();
const results= data.results;
if(page===1){
    searchBox.innerHTML="";
}

results.map((result) =>{
    const image =document.createElement("img");
    image.src =result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href =result.links.small;
    imagelink.target="_blank";
    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);


})


}
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page=1;
    searchImage();
   

})
showMoreBtn.style.display="block";
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage()
})
