import React from 'react';
import {Row,Col,Container,Image,Button} from 'react-bootstrap';
import Images from '../img/img-icons.png';
import Icons from '../img/bg-sig.png';
// import AOS from 'aos';
import Holder from '../img/cmp-holder.png';
import '../style/body.css';


function Bodys() {
  return (
    <div className="Navbar">
     {/* Navbar BODY */}
   

    <Container>
        <Row>
        <Col>
{/* Image background right */}
 <Image src={Images} className="img-bg" alt="logo" height="250px" width="361px"/>;
 <Image src={Icons} className="img-Icons2" alt="logo" height="100px" width="255px"/>;
        </Col>
        {/* Scat Column  */}
        <Col>
        {/* Text Header */}
        <div className="header">
        <Image src={Icons} className="img-holder2" alt="logo" height="100px" width="255px"/>;
        <h1 className="header1">HEZ Company - UI kit Design</h1>
        <h1 className="header1">Startup and Colaboration Team</h1>
        <p className="txt-sub" data-aos="fade-up">Hez development is a company engaged in the field of design,
        <br/> especially in making design frameworks for other companies that 
        <br/> need our services with reliable experience</p>

        <Button color="primary" className="btn-btn">Demos Now</Button>

      </div>

        </Col>
        </Row>
        <Image src={Holder} className="img-icons3" alt="logo" height="180px" width="130%"/>;
    </Container>
       
  </div>
    
   );
}

export default Bodys;