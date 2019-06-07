import React, { Component } from 'react';
import Detail_Home from './Detail_Home';

class Home extends Component {
    render() {
        return (
            <div>
                  <div className="home-header"> 
                         
                  </div>
                  <Detail_Home hinhanh={"https://car-images.bauersecure.com/pagefiles/85065/050_sc18.jpg"} hang={"Lamborghini"} nguoithanhlap={"Ferruccio Lamborghini"} sanpham={"Siêu xe thể thao"} trusochinh={"Sant'Agata Bolognese, Bologna"}></Detail_Home>
                  <Detail_Home hinhanh={"http://xevathethao.vn/wp-content/uploads/2017/02/bmw-i8-spyder-bi-vach-mat-khi-chay-thu-tren-duong-3.jpg"} doanhthu={"97,48 tỷ EUR (2018)"} hang={"BMW"} nguoithanhlap={"Franz Josef Popp"} sanpham={"Automobiles, motorcycles, bicycles"} trusochinh={"München, Germany"}></Detail_Home>
                  <Detail_Home hinhanh={"https://img.gta5-mods.com/q95/images/2015-ferrari-laferrari-hq-autospoiler/0d09b6-sidelarge.png"} doanhthu={"3,417 tỷ EUR (2017)"} hang={"Ferrari"} nguoithanhlap={"Enzo Ferrari"} sanpham={"Siêu xe thể thao"} trusochinh={"Maranello, Italy"}></Detail_Home>
                  <Detail_Home hinhanh={"https://assets.bugatti.com/fileadmin/_processed_/sei/p245/se-image-472895835edf91a5b24d3974a05db7c5.jpg"} doanhthu={"3,417 tỷ EUR (2017)"} hang={"Bugatti"} nguoithanhlap={"Ettore Bugatti"} sanpham={"Ô tô, thiết bị hàng không"} trusochinh={"Molsheim, Pháp"}></Detail_Home>
                  <Detail_Home hinhanh={"https://avatars.mds.yandex.net/get-pdb/33827/5763fd00-ade0-4c3d-b96f-67858d0f3c30/orig"} doanhthu={" unknown"} hang={"Lada là thương hiệu của AvtoVAZ"} nguoithanhlap={"một nhà sản xuất ô tô Nga"} sanpham={"Ô tô, Siêu xe thể thao"} trusochinh={"Russian"}></Detail_Home>
           
            </div>
        );
    }
}

export default Home;