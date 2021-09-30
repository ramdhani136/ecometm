import React from 'react';
import Header from '../Home/Header/Header';
require('./ContentViewItem.css');

function ContenViewItem() {

    const linkTokped = () => {
        window.open('https://www.tokopedia.com/archive-ptekatunggal-1630710285/stabil-stainless-8-cm-tapak-kecil');
        return null;
    }

    const linkWa = () => {
        window.open("https://api.whatsapp.com/send?phone=6289637428874&text=Pesan dari store.ekatunggal.com | Stabil Stainless 8 cm Tapak Kecil!");
        return null;
    }

    return (
        <>
            <Header />
            <div className="ContentViewContainer">
                <div className="ViewDesc">
                    <img src="https://images.tokopedia.net/img/cache/900/product-1/2020/2/4/7615310/7615310_5ccb1004-0400-4c4f-9081-24acf3ceead0_1728_1728.jpg" />
                    <div className="ViewDesInfo">
                        <div style={{ fontSize: '2em', fontFamily: 'calibri', color: '#141414' }}>Stabil Stainless 8 cm Tapak Kecil</div>
                        <div style={{ textDecoration: 'line-through #ddd', fontSize: '1.4em', fontFamily: 'calibri', color: '#ddd' }}>Rp.5.700</div>
                        <div style={{ fontSize: '1.8em', fontFamily: 'calibri', color: '#14246A', fontWeight: 'bold' }}>Rp.5.000</div>
                        <div style={{ fontSize: '1.4em', fontFamily: 'calibri', color: '141414', marginTop: '10px', marginBottom: '10px' }}>Satuan : PCS</div>
                        <div style={{ fontSize: '1.4em', fontFamily: 'calibri', color: '#666', }}>Tersedia di : Bogor, Surabaya, Semarang, Makassar , Manado</div>
                        <div style={{ fontSize: '1.4em', fontFamily: 'calibri', color: '#141414', marginBottom: '10px', marginTop: '10px' }}>Silahkan pilih link pembelian :</div>
                        <div style={{ backgroundColor: '#E74B2E', color: 'white', border: 'solid 1px #E74B2F', marginTop: '20px' }} className="LinkBeli">Shopee</div>
                        <div onClick={linkTokped} style={{ backgroundColor: '#3FAF48', color: 'white', border: 'solid 1px #3FAD48' }} className="LinkBeli">Tokopedia</div>
                        <div style={{ backgroundColor: '#D01047', color: 'white', border: 'solid 1px #D01048' }} className="LinkBeli">BukaLapak</div>
                        <div onClick={linkWa} style={{ backgroundColor: '#3CC0AE', color: 'white', border: 'solid 1px #3CC0AD' }} className="LinkBeli">WhatsApp</div>

                    </div>
                </div>

                <a href="https://api.whatsapp.com/send?phone=6289637428874&text=Pesan dari store.ekatunggal.com!" target="_blank">
                    <img style={{ cursor: 'pointer', width: '60px', height: '60px', position: 'fixed', right: 20, bottom: 30, borderRadius: '100%', boxShadow: '2px 2px 2px rgba(0,0,0,0.8)' }} src="https://www.freeiconspng.com/uploads/logo-whatsapp-png-transparent-background-8.png" />
                </a>
            </div>
        </>
    )
}

export default ContenViewItem
