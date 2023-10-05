const article_content = document.querySelectorAll(".blog-post");



const article_link_list = document.querySelectorAll(".list-unstyled>li");

for (let i = 0; i < article_link_list.length; i++) {

    if(i!==0){
        article_content[i].style.display = "none";
    }

    article_link_list[i].addEventListener("click", function(){
        for (let article of article_content){
            article.style.display = "none";
        }   
        article_content[i].style.display="block";
    })
};
