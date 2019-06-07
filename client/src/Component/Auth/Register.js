import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,NavLink,
    Button,Form, FormGroup,Label,Input, Alert} from 'reactstrap';
import {connect} from "react-redux";
import {register} from "../../action/authAction";
import {clearErrors} from '../../action/errAction';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
             modal:false,
             msg: null,
        }
    }
    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if( error !== prevProps.error){
            //check for reegister ERROR;
            if(error.id ==='REGISTER_FAIL'){
                this.setState( { msg: error.msg.msg})
            }else{
                this.setState({msg: null})
            }
            
        }
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }    

    toggle=()=>{
         this.props.clearErrors();
         this.setState({
             modal: !this.state.modal
         })
    }
    onChange=(e)=>{
         this.setState({
               [e.target.name]:e.target.value
         })
    }
    onSubmit=(e)=>{
          e.preventDefault();
          const {name, email, password} = this.state;
        this.props.register({name,email, password});

    }

    render() {
        return (
            <div>
                    <NavLink onClick={()=>this.toggle()}>Regsiter</NavLink>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={()=> this.toggle()}> Register</ModalHeader>
                        <ModalBody>
                          {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>) : null}
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Button color="dark" style={{marginTop: "2rem"}}>Register</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>
        );
    }
}
const mapStateToProps=(state)=>({
     user:state.user,
     error: state.error
})

export default connect(mapStateToProps,{register,clearErrors})(Register)