function playgame() {
  var r = false
  if (!localStorage.getItem("playgame")){
    r = confirm("Warning: Before progressing further, please read the following: This is a Narrative driven story that has been made to be realistic, as such there is a heavy presence of violence, gore, torture and other NSFW themes. It is strongly recommended that anybody not accustomed to these should not progress further as some scenes may cause distress!");
    if (r == true) {
      localStorage.setItem("playgame", "true")
      window.location.href = "data/species.html";
    }
  }
  else{
    window.location.href = "data/species.html";
  }
}