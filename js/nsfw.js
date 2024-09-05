function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function updateNsfw() {
  var nsfw = getCookie("NsfwEnabled");
  if (nsfw == "true") {
     console.log('NSFW');
     document.getElementById('sfw').style.display = 'none';
     document.getElementById('nsfw').style.display = 'block';
   } 
   else {
     console.log('SFW');
     document.getElementById('sfw').style.display = 'block';
     document.getElementById('nsfw').style.display = 'none';
   }
}

function initNsfwCheckbox() {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var nsfw = getCookie("NsfwEnabled");
  checkbox.checked = nsfw == "true";
  updateNsfw();
}

document.addEventListener('DOMContentLoaded', function () {
 var checkbox = document.querySelector('input[type="checkbox"]');
 checkbox.addEventListener('change', function () {
     setCookie("NsfwEnabled", checkbox.checked, 365); // set cookie to expire in 365 days
     updateNsfw();
 });
  initNsfwCheckbox();
});