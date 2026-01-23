function updateTFToggle() {
  var tfEnabled = getCookie("tfEnabled"); // Assuming getCookie is a function that retrieves cookie values
  const wolfs=document.getElementsByClassName('wolf');
  const humans=document.getElementsByClassName('human');
  if (tfEnabled == "true") {
     console.log('TF Enabled');
     for(let i=0;i<2;i++){
        humans[i].style.display='none';
        wolfs[i].style.display='block';
     }
     
  } else {
    console.log('TF Disabled');
    for(let i=0;i<2;i++){
      humans[i].style.display='block';
      wolfs[i].style.display='none';
   }
  }
}

function initTFToggle() {
  var checkbox = document.getElementById('tfToggle'); // Ensure this is the ID of your TF toggle checkbox
  var tfEnabled = getCookie("tfEnabled");
  checkbox.checked = tfEnabled == "true";
  updateTFToggle();
}

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('tfToggle'); // Match this ID with your TF toggle checkbox
  checkbox.addEventListener('change', function () {
    
      setCookie("tfEnabled", checkbox.checked, 365); // Use a specific cookie for the TF toggle
      updateTFToggle();
  });
  initTFToggle();
});