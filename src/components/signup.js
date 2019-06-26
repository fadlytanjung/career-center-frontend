import React,{Component} from 'react';
import {Container,Card,Button,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FormJobseeker from './form_regis_jobseeker';
import FormEmployeer from './form_regis_employeer';

class signup extends Component{
    constructor(){
        super()
        this.state={
            visible:false,
            page:"",

        }
    }
    visible(){
        this.setState({visible:!this.state.visible})
    }
    formJobseeker(){
        let query = this.props.location.search
        if(query==="?reg_code=jobseeker"){
            this.props.history.push('/signup')
        }else{
            this.props.history.push('/signup?reg_code=jobseeker')
        }
    }

    formEmployeer(){
        let query = this.props.location.search
        if(query==="?reg_code=employeer"){
            this.props.history.push('/signup')
        }else{
            this.props.history.push('/signup?reg_code=employeer')
        }
    }
    componentDidMount(){
        let query = this.props.location.search
        if(query==="?reg_code=jobseeker"){
            this.setState({page:"jobseeker"})
        }else if(query==="?reg_code=employeer"){
            this.setState({page:"employeer"})
        }else{
            this.props.history.push('/signup')
        }
        
    }
    componentWillReceiveProps(prev){
        let query = prev.history.location.search
        if(query==="?reg_code=jobseeker"){
            this.setState({page:"jobseeker"})
        }else if(query==="?reg_code=employeer"){
            this.setState({page:"employeer"})
        }else{
            this.setState({page:""})
        }  

    }
    componentDidUpdate(){
        
    }
    render(){
        
        return(
            
            <div className="login-container">
                {this.state.page === "jobseeker" ? <FormJobseeker onShow={this.formJobseeker.bind(this)} />:
                (this.state.page === "employeer" ? <FormEmployeer onShow={this.formEmployeer.bind(this)} />:
                    <Container style={{maxWidth:992,paddingTop:40,paddingBottom:40}}>
                    <h2 className="heading-title-login">We're glad you're here</h2>
                    <p className="isAccount">Already have an a Account? <Link 
                        className="no-text-decor"
                        to="/signin">Sign in</Link></p>
                <Row style={{marginTop:40}}>
                    <Col className="text-center" md={6} style={{marginBottom:20}}>
                        <Card className="container-form-register">
                            <Card.Body>
                                <h2 className="heading-title-register">I am looking for work</h2>
                                <p className="info-heading-register">Create a <b><i>jobseeker</i></b> account </p>
                                <Button className="button-regis" block onClick={this.formJobseeker.bind(this)}>
                                START FOR LOOKING JOBS
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center" md={6}>
                        <Card className="container-form-register">
                            <Card.Body>
                                <h2 className="heading-title-register">I am looking to hire</h2>
                                <p className="info-heading-register">Create a <b><i>recruiter</i></b> account </p>
                                
                                <Button className="button-auth" block  onClick={this.formEmployeer.bind(this)}>START TO HIRE</Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container> 
                )}
            </div>
            
        );
    }
}

export default signup;