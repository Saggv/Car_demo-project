import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import {connect} from "react-redux";
class Detail extends Component {
    render() {
        console.log(this.props.match.params.id);
        console.log(this.props.product);
        return (
            <div>
                 <h3 className="text-center mt-5"> Detail Product</h3>
                     {
                         this.props.product.map( item =>{
                               if(item._id === this.props.match.params.id){
                                    return(
                                        <div className="row mt-5" >
                                            <div className="col-md-7 ">
                                                <img src={item.image} width="100%" height="500px" alt="true" />
                                            </div>
                                            <div className="col-md-5 ">
                                                    <h4 className="text-center mb-2"> {item.name}</h4>
                                                    <hr/>
                                                    <label className="text_asset"> Price : </label> <b>${item.price}</b> <br/>
                                                    <hr/>
                                                    <label className="text_asset">Tăng Tốc</label> <b>{item.speed}</b> 
                                                     <hr/>
                                                     <label className="text_asset">Công Suât </label>  <b>{item.capacity} mã lực</b> 
                                                    <hr/>
                                                    <label className="text_asset">Tốc độ tối đa </label> <b>{item.maxspeed}km/h</b> 
                                                    <hr/>
                                                    <label className="text_asset">Khối Lượng</label> <b>{item.mass} kg</b> 
                                                    <hr/>
                                                    <label className="text_asset">Mô men xoắn</label> <b>1,475lb ft</b>
                                                    <hr/>
                                            </div>
                                        </div>
                                    )
                               }
                         }) 
                     }
            </div>
        );
    }
};

const mapStateToProps =(state)=>({
       product:state.product.products
})

export default connect(mapStateToProps, null)(Detail);