import React from 'react';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function LandingGuest() {
  return (
      <Grid stackable columns={2}>
        <Grid.Column textAlign="center">
          <Segment>
            <h1>Diagnose your Illness</h1>
            <Button as={NavLink} exact to={{ pathname: "/SymptomSearch" }}>SYMPTOM CHECKER</Button>
          </Segment>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Segment>
            <h1>View Past Illnesses</h1>
            <button class="ui disabled button">ILLNESS RECORDER</button>
            <h2>You must have an account to access your record history.</h2>
          </Segment>
        </Grid.Column>
      </Grid>
  )
}

export default LandingGuest;