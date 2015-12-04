function createMailMunchScriptTag() {
  var script = document.createElement('script');
  script.setAttribute('src', "//s3.amazonaws.com/mailmunch/static/site.js");
  script.setAttribute('id', "mailmunch-script");
  script.setAttribute('data-mailmunch-site-id', 99877);
  script.setAttribute('async', "async");
  
  return script;
}

document.body.appendChild(createMailMunchScriptTag());