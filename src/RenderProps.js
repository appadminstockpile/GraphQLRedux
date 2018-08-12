import React, { Component, Fragment } from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import EQLayout from './EQLayout'
import Phone from './Phone'

class RenderProps extends Component {
  render() {
    return (
      <EQLayout>
        <Jumbotron>
          <h1 className='display-3'>An example of Render Props Pattern for component Re-Usability</h1>
          <p>Work in progress here</p>
        </Jumbotron>
        <Container>
          US Phone here
          <Phone text='Enter your phone number'
            label='Enter your phone number'
            pattern='^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$'
            dir='ltr'
            placeholder='999-999-9999'
            errorMessage='Please enter a valid phone'
            patternValid='Valid Phone'
            render={({ displayElement }) => (
           <div>{displayElement()}</div>
          )}>
          </Phone>
        </Container>
        <Container>
          Israel Phone Here
          <Phone text='הטלפון'
            label='הטלפון'
            pattern='/^0\d([\d]{0,1})([-]{0,1})\d{7}$/'
            dir='rtl'
            errorMessage='הזן טלפון חוקי'
            patternValid='טלפון תקף'
            render={({ displayElement }) => (
              <div>{displayElement()}</div>
          )}>
          </Phone>
        </Container>
        <Container>
          Very Loosy Phone Entry Here
          <Phone
            render={({ displayElement }) => (
              <Row>
                <Col>
                  <label for='phone-number'>Phone Number</label>
                </Col>
                <Col>
                  <input name='phone-number' type='text' />
                </Col>
              </Row>
          )}>
          </Phone>
        </Container>
      </EQLayout>
    )
  }
}

export default RenderProps
