function createPost() {
  let title = document.getElementById("postTitle");
  let body = document.getElementById("postBody");
  let author = document.getElementById("postAuthor");
  
  let postTemplate = document.getElementById("post-template").innerHTML;
  
  let postTemplateFn = _.template(postTemplate);
  
  let postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author})
  
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
}