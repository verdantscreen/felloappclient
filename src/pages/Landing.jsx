import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
      
function Landing() {
        return(
        <div className="App">
            <br/>
            <br/>
            <div style={{backgroundColor: "#f2f2e7"}}>
            <body className="App"><p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, time, and peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p></body>
            <Card body className="ml-auto mr-auto mt-3 col-8" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                <Row style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                <Col className="card overflow-auto ml-auto mr-auto col-11" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p style={{marginTop: '5px', fontFamily: 'Roboto'}}>Log your past, present, and future trips including destinations, dates, companions, and occasions. <br />Add a unique packing list for each destination so you don't leave anything behind!</p>
                    </Col>
                    {/* <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p>Manage your packed items on the way there and back.</p>
                    </Col>
                    <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p>Keep a list of the sights you've seen (and the cash you've dropped).</p>
                    </Col>
                    <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p>Reflect on your experiences in the moment or after the fact.</p>
                    </Col> */}
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
    