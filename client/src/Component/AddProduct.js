import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,NavLink,
    Button,Form, FormGroup,Label,Input} from 'reactstrap';

import {connect} from "react-redux";
import {addproduct} from "../action/productAction";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
             modal:false
        }
    }
    toggle=()=>{
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
         const newproduct ={
               name: this.state.name,
               price: this.state.price,
               image: this.state.image,
               description: this.state.description,
               speed: this.state.speed,
               capacity: this.state.capacity,
               maxspeed: this.state.maxspeed,
               mass: this.state.mass,
               manufacture: this.state.manufacture
         };
        this.props.addproduct(newproduct);

          this.toggle();
    }

    render() {
        return (
            <div>
                    <NavLink onClick={()=>this.toggle()}>Product+</NavLink>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={()=> this.toggle()}> Add product</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="price">Price</Label>
                                    <Input type="text" name="price" id="price" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="image">Image</Label>
                                    <Input type="text" name="image" id="image" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="description">Description</Label>
                                    <Input type="text" name="description" id="description" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="speed">Speed</Label>
                                    <Input type="text" name="speed" id="speed" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="capacity">Capacity</Label>
                                    <Input type="text" name="capacity" id="capacity" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="maxspeed">Max-Speed</Label>
                                    <Input type="text" name="maxspeed" id="maxspedd" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="mass">Mass</Label>
                                    <Input type="text" name="mass" id="mass" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Label for="manufacture">Manufacture</Label>
                                    <Input type="text" name="manufacture" id="manufacture" onChange={(e)=>this.onChange(e)} ></Input>
                                    <Button color="dark" className="btn btn-block btn-primary" style={{marginTop: "2rem"}}>Add</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
     product: state.product
})

export default connect(mapStateToProps,{addproduct})(AddProduct);