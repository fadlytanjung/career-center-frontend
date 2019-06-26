import React,{Component} from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';

class footer extends Component{
    render(){
        return(
            <div className="footer-content">
                <Container>
                    <Navbar>
                        <Nav>
                            <Nav.Link>
                                Terms of use
                            </Nav.Link>
                            <Nav.Link>
                                Privacy policy
                            </Nav.Link>
                            <Nav.Link>
                                About us
                            </Nav.Link>
                            <Nav.Link>
                                FAQ
                            </Nav.Link>
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav>
                            <Nav>2019 &copy; USU CC reserved.</Nav>
                        </Nav>
                    </Navbar>
                </Container>
            </div>            
        )
    }
}
export default footer;