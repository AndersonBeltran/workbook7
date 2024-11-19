

"use stict"
//only use async in the function when you using await inside the funtion
async function getData() {
  let promise = fetch("https://jsonplaceholder.typicode.com/users");
  let response = await promise;
  let data = await response.json(); 
  console.log(data);
}
getData();



