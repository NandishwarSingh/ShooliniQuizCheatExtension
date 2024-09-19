const element = document.getElementsByClassName("noselect ng-binding")[0];
const question = element.innerText + 
  " a) " + document.getElementsByClassName("noselect ng-binding")[1].innerText +
  " b) " + document.getElementsByClassName("noselect ng-binding")[2].innerText +
  " c) " + document.getElementsByClassName("noselect ng-binding")[3].innerText +
  " d) " + document.getElementsByClassName("noselect ng-binding")[4].innerText +
  ". Choose the correct option from a, b, c, or d and answer in one character";

// Append the question text and send it to the API
fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyALui4lY8epByWiGXqIOUCENR5sTblzvPY', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          {
            text: question
          }
        ]
      }
    ]
  })
})
.then(response => response.json())
.then(data => {
  // Extract the answer from the API response and append it to the question
  const answer = data.candidates[0].content.parts[0].text;
  const finalOutput = question + "\n\nAnswer: " + answer;
  document.getElementsByClassName("noselect ng-binding")[0].innerText=document.getElementsByClassName("noselect ng-binding")[0].innerText+` ${answer}`;
  console.log(finalOutput); // Log the combined question and answer
})
.catch(error => console.error('Error:', error));
