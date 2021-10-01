import React from 'react'
import ListPromoComponent from '../ListPromoComponent/ListPromoComponent';
require('./PromoComponent.css');


function PromoComponent() {
    return (
        <div style={{
            borderTop: 'solid 1px #fdefef', borderBottom: 'solid 1px #fdefef', display: 'flex', alignItems: 'center', marginTop: -7, marginBottom: 20, width: '100 % ', height: 'auto', paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#fdf9f9'
        }}>
            <div className="promoLeft">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ flex: 1, color: '#141414', fontSize: '2.4em', marginTop: -8, }}>Promo Oktober</h2>
                    <img style={{ objectFit: 'cover', width: '95px', height: '100px', marginTop: -35, }} src="https://www.ekatunggal.com/wp-content/uploads/2020/11/logoslider01.png" />
                </div>
                <h3 style={{ fontSize: '24px', fontSize: '1.5em' }}>Diskon tiap hari sampai 30%!</h3>
                <div style={{ fontSize: '1.1em' }}>Mau nikmatin Potongan Harga?
                    Yuk Request dulu Kuponmu!</div>
                <div style={{ backgroundColor: '#fff', width: 'auto', paddingTop: '13px', paddingBottom: '13px', marginTop: 20, textAlign: 'center', color: '#de0000', borderRadius: 3, cursor: 'pointer', border: 'solid 2px #de0000', fontWeight: 'bold' }}>Minta Kupon Dong</div>
            </div>
            <div className="promoRight">
                <div style={{ width: '100%', height: '370px', display: 'flex', flexDirection: 'row', }}>
                    <ListPromoComponent img="https://etm.digitalasiasolusindo.com/files/ACK%20STABIL%20KAYU%20KANSAS.jpg" name="ACK STABIL KAYU KANSAS" price="Rp.5.000" prevprice="Rp.5.700" />
                    <ListPromoComponent img="https://etm.digitalasiasolusindo.com/files/ACK PLAT RING KOTAK KECIL 1,4.jpg" name="ACK PLAT RING KOTAK 1,4" price="Rp.6.500" prevprice="Rp.8.700" />
                    <ListPromoComponent img="https://etm.digitalasiasolusindo.com/files/KWT%20PER%20RO%20-%20Copy.jpg" name="KWT PER RO" price="Rp.120.000" prevprice="Rp.130.000" />
                    <ListPromoComponent img="https://etm.digitalasiasolusindo.com/files/KWT%20ULIR%201,4%20MM.jpg" name="KWT ULIR 1.4 MM (08)" price="Rp.85.000" prevprice="Rp.90.0000" />

                </div>
            </div>
        </div >
    )
}

export default PromoComponent
