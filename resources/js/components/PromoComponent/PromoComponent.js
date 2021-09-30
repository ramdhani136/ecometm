import React from 'react'
import ListPromoComponent from '../ListPromoComponent/ListPromoComponent';
require('./PromoComponent.css');


function PromoComponent() {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 20, width: '100%', height: 'auto', paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#EBECF2'
        }}>
            <div className="promoLeft">
                <h2 style={{ color: '#141414', fontSize: '2em', marginBottom: '80px' }}>Promo Oktober</h2>
                <h3 style={{ fontSize: '24px', fontSize: '1.5em' }}>Diskon tiap hari sampai 70%!</h3>
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
