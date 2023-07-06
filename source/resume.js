var ol_tags = document.getElementsByTagName('ol')

for (var i=0, max=ol_tags.length; i < max; i++) {
    ol_tags[i].setAttribute('reversed', 'reversed')
}

// ChatGpt generated code for skills section:
// Get all <skills> elements on the page
var skillsElements = document.querySelectorAll('skills');

// Iterate over each <skills> element
skillsElements.forEach(function(skillsElement) {
  // Get the content of the <skills> element
  var skillsContent = skillsElement.textContent;

  // Split the content into an array of words separated by commas
  var skillsArray = skillsContent.split(',');

  // Create a new <span> element
  var spanElement = document.createElement('span');

  // Iterate over each word in the array
  skillsArray.forEach(function(word) {
    // Create a new <skill> element
    var skillElement = document.createElement('skill');

    // Set the text content of the <skill> element to the current word
    skillElement.textContent = word.trim();

    // Append the <skill> element to the <span> element
    spanElement.appendChild(skillElement);
  });

  // Replace the <skills> element with the <span> element
  skillsElement.parentNode.replaceChild(spanElement, skillsElement);
});
