import React,{useEffect,useState} from 'react';
import {AppBar,Badge,
  CssBaseline,
  Container, CircularProgress,Typography,TextField,Tab,Tabs,Chip,FormControlLabel,Checkbox, Button} from '@material-ui/core';
import {makeStyles,withStyles} from '@material-ui/core/styles'
import JCard from './Card';


const myStyles=makeStyles({
  form: {
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    '& > *':{
      margin:20,
      width:'25ch',
    },
    tab: {
      '&:hover': {
        background: '#efefef'
      }
    }
  },
  

});
function Spinner(){
  return (
    <div style={{textAlign:'center',padding:'2rem',color:'#1c1818'}}>
      <  CircularProgress  />
    </div>
  )
}

function App() {
  const [jokes,setJokes] =useState([]);
  const [jokeToShow, setJokesToShow] = useState([]);
  const [categories,setCategories] = useState([]);
  const [filterCategories,setFilterCategories] = useState([]);


 
  const [likedJokes,setLikedJokes]= useState([]);
  const [currentTab,setCurrentTab] = useState(0);
  const [firstName,setFirstName] = useState ('Chuck');
  const [lastName,setLastName] = useState ('Norris');


  const [loading,setLoading] =useState(false);
  const classes = myStyles();
  


  useEffect( () => {
    setLoading(true)
    fetchAndSetJokes()
    fetch('https://api.icndb.com/categories').
    then( res => res.json()).then(res =>{
      setCategories(res.value);
      setFilterCategories(res.value)
      setLoading(false)
    })
    .catch(err   => console.log(err))
  },[]);

const fetchAndSetJokes = ()=>{
  fetch( `https://api.icndb.com/jokes?firstName=${firstName}&lastName=${lastName}`).then(
    (res) => res.json()
   ).then((res) =>{
     console.log(res);
     setJokes(res.value);
     setJokesToShow(res.value.slice(0,10));
     setLoading(false)
  })
   .catch((err) => console.log(err));
}

      const likeJoke = (id) => {
      if(likedJokes.find(j => j.id ===id)) return
      const likedJoke = jokes.find(j => j.id ===id);
      setLikedJokes([likedJoke,...likedJokes])
      } 

     
      const unlikeJoke = (id) => {
     const newLikedJokes = likedJokes.filter(j => j.id !==id)
     setLikedJokes(newLikedJokes);
      }
      const changeTab = (event, value) =>{
        setCurrentTab(value)
      }
      const addMoreJokes =() => {
         setLoading(true)
         setTimeout(()=> {
          setJokesToShow(jokes.slice(0,jokeToShow.length + 10));
          setLoading(false)

         },400);
        
      }

        const observeElement = (bottomJoke) =>{   
          if(!bottomJoke) return         
const observer = new IntersectionObserver((entries)=>{
if(entries[0].isIntersecting ===  true){
  console.log('Adding more jokes')
 addMoreJokes();
 observer.unobserve(bottomJoke)
}

},
{
threshold: 1
}  
);     
observer.observe(bottomJoke);
};

useEffect(()=>{
  const bottomJokeE1 = document.
  getElementById(`joke-${jokeToShow.length - 1}`);

  observeElement(bottomJokeE1);
},[jokeToShow]) ;  

const toggleCategory = (event)=> {
  const category = event.target.name
  if(filterCategories.includes(category)){
    const filterCategoriesCopy = [...filterCategories]
 const categoryIndex = filterCategoriesCopy.indexOf(category)
  filterCategoriesCopy.splice(categoryIndex, 1)
  setFilterCategories(filterCategoriesCopy)
  }
  else{
    setFilterCategories([...filterCategories,category])
  }
}

const categoryMatch = (jokeCategories)=> {
  for(let i=0; i < jokeCategories.length; i++){
    if(filterCategories.includes(jokeCategories[i]))
    return true; 
  }
return false;
}

const changeJokes = (e) =>{
  e.preventDefault();
  if(firstName ==='' || lastName ==='') return
  fetchAndSetJokes()

}
 

  return (
    <div className="App" style={{background:'#dfdcd3'}}>

      <CssBaseline/>
        <Container>
        <Typography variant="h3" align="center" style={{marginTop:'50px',fontFamily:'Roboto'}}>
        Apprenticeship Program Test
      </Typography>
      <a variant="a"  href="mailto:brianmurithi65@gmail.com" align="center" style={{marginTop:'5px',fontFamily:'Arvo',color:'#1e99f8',padding:'10px',cursor:'pointer',textDecoration:'none'}}>
       For brianmurithi65@gmail.com
      </a>
      <AppBar style={{marginBottom:10,background:'#246e43'}}>
      <Tabs value={ currentTab} onChange={changeTab}>
        <Tab label="Home" id="home-tab" aria-controls="home-panel" className={classes.Tab}/>
        <Tab label={
          <Badge
          color="secondary"
         
          badgeContent={
            likedJokes.length > 0 ? likedJokes.length: null
          } >
            Likes
          </Badge>
        } id="like-tab" aria-controls="like-panel"/>
      </Tabs>
      </AppBar>
      <div role=" tabpanel" hidden ={currentTab !==0}>
       <div style={{display: 'flex',flexDirection: 'column',justifyContent:'center'}}>
       <form onSubmit ={changeJokes} noValidate className={classes.form} >
          <TextField id ="firstName"  label = "First value" value={firstName}
          onChange={ e => setFirstName (e.target.value)}/>
           <TextField id ="lastName"  label = "Last value" value={lastName  }
          onChange={ e => setLastName (e.target.value)}/>
<Button type="submit" variant="contained" color="primary" style={{background:'#229653'}}>submit</Button>
        </form>

       </div>
        {categories.map(category=>(
          <FormControlLabel key={category} control={<Checkbox
          name={category} color="primary" 
          checked={filterCategories.includes(category) } style={{background:'#f1f0ea',marginBottom:7}}onChange ={toggleCategory}/>}
          label={category}/>

        
        ))}
      {jokeToShow.map((joke,index) =>{
        if (joke.categories.length === 0 || categoryMatch(joke.categories)){
        return(
        <JCard key={joke.id } 
        joke={joke} 
        likeJoke={likeJoke}
         unlikeJoke={unlikeJoke} index={index}/>
      );
        }
      })}
      {loading && <Spinner/>}
      </div>
     <div role="tabpanel" hidden ={currentTab !==1}>
     {likedJokes.map(joke =>(
      <JCard key={joke.id }joke={joke} likeJoke={likeJoke} unlikeJoke={unlikeJoke}/>
      ))}
     </div>
</Container>
    
    </div>
  );
}

export default App;
