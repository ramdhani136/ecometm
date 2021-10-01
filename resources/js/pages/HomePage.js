import React from 'react'
import { Helmet } from 'react-helmet'

import Banner from '../components/organism/Banner'
import Header from '../components/organism/Header/Header'
import PromoComponent from '../components/organism/PromoComponent/PromoComponent'
import ContentCategory from '../components/organism/ContentCategory/ContentCategory'

function HomePage() {

    const itemAcc = [{
        name: 'ACC BED RESLETING KEPALA YKK HITAM',
        img: 'https://etm.digitalasiasolusindo.com/files/ACC%20BED%20RESLETING%20KEPALA%20YKK%20HITAM.jpg',
        price: 'Rp.1.200',
        star: '4.4',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'ACC BED RESLETING KEPALA PAROT PUTIH',
        img: 'https://etm.digitalasiasolusindo.com/files/ACC%20BED%20RESLETING%20KEPALA%20PAROT%20PUTIH.jpg',
        price: 'Rp.1.100',
        star: '5',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'ACC BED PLASTIK SUDUT PUTIH',
        img: 'https://etm.digitalasiasolusindo.com/files/ACC%20BED%20PLASTIK%20SUDUT%20PUTIH.jpg',
        price: 'Rp.3.000',
        star: '3.6',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'ACC BED RESLETING BADAN YKK HITAM',
        img: 'https://etm.digitalasiasolusindo.com/files/ACC%20BED%20RESLETING%20BADAN%20YKK%20HITAM.jpg',
        price: 'Rp.8.000',
        star: '4.6',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'ACC BED LOBANG ANGIN PUTIH CREAM',
        img: 'https://etm.digitalasiasolusindo.com/files/ACC%20BED%20LOBANG%20ANGIN%20PUTIH%20CREAM.jpg',
        price: 'Rp.3.500',
        star: '4.6',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }]

    const kp = [{
        name: 'KP SDY SATEN MERAH TUA 0739',
        img: 'https://etm.digitalasiasolusindo.com/files/KP%20SDY%20SATEN%20MERAH%20TUA%200739.jpg',
        price: 'Rp.15.000',
        star: '4.4',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'KP CN PONGE BOLA RM 1807',
        img: 'https://etm.digitalasiasolusindo.com/files/KP%20CN%20PONGE%20BOLA%20RM%201807.jpg',
        price: 'Rp.13.000',
        star: '5',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'KP CN PONGE BONEKA PINK 2782',
        img: 'https://etm.digitalasiasolusindo.com/files/KP%20CN%20PONGE%20BONEKA%20PINK%202782.jpg',
        price: 'Rp.13.000',
        star: '3.6',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'KP JKT LILY 3D (03BTE) 91002251',
        img: 'https://etm.digitalasiasolusindo.com/files/KP%20JKT%20LILY%203D%20(03BTE)%20910022.jpg',
        price: 'Rp.13.000',
        star: '4.6',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }, {
        name: 'KP JKT LILY 3D (03BTE) 710061',
        img: 'https://etm.digitalasiasolusindo.com/files/KP%20JKT%20LILY%203D%20(03BTE)%20710061.jpg',
        price: 'Rp.13.500',
        star: '4.6',
        kota: 'Bogor, Surabaya, Semarang, Makassar'
    }]

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Header />
            <div style={{ width: '100%', marginTop: 15 }}>
                {/* <Banner /> */}
                <PromoComponent />
                <ContentCategory name="Accessories" data={itemAcc} />
                <ContentCategory name="Kain Polos" data={kp} />
            </div>
            <a href="https://api.whatsapp.com/send?phone=6289637428874&text=Pesan dari store.ekatunggal.com!" target="_blank">
                <img style={{ objectFit: 'contain', cursor: 'pointer', width: '200px', height: '80px', position: 'fixed', right: 5, bottom: 20, zIndex: 100 }} src="https://homeliftcraft.co.za/wp-content/uploads/2019/04/Chat-with-us-on-Whatsapp.png?w=640" />
            </a>
        </div>
    )
}

export default HomePage
