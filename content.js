//code to answer the question
const key = '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';
const element = document.querySelector('.qtext');
const input = element.innerHTML + ". Answer in one line"
const getChatResponse = async () =>{

const API_URL ="https://api.openai.com/v1/chat/completions";


const requestOptions  = {
method: "POST",
headers : {
"Content-Type":"application/json",
"Authorization":`Bearer ${key}`

},
body: JSON.stringify({

"model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": input }],
     "temperature": 0.2
})
}
try{
const output = await(await fetch(API_URL,requestOptions)).json();
console.log(output);
const newQtext = element.innerHTML +"("+(output.choices[0].message.content)+")";
element.innerHTML = newQtext;}
catch(error){
console.log(error);
}
}

getChatResponse();