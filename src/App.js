import React from 'react';
import './fontello/css/fontello.css';
import './App.css';
import "animate.css/animate.min.css";
import Grid from './components/Grid';
import Col from './components/Col';
import Row from './components/Row';
import logo from './assets/logo.svg';
import mini_logo from './assets/mini_logo.svg';
import Button from './components/Button';
import Spacer from './components/Spacer';
import InnerRow from './components/InnerRow';
import TextCol from './components/TextCol';
import vcard from './vcard.vcf';
import ScrollAnimation from 'react-animate-on-scroll';



function App() {

  return (
    <Grid>
    <Row>

      <Col size={2} collapse="xs"></Col>

  <Col className="main_col" size={4}>



        <Row>

        <img alt="logo" className="logo" src={logo}/>

        </Row>



        <Spacer height={5} />

        <Row padding={"0 10% 0 10%"}>

      <Col size={1}><a className="button_link" href={vcard} target="_blank" rel="noopener noreferrer">
      <ScrollAnimation duration={6} animateIn="fadeIn">
        <Button className="button">
          <i className="icon-user-add icon"/>
        </Button>
        </ScrollAnimation>
        </a></Col>



      <Col size={1}><a className="icon-mail icon" href="mailto:info@roba-con.de" target="_blank" rel="noopener noreferrer">
      <ScrollAnimation duration={4} animateIn="fadeIn">
        <Button className="button">
          <i className="icon-mail-alt icon"/>
        </Button>
        </ScrollAnimation>
        </a></Col>

        <Col size={1}><a className="icon-mail icon" href="https://goo.gl/maps/FFRrxa2TyPpVLdv36" target="_blank" rel="noopener noreferrer">
        <ScrollAnimation duration={2} animateIn="fadeIn">
          <Button className="button">
            <i className="icon-location icon"/>
          </Button>
          </ScrollAnimation>
          </a></Col>

  </Row>

{/* here's where the header ends & the content grows */}
<ScrollAnimation duration={2} animateIn="fadeIn">
        <Row height={20}><Col className="zusatz" size={1}>Beratung für Einrichtungen der Pflege- und Sozialwirtschaft</Col></Row>
        </ScrollAnimation>
{/* Firmbrand */}
<ScrollAnimation duration={2} animateIn="fadeIn">
<InnerRow>
          <Col size={1}><i className="icon-briefcase icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>ROBA-CON</Col>
            </Row>
            <Row>
              <Col size={1}><a className="button_link" href="tel:+492619623461-0">+49 (261) 9623461-0</a></Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>

        </ScrollAnimation>

        <Spacer height={5} />
     <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-mail-alt icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="mailto:info@roba-con.de">info@roba-con.de</a></Col>
            </Row>
            <Row>
              <Col size={1}>E-Mail</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>


        <Spacer height={10} />
    
    <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-user icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>Olaf Roßbach</Col>
            </Row>
            <Row>
              <Col size={1}>Betriebswirt (VWA)</Col>
            </Row>
             <Row>
              <Col size={1}>Geschäftsführender Gesellschafter</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={5} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-phone icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="tel:+49(261)96234611">+49 (261) 9623461-1</a></Col>
            </Row>
            <Row>
              <Col size={1}>Telefon</Col>
            </Row>
            
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

           <Spacer height={5} />
     <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-mail-alt icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="mailto:orossbach@roba-con.de">orossbach@roba-con.de</a></Col>
            </Row>
            <Row>
              <Col size={1}>E-Mail</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={10} />


        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-user icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>André Schäfer</Col>
            </Row>
            <Row>
              <Col size={1}></Col>
            </Row>

          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={5} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-phone icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="tel:+49(261)9623461-2">+49 (261) 9623461-2</a></Col>
            </Row>
            <Row>
              <Col size={1}>Telefon</Col>
            </Row>
            
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

             <Spacer height={5} />
     <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-mail-alt icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="mailto:aschaefer@roba-con.de">aschaefer@roba-con.de</a></Col>
            </Row>
            <Row>
              <Col size={1}>E-Mail</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={10} />
    
    <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-user icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>Alice Roßbach</Col>
            </Row>
            <Row>
              <Col size={1}>Geschäftsführende Gesellschafterin</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={5} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-phone icon"></i></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="tel:+49(261)96234610">+49 (261) 9623461-0</a></Col>
            </Row>
            <Row>
              <Col size={1}>Telefon</Col>
            </Row>
          
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>
          <Spacer height={5} />
     <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-mail-alt icon"/></Col>
          <TextCol size={6}>
             <Row>
              <Col size={1}><a className="button_link" href="mailto:arossbach@roba-con.de">arossbach@roba-con.de</a></Col>
            </Row>
            <Row>
              <Col size={1}>E-Mail</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={10} />

        

       
        <InnerRow><Col className="minilogo" size={1}><img className="minilogo" width="10%" src={mini_logo} alt="bildmarke robacon" /></Col></InnerRow>

  </Col>

      <Col size={2} collapse="xs"></Col>
</Row>
</Grid>
  );
}

export default App;
