import React,{Component} from 'react';
import {Container,Card,Form,Button,InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class form_regis_jobseeker extends Component{
    constructor(){
        super()
        this.state={
            visible:false
        }
    }
    visible(){
        this.setState({visible:!this.state.visible})
    }

    handleFormVisible = ()=>{
        this.props.onShow()
    }

    render(){
        return(
            <div className="login-container">
                <Container style={{maxWidth:384,paddingTop:40,paddingBottom:40}}>
                    <h2 className="heading-title-login">Register a new member</h2>
                    <Card className="container-form-login">
                        <Card.Body>
                            <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control className="auth-form" type="email" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                <Form.Control className="auth-form input-visible" 
                                    type={this.state.visible ? "text" : "password"}placeholder="Password" />
                                <InputGroup.Prepend >
                                    <InputGroup.Text 
                                    className="content-visible"
                                    onClick={this.visible.bind(this)}
                                    id="inputGroupPrepend">
                                        {this.state.visible ? <i className="fas fa-eye-slash"></i> : 
                                        <i className="fas fa-eye "></i>}
                                        
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                            <p className="text-right forgot-pass"><Link 
                            className="no-text-decor"
                            to="/forgotpass">Forgot password?</Link></p>
                            <Button block className="button-auth" onClick={this.handleFormVisible.bind(this)}>Kembali</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container> 
            </div>
            
        );
    }
}

export default form_regis_jobseeker;