
const Rainout = {

statusRequest(){
    return fetch('https://a.statushare.com/embed/1/builder1.php?number=8475633131&output=json').then(response=>{
      if(response.ok){
        return response.json();
      }
  throw new Error('Request Failed');
},networkError=>{
  console.log(networkError.message)
}
).then(jsonResponse=>{

    return jsonResponse.map((field)=>{
      //console.log(field)
      return{
        name:field[2],
        status:field[3],
        time:field[4],
        message:field[5],
        clip:field[6],
        uid:field[1]
      }
    })
  })
  }
  }


export default Rainout;
