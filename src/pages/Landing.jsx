import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
      
function Landing() {
        return(
        <div className="App">
            <br/>
            <br/>
            <div style={{backgroundColor: "#f2f2e7"}}>
            <body className="App"><p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, your time, your peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p></body>
            <Card body className="ml-auto mr-auto mt-5 col-8" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                <Row style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                <Col className="card overflow-auto ml-auto mr-auto col-12" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p>demo trips list</p>
                    </Col>
                    <Col className="card overflow-auto ml-auto mr-auto col-6" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p>demo trips list</p>
                    </Col>
                    <Col className="card overflow-auto ml-auto mr-auto col-6" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p>demo trip lists</p>
                    </Col>
                </Row>
            </Card>
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
    