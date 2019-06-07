import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,NavLink,
    Button,Form, FormGroup,Label,Input, Alert} from 'reactstrap';
import {connect} from "react-redux";
import {login} from "../../action/authAction";
import {clearErrors} from "../../action/errAction";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
             modal:false,
             msg:''
        }
    }
    componentDidUpdate(prevPros){
          const {error} = this.props;
          if(error !== prevPros.error){
              if(error.id === "LOGIN_FAIL"){
                    this.setState({
                        msg:error.msg.msg
                    })
              }
              else{
                   this.setState({
                       msg:''
                   })
                  
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
          const { email, password} = this.state;
        this.props.login({email, password});
       

    }

    render() {
        return (
            <div>
                    <NavLink onClick={()=>this.toggle()}>Login</NavLink>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={()=> this.toggle()}> Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                {this.state.msg ? (<Alert>{this.state.msg}</Alert>): null}
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Button color="dark" style={{marginTop: "2rem"}}>Login</Button>
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

export default connect(mapStateToProps,{login, clearErrors})(Register)