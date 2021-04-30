import React from 'react';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Video from '../../../resource/Medic.mp4'

function LandingUser() {
  return (
      <div className='container'>
        <video src={Video} autoPlay loop muted />
        <div className='body'>
          <Grid stackable columns={2}>
            <Grid.Column textAlign="center" >
              <Segment>
                <h1>Diagnose your Illness</h1>
                <Button basic color='blue' as={NavLink} exact to={{ pathname: "/SymptomSearch" }}>SYMPTOM CHECKER</Button>
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment>
                <h1>View Past Illnesses</h1>
                <Button basic color='blue' as={NavLink} exact to={{ pathname: "/record" }}>ILLNESS RECORD</Button>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>

  )
}

export default LandingUser;