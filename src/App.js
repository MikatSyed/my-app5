import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const [heroName,setheroName]=useState([])
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setheroName(data) )

  },[])

  //const heroName=[ {name:'Alex',age:27},{name:'Max', age:24},{name:'Jonson', age:25},{name:'Jimmy', age:28}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
 {
   heroName.map(mp => <Hero name={mp.name} key={mp.id} email={mp.email}></Hero>
    )
 }



      {/* <Hero name={heroName[0]} yarn="22.5M"></Hero>
      <Hero name={heroName[1]} yarn="32.9M"></Hero>
      <Hero name="Jonson"></Hero>
      <Hero name={heroName[3]}></Hero> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

function  Hero(props){
  console.log(props);
  const heroStyle ={
    border: '2px solid red',
    margin: '20px',
    padding:'5px'
  }
  return(
<div style={heroStyle}>
<h1>{props.name} </h1>
<b>Email:{props.email}</b>
  <h5>Yarn:{props.yarn || 30}</h5>
  <h2>I am a Believer</h2>
  <h3>full-stack-webdeveloper</h3>
</div>

  )
}


function MovieCounter(){
  const[ count,setCount ]= useState(0);

  return(
<div>
  <h1> Number of Movie : {count}</h1>
  <button onClick={()=> setCount(count+1)}>add</button>
  <MovieDisplay movies={count}></MovieDisplay>
</div>

  )
}

function MovieDisplay(props){
  return(
    <h4> The number of movie i have acted:{props.movies} </h4>
  )
}
export default App;
