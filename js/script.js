// Preview element object
const preview = document.getElementById('preview');

// Number of items element object
const numberItems = document.getElementById('number-items');

// Flexbox properties element object
const flexboxProperties = document.querySelectorAll('input');

// Set Flexbox properties default values in the preview
function setDefaultValues() {
  preview.style.flexDirection = "row";
  preview.style.flexWrap = "nowrap";
  preview.style.justifyContent = "flex-start";
  preview.style.alignItems = "stretch";
  preview.style.alignContent = "stretch";
}

// Update preview with new Flexbox properties values
function updatePreview(number) {
  var htmlToPreview = '';
  
  for (let i = 1; i <= number; i++) {
    htmlToPreview += '<div class="item">' + i + '</div>';
  }

  preview.innerHTML = htmlToPreview;
}

// Add Event Listeners
numberItems.addEventListener('input', () => {
  if(numberItems.value.length === 0 || numberItems.value < 1 || numberItems.value > 8) {
    updatePreview(1);
  } else {
    updatePreview(numberItems.value);
  }
});

flexboxProperties.forEach(function (item) {
  item.addEventListener('change', function (e) {
    if (e.target.name === "flex-direction") {
      document.getElementsByClassName('preview')[0].style.flexDirection = e.target.value;
    } else if (e.target.name === "flex-wrap") {
      document.getElementsByClassName('preview')[0].style.flexWrap = e.target.value;
    } else if (e.target.name === "justify-content") {
      document.getElementsByClassName('preview')[0].style.justifyContent = e.target.value;
    } else if (e.target.name === "align-items") {
      document.getElementsByClassName('preview')[0].style.alignItems = e.target.value;
    } else if (e.target.name === "align-content") {
      document.getElementsByClassName('preview')[0].style.alignContent = e.target.value;
    }
  });
});

setDefaultValues();
updatePreview(1);