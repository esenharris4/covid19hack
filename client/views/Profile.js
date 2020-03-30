import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ScoreCard from '../components/ScoreCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default class Profile extends Component {

  render () {
      return (
         <React.Fragment>
            <Container maxWidth="sm">
               <div>
                  <h1>Your Monday activity</h1>
               </div>
               <Grid container spacing={2}>
                  <Grid item xs={6}>
                     <ScoreCard
                        title="Friends you're seeing"
                        score="120"
                        description="This is a good level of social activity."
                        color="#00E676"
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <ScoreCard
                        title="Things you're doing"
                        score="400"
                        description="This is a high level of social activity."
                        color="#C62828"
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <ScoreCard
                        title="Places you're going"
                        score="250"
                        description="This is a good level of social activity."
                        color="#FF8F00"
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <ScoreCard
                        title="Total score"
                        score="900"
                        description="This is a dangerous social activity level! We recommend modifying your activities for today!"
                        color="#FF8F00"
                     />
                  </Grid>
               </Grid>
            </Container>
        </React.Fragment>
      )
   }
}
