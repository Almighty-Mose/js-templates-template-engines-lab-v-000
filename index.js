function createPost() {
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value;
  
  let postTemplate = document.getElementById("post-template").innerHTML;
  
  let postTemplateFn = _.template(postTemplate);
  
  let postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author});
  
  let pageTemplate = document.getElementById('page-template').innerHTML;
  
  let pageTemplateFn = _.template(pageTemplate);
  
  let pageTemplateHTML = pageTemplateFn({ 'post': postTemplateHTML });
  
  let pageBody = document.getElementById('page-body');
  
  pageBody.innerHTML += pageTemplateHTML;
  
  let commentTemplate = document.getElementById('comments-template').innerHTML;
  
  pageBody.innerHTML += commentTemplate;
  
  
}

function postComment() {
  
}