console.log('Hallo daar!');
import axios from 'axios';

 async function fetchData(){
  const URI = 'https://restcountries.com/v2/all/'



  try{
   const response = await axios.get ( URI );
   console.log(response);
  } catch (error){
   console.error(error)
  }

 }
fetchData()
