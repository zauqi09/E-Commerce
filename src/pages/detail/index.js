import React, { Component } from 'react';
import {Image,Container,Row,Col,Card,Button} from "react-bootstrap"


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
            <>
                <Container fluid>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} style={{marginTop: 15}}>
                        <h4>MA HUATENG & TENCENT Sebuah Biografi Tentang Bisnis dan Kehidupan</h4>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <h6>Oleh Leng Hiu</h6>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <hr></hr>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={1}></Col>
                    <Col sm={3}>
                        <Image style={{width:300, height:400}}src={require('./Huang.jpg')} />
                    </Col>
                    <Col sm={7}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Detail</Card.Title>
                            
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan="3">Bahasa</td>
                                    <td>:</td>
                                    <td>Indonesian</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Negara</td>
                                    <td>:</td>
                                    <td>Indonesi</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Penerbit</td>
                                    <td>:</td>
                                    <td>Elex Media Komputindo</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Penulis</td>
                                    <td>:</td>
                                    <td>Leng Hiu</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Jumlah halaman</td>
                                    <td>:</td>
                                    <td>182</td>
                                </tr>
                                </tbody>
                            </table><p></p>

                            <Card.Title>Deskripsi</Card.Title>
                            <Card.Text style={{textAlign: 'justify'}}> 
                                Tanggal rilis: 28 October 2020.
                                Pada tahun 1998, Ma Huateng salah satu pendiri Tencent Inc., 
                                memulai perusahaan dengan perangkat pesan instan QQ yang menjadi hit 
                                besar di China. Di bawah kepemimpinan Ma, Tencent telah bergerak bukan 
                                hanya di pesan instan tetapi juga portal web, jejaring sosial, game online 
                                multi-player, dan e-commerce, menjadikan perusahaan ini sebagai pusat 
                                penggerak Internet dan merek nomor satu di China. Ma sendiri dipuji sebagai 
                                salah satu orang paling berpengaruh di dunia oleh Time Magazine pada tahun 
                                2004. Buku ini membahas tentang awal-mula, pertumbuhan, dan pengaruh Ma dan 
                                Tencent yang luar biasa, dikenal karena pemikiran dan pendekatan inovatif 
                                mereka terhadap teknologi dan bisnis. Kebangkitan dan pengaruh ekonomi China
                                telah menjadi salah satu perkembangan paling signifikan dalam ekonomi global 
                                akhir-akhir ini. Seri “China’s Disruptors” menelisik dan menjabarkan secara 
                                gamblang kontribusi utama terhadap perkembangan yang dilakukan oleh pengusaha 
                                dan perusahaan swasta terkemuka China ini.
                            </Card.Text>
                            <h3>Harga : Rp. 1000
                            <Button variant="success" style={{marginLeft: 400}}>Buy </Button></h3>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
               
                </Container>
            </>
         );
    }
}
 
export default Detail;