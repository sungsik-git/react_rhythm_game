import React from 'react'

function HomeButton(props) {
    return (
      <input 
        type='button' 
        id="homeButton" 
        onClick={() => {
          props.setViewMode("home");
        }}
        value={"Home"}
      />
    );
  }
  
  export default HomeButton;