<button class="btn" onclick="myFunction()" ><img src="data/img/ui/play_game.png" alt="Play Game" height="50" width="230"></button>

function myFunction() {
  var r = confirm("Warning: Before progressing further, please read the following: This is a Narrative driven story that has been made to be realistic, as such there is a heavy presence of violence, gore, torture and other NSFW themes. It is strongly recommended that anybody not accustomed to these should not progress further as some scenes may cause distress!");
  if (r == true) {
	window.location.href = "data/species.html";
  } else {
  }
}