import { Container, Row, Col } from 'react-bootstrap';
import Faq from '../components/Faq';

const SKPages = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className='syarat-ketentuan min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Syarat & Ketentuan</h1>
              <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
          </Row>
          <Row>
            <Col className='pt-5'>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident.
            </p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>1. Lorem</h4>
              <p> Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>
              Lorem ipsum Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
          <Row>
            <Col className='py-3'>
              <h4 className='fw-bold'>2. lorem</h4>
              <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              <p>Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
              <p>Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </Col>
          </Row>
          <Row>
            <Col className='py-3'>
             <h4 className='fw-bold'>3. Lorem</h4>
             <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
             <p>Lorem ipsum</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Faq/>
    </div>
  )
}

export default SKPages