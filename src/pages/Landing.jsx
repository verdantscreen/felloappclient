import React from 'react'
      
function Landing() {
        return(
        <div className="App">
            <br/>
            <br/>
            <div style={{backgroundColor: "#f2f2e7"}}>
            <body className="App"><p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p></body>
      </div>
    </div>
    )}
    
    export default Landing;

    // {localStorage.getItem('token') === null ? : <p>test this</p> /*<body className="App" style={{color:"#292a2b", backgroundColor: "#f2f2e7"}}>{protectedViews()}</body>*/}

    // import React, {Component} from 'react';

    // class Landing extends Component {

    //   constructor(){
    //     super()
    //     this.state = {
    //       greeting: <p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p>
    //     }
    //   }

    //   changeGreeting() {
    //     this.setState({
    //       greeting: <p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Good to see you again! Reminisce, make a change of plans, or plot your next escape.</p>
    //     })
    //   }

    //   render(){
    //     return(
    //       <>
    //       <div className="App">
    //         <br/>
    //         <br/>
    //         <div style={{backgroundColor: "#f2f2e7"}}>
    //         {this.state.greeting}
    //         <button onClick={() => this.changeGreeting()}>Test</button>
    //         </div>
    //         </div>
    //       </>
    //     )
    //   }
    // }

    // export default Landing;
    