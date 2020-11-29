import React from 'react'
      
function Landing(props) {
        return(
        <div className="App">
            <br/>
            <br/>
            <div style={{backgroundColor: "#f2f2e7"}}>
            <body className="App"><p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p></body>

            {/* {localStorage.getItem('token') === null ? <body className="App"><p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p></body> : null} */}
      </div>
    </div>
    )}
    
    export default Landing;

    // {localStorage.getItem('token') === null ? : <p>test this</p> /*<body className="App" style={{color:"#292a2b", backgroundColor: "#f2f2e7"}}>{protectedViews()}</body>*/}