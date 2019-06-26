import React,{Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class navigation extends Component{
    constructor(){
        super()
        this.state={
            activeNav:"",
        }
    }

    addCssActive(path){
        this.setState({activeNav:path})        
    }
    componentDidMount(){
        let url = window.location.pathname
        this.setState({activeNav:url})
    }
    render(){
        return(
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">USU CC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav>
                        <Nav className={this.state.activeNav === '/jobseeker' ? "active-navbar" : ""}>
                            <Link className="nav-link" to="/jobseeker" onClick={()=>this.addCssActive("/jobseeker")}>Jobseeker</Link>
                        </Nav>
                        <Nav className={this.state.activeNav === '/employeer' ? "active-navbar" : ""}>
                            <Link className="nav-link" to="/employeer" onClick={()=>this.addCssActive("/employeer")}>Employeer</Link>
                        </Nav>
                        <Nav className={this.state.activeNav === '/student' ? "active-navbar" : ""}>
                            <Link className="nav-link" to="/student" onClick={()=>this.addCssActive("/student")} >Student</Link>
                        </Nav>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav className={this.state.activeNav === '/signup' ? "active-navbar" : ""}>
                            <Link className="nav-link" to="/signup" onClick={()=>this.addCssActive("/signup")}>Sign Up</Link>
                        </Nav>
                        <Nav className={this.state.activeNav === '/signin' ? "active-navbar" : ""}>
                            <Link className="nav-link" to="/signin" onClick={()=>this.addCssActive("/signin")}>
                            Sign In
                            </Link>
                        </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default navigation;