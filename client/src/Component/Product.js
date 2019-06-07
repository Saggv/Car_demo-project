import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink} from "react-router-dom";
import {getdata, deleteproduct} from '../action/productAction';
import {addToCollection} from '../action/assetAction';

class Product extends Component {
      componentDidMount=()=>{
            this.props.getdata()
      }
      to_slug =(str)=>{
          // Chuyển hết sang chữ thường
          str = str.toLowerCase();     
       
          // xóa dấu
          str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
          str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
          str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
          str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
          str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
          str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
          str = str.replace(/(đ)/g, 'd');
       
          // Xóa ký tự đặc biệt
          str = str.replace(/([^0-9a-z-\s])/g, '');
       
          // Xóa khoảng trắng thay bằng ký tự -
          str = str.replace(/(\s+)/g, '-');
       
          // xóa phần dự - ở đầu
          str = str.replace(/^-+/g, '');
       
          // xóa phần dư - ở cuối
          str = str.replace(/-+$/g, '');
       
          // return
          return str;
      }
      //deleteprocuc
      ondelete=(id)=>{
          this.props.deleteproduct(id);
      }
      addToCollection1=(item)=>{
           alert("them thanh comg");
           this.props.addToCollection(item)
      }

    render() {
           const product = this.props.product.products;
           const user = this.props.user;
           console.log(user.user.name);
           const admin ="Sáng";
        return (
            <div className="backgroun-product">
                    <h4 className="text-center mb-5 mt-5">Outstanding Super Cars</h4>
                    <h4 className="title text-right ">Lambogini</h4>
                    <hr/>
                    <div className="row">
                          {
                             product.map( item =>{
                                if(item.manufacture ==="lamborgini")  return(
                                <div className="col-md-6" key={item._id}>
                                        <div className="card " id="box">
                                            <NavLink to={'/detail/' +this.to_slug(item.name) +'.'+ item._id+'.html'}  className="boximage"> 
                                                <img className="card-img-top"  src={item.image} with="500px" height="400px" alt="trues"  />
                                                <div className="showbackground"> 
                                                  <h6 className="hehe">Max-Speed: {item.maxspeed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe">Speed: {item.speed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe"> Capacity: {item.capacity} </h6>
                                                  <hr/>
                                               </div>
                                            </NavLink>
                                             <div className="card-body text-center">
                                                <h4 className="card-title text-center">{item.name}</h4>
                                                <p className="card-text">Follow us on the Facebook to get more information....</p>
                                                 <button className="btn btn-success" onClick={()=>this.addToCollection1(item)}> Collection</button>
                                                 {
                                                     user.user.name==admin ?(<button className="btn btn-danger" onClick={()=>this.props.deleteproduct(item._id)}> Delete</button>) : null
                                                 }
                                            </div>
                                        </div>
                                </div>
                              )
                                 })
                          }
                    </div>
                    <h4 className="title text-left mt-5">Ferrari</h4>
                    <hr/>
                    <div className="row">
                          {
                             product.map( item =>{
                                if(item.manufacture ==="ferrari")  return(
                                <div className="col-md-6" key={item._id}>
                                        <div className="card " id="box">
                                            <NavLink to={'/detail/' +this.to_slug(item.name) +'.'+ item._id+'.html'} className="boximage"> 
                                                <img className="card-img-top"  src={item.image} with="500px" height="400px" alt="trues"  />
                                                <div className="showbackground"> 
                                                  <h6 className="hehe">Max-Speed: {item.maxspeed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe">Speed: {item.speed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe"> Capacity: {item.capacity} </h6>
                                                  <hr/>
                                               </div>
                                            </NavLink>
                                            <div className="card-body text-center">
                                                <h4 className="card-title text-center">{item.name}</h4>
                                                <p className="card-text">Follow us on the Facebook to get more information....</p>
                                                 <button className="btn btn-success" onClick={()=>this.addToCollection1(item)}> collection</button>
                                                 {
                                                     user.user.name===admin ?(<button className="btn btn-danger" onClick={()=>this.props.deleteproduct(item._id)}> Delete</button>) : null
                                                 }
                                            </div>
                                        </div>
                                </div>
                              )
                                 })
                          }
                    </div>
                    <h4 className="title text-right mt-5 ">Bugatti</h4>
                    <hr/>
                    <div className="row">
                          {
                             product.map( item =>{
                                if(item.manufacture ==="bugatti")  return(
                                <div className="col-md-6" key={item._id}>
                                        <div className="card " id="box">
                                            <NavLink to={'/detail/' +this.to_slug(item.name) +'.'+ item._id+'.html'} className="boximage"> 
                                                <img className="card-img-top"  src={item.image} with="500px" height="400px" alt="trues"  />
                                                <div className="showbackground"> 
                                                  <h6 className="hehe">Max-Speed: {item.maxspeed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe">Speed: {item.speed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe"> Capacity: {item.capacity} </h6>
                                                  <hr/>
                                               </div>
                                            </NavLink>
                                            <div className="card-body text-center">
                                                <h4 className="card-title text-center">{item.name}</h4>
                                                <p className="card-text">Follow us on the Facebook to get more information....</p>
                                                 <button className="btn btn-success" onClick={()=>this.addToCollection1(item)}> collection</button>
                                                 {
                                                     user.user.name===admin ?(<button className="btn btn-danger" onClick={()=>this.props.deleteproduct(item._id)}> Delete</button>) : null
                                                 }
                                            </div>
                                        </div>
                                </div>
                              )
                                 })
                          }
                    </div>

                    <h4 className="title text-left mt-5 ">Audi</h4>
                    <hr/>
                    <div className="row">
                          {
                             product.map( item =>{
                                if(item.manufacture ==="audi")  return(
                                <div className="col-md-6" key={item._id}>
                                        <div className="card " id="box">
                                            <NavLink to={'/detail/' +this.to_slug(item.name) +'.'+ item._id+'.html'} className="boximage"> 
                                                <img className="card-img-top"  src={item.image} with="500px" height="400px" alt="trues"  />
                                                <div className="showbackground"> 
                                                  <h6 className="hehe">Max-Speed: {item.maxspeed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe">Speed: {item.speed}</h6>
                                                  <hr/>
                                                  <h6 className="hehe"> Capacity: {item.capacity} </h6>
                                                  <hr/>
                                               </div>
                                            </NavLink>
                                            <div className="card-body text-center">
                                                <h4 className="card-title text-center">{item.name}</h4>
                                                <p className="card-text">Follow us on the Facebook to get more information....</p>
                                                 <button className="btn btn-success" onClick={()=>this.addToCollection1(item)}> collection</button>
                                                 {
                                                     user.user.name===admin ?(<button className="btn btn-danger" onClick={()=>this.props.deleteproduct(item._id)}> Delete</button>) : null
                                                 }
                                            </div>
                                        </div>
                                </div>
                              )
                                 })
                          }
                    </div>
                         
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    product: state.product,
    user: state.user
})




export default connect(mapStateToProps, {getdata, deleteproduct, addToCollection})(Product);