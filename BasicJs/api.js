const URL = "http://cat-fact.herokuapp.com/facts";
const getFacts = async()=>{
    console.log("getting Data....");
    let response=await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
};