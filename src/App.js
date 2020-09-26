import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>
}


function App() {
  return (
    <div className="App">
      Hellooo!! 
      <Food fav = "Kimchi" />
      <Food fav = "Gookbob" />
      <Food fav = "Bread" />
      <Food fav = "Ramen" />

    </div>
  );
}

export default App;
