import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
      
function Landing() {
        return(
        <div className="App">
            <br/>
            <div style={{backgroundColor: "#f2f2e7"}}>
            <body className="App"><p style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>Your memories, time, and peace of mind are precious. <br /> Wherever you roam, for work or play: <br /> Don't wander without your fello, traveler!</p></body>
            <Card body className="ml-auto mr-auto mt-3 col-8" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center", height: "70vh"}}>
                <Row style={{marginTop:"5px", height: "70vh", backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>

                <Col className="card overflow-auto ml-auto mr-auto mb-3 col-11" style={{marginTop:"5px", backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p style={{marginTop: '5px', fontFamily: 'Roboto'}}>Log your past, present, and future trips including destinations, dates, companions, and occasions. <br />Add a unique packing list for each destination so you don't leave anything behind!</p>
                    </Col>

                    <Col className="card overflow-auto ml-auto mr-auto col-4" style={{ backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p style={{marginTop: "15px"}}>Pack your Things...</p>
                      <Card style={{height: "50vh", backgroundColor: "#f2f2e7", color:"#292a2b"}}>
                        <CardBody>
                          {/* <CardTitle tag="h5">Pack Your Things</CardTitle> */}
                          <CardText style={{fontFamily: 'Roboto'}}>Manage your travel items with a unique list for each trip so nothing gets left behind - <br/>on the way there or back!</CardText>
                        </CardBody>
                        <CardImg bottom width="100%" height="75%" src="../../assets/packlistsq.png" alt="Packlist image cap" />
                      </Card>
                    </Col>

                    <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p style={{marginTop: "15px"}}>We're Going To...</p>
                      <Card style={{height: "50vh", backgroundColor: "#f2f2e7", color:"#292a2b"}}>
                        <CardBody>
                          {/* <CardTitle tag="h5">Pack Your Things</CardTitle> */}
                          <CardText style={{fontFamily: 'Roboto'}}>Keep a track of the sights you've seen <br/>(and the cash you've dropped).</CardText>
                        </CardBody>
                        <CardImg bottom width="100%" height="75%" src="../../assets/packlistsq.png" alt="Packlist image cap" />
                      </Card>
                    </Col>

                    <Col className="card overflow-auto ml-auto mr-auto col-4" style={{backgroundColor: "#f2f2e7", color:"#292a2b", textAlign: "center"}}>
                      <p style={{marginTop: "15px"}}>Make Memories!</p>
                      <Card style={{height: "50vh", backgroundColor: "#f2f2e7", color:"#292a2b"}}>
                        <CardBody>
                          {/* <CardTitle tag="h5">Pack Your Things</CardTitle> */}
                          <CardText style={{fontFamily: 'Roboto'}}>Reflect on your experiences in the moment or after the fact.</CardText>
                        </CardBody>
                        <CardImg bottom width="100%" height="75%" src="../../assets/packlistsq.png" alt="Packlist image cap" />
                      </Card>
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
    