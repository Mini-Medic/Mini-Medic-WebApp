import React from 'react';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function LandingUser() {
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
            <Button as={NavLink} exact to={{ pathname: "/record" }}>ILLNESS RECORD</Button>
          </Segment>
        </Grid.Column>
      </Grid>
  )
}

export default LandingUser;