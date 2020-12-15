import React from 'react'
import {Card,
    CardContent,
    CardActions,
    Chip,
    Typography,
    Button} 
from '@material-ui/core'
import {makeStyles,withStyles} from '@material-ui/core/styles'

const myStyles = makeStyles({
    card : {
      marginBottom:20
    },
    CardContent:{
      paddingBottom:5
    },
    CardActions:{
      padding: 16
    }
  });
  
  const Category= withStyles({
    root :{
      marginTop:10,
     marginBottom:10
  
    }
  })(Chip)
  
export default function JCard({joke,likeJoke,unlikeJoke,index }){
    const classes = myStyles();
    return(

<Card key={joke.id} className={classes.card} id={`joke-${index}`}>
<CardContent  className={classes.CardContent}>
{joke.categories.length > 0 ? (
  joke.categories.map((cat) => (
    <Category label={cat} key={cat} variant='outlined'style={{background:'#1e7984',color:'#fff'}}/>
    
  ))
): (<Category label = 'Uncategorized' variant = 'outlined' style={{background:'#7e7c71'}}/> )}
  <Typography>
    {joke.joke}
  </Typography>
</CardContent>
<CardActions className={classes.cardActions}>
  <Button variant="contained" color="primary"style={{background:'#0481d9'}} onClick= {(e) =>{ likeJoke(joke.id)}}>Like</Button>
  <Button variant="contained" color="primary" style={{background:'#908787'}} onClick= {() => unlikeJoke(joke.id)}>Unlike</Button>
</CardActions>
</Card>
    )
}