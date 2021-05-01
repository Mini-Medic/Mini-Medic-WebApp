import React from 'react';
import { Container, Grid, Button, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import '../landing/LandingGuest.css';
import Video from '../../../resource/Medic.mp4'

function LandingUser() {
  return (
      <div className='container'>
        <video src={Video} autoPlay loop muted />
        <div className='body'>
          <Grid stackable columns={2} className='gridClass'>
            <Grid.Column textAlign="center">
              <Segment>
                <h1>Diagnose your Illness</h1>
                <Button basic color='blue' as={NavLink} exact to={{ pathname: "/SymptomSearch" }}>SYMPTOM CHECKER</Button>
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment>
                <h1>View Past Illnesses</h1>
                <Button basic color='blue' as={NavLink} exact to={{ pathname: "/record" }}>Illness Record</Button>
              </Segment>
            </Grid.Column>
          </Grid>
          <Container className='description'>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <h2>Symptom Search and Doctor Finder</h2>
                  <div style={{ border: 'solid' }}/>
                  <p className='text'>Mini Medic offers users a way to self diagnose through inputting their symptoms. After receiving the symptoms, users can view a list of possible illness matches as well as information regarding them. Mini Medic also features a way for users to find doctors near them that meets their preferences.</p>
                </Grid.Column>
                <Grid.Column>
                  <h2>Illness Record</h2>
                  <div style={{ border: 'solid' }}/>
                  <p className='text'>Track and save previous illnesses through Mini Medic's Illness Record feature.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

      </div>

  )
}

export default LandingUser;