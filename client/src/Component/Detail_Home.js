import React, { Component } from 'react';

class Detail_Home extends Component {
    render() {
        return (
            <div>
                <div className="home-conten">
                    <div className="row">
                        <div className="col-md-12" id="home-box">
                                <img src={this.props.hinhanh} alt="trues" width="100%" height="700px"></img>
                                <div className="home-content">
                                <div className="detail_home">
                                         <h1 className=""> {this.props.hang}</h1> <br/>
                                        <hr/>
                                        <label className="text_asset">Người sáng lập</label> <b>{this.props.nguoithanhlap} </b> <br/>
                                        <hr/>
                                        <label className="text_asset">Sản phẩm </label>  <b>{this.props.sanpham}</b> <br/>
                                        <hr/>
                                        <label className="text_asset">Trụ sở chính</label> <b>{this.props.trusochinh}</b> <br/>
                                        <hr/>
                                        <label className="text_asset">Doanh thu</label> <b> {this.props.doanhthu}</b>  <br/>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}

export default Detail_Home;