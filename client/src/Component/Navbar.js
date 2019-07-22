import React, { Component,Fragment } from 'react';
import {NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
   } from 'reactstrap';
import AddProduct from "./AddProduct";
import Register from "./Auth/Register";
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import {connect} from "react-redux";
import Collection from "./Collection";

class Navbarvigation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    componentDidMount(){
        const {user} = this.props
        console.log(" value did  "+user.isAuth);
        console.log(typeof("kieu du lieu"+user.isAuth));
 
         const authLink=(
             <Fragment>
                <NavItem>
                     <span className="navbar-text mr-3">
                          <strong>{ user.user ? `${user.user.name}` : 'Sáng'}</strong>
                     </span>
                </NavItem>
                 <NavItem>
                     <AddProduct></AddProduct>
                 </NavItem>
                 <NavItem>
                     <NavLink to='/collection' activeClassName="selected" className="nav-link"> Collection</NavLink>
                 </NavItem>
                <NavItem>
                     <Logout></Logout>
                </NavItem>               
             </Fragment>
         )
           const gustLink=(
               <Fragment>
                   <NavItem>
                       <Register></Register>
                   </NavItem>  
                   <NavItem>
                       <Login></Login>
                   </NavItem>
               </Fragment>             
           )
        if( user.isAuth === "true"){
            return authLink;
        }
        if(user.isAuth === "false" || user.isAuth ===null){
            return gustLink;
        }
    }
 

    render() {        
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavLink to='/' className="nav-link">SAGVV</NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                              <NavLink to='/products' activeClassName="selected" className="nav-link"> Product</NavLink>
                            </NavItem> 
                            <Fragment>
                            
                                {
                                   this.componentDidMount()
                                }

                          </Fragment>
                        </Nav>
                    </Collapse>
               </Navbar>                                 
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
         user: state.user
})

export default connect(mapStateToProps)(Navbarvigation);