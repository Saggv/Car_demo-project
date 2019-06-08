import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAsset,deleteAsset} from '../action/assetAction';
import {Alert} from 'reactstrap';
class Collection extends Component {
      constructor(props) {
          super(props);
          this.state={
              tong:'',
              isshow: false
          }
      }
      
    componentDidMount(){
        this.props.getAsset()
    }
    AllPrice = async()=>{
        let tong=0;
          await this.props.asset.asset.forEach( item =>tong += item.price);
         
         this.setState({
             tong: tong,
             isshow: !this.state.isshow
         })
    }
    
    render() {
        const {asset} = this.props.asset;
        console.log(asset);
        const leng =asset.length;
        return (
            <div>
                <h4 className="text-center title"  > Bộ Sưu Tập Của Bạn </h4>
                <div className="row" id="box_wrapasset">
                {
                    asset.map( item =>{
                        return(
                            
                            <div className="col-md-12 asset_box" key={item._id}>
                                <img src={item.image} />
                                <div className="background_imgasset">
                                    <div className="detail_asset">
                                             {
                                                 this.state.isshow ?(<Alert>Với Tổng số xe: {leng} trị giá: ${this.state.tong}</Alert>) : ''
                                             }
                                             <h4 className="text-center title"  >{item.name}</h4> <br/>
                                            <label className="text_asset"> Price : </label> <b>${item.price}</b> <br/>
                                            <hr/>
                                            <label className="text_asset">Tăng Tốc</label> <b>{item.speed}s</b> <br/>
                                            <hr/>
                                            <label className="text_asset">Công Suât </label>  <b>{item.capacity} mã lực</b> <br/>
                                            <hr/>
                                            <label className="text_asset">Tốc độ tối đa </label> <b>{item.maxspeed}km/h</b> <br/>
                                            <hr/>
                                            <label className="text_asset">Khối Lượng</label> <b>{item.mass} kg</b>  <br/>
                                            <hr/>
                                            <label className="text_asset"> <button className="btn btn-danger pl-5 pr-5" onClick={()=>this.props.deleteAsset(item._id)}> Clear</button></label>
                                            <label className="text_asset"> <button className="btn btn-info pl-5 pr-5" onClick={()=>this.AllPrice()}> Trị Giá</button></label>
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
const mapStateToProps=(state)=>({
    asset: state.asset
})

export default connect(mapStateToProps, {getAsset,deleteAsset})(Collection);