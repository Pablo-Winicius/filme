import api from './services/api';
import './App.css';
import React,{useEffect, useState} from 'react';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovei from './components/FeaturedMovei'
import Header from './components/Header';
import Nav from './components/Nav';


export default () =>{

const[movieList,setMovieList]= useState([]);
const[featuredData, setFeaturedData]= useState(null)



  useEffect(()=>{
    const loadAll= async ()=>{
      //pegando a lista total
      let list = await api.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter(i=>i.slug == 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen=originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id,'tv');
      setFeaturedData(chosenInfo);

      
    }
    loadAll();
  },[]);

  return(
    <div className="page">

    <Header/>

     {featuredData && 
      <FeaturedMovei item={featuredData}/>
     } 

     <Nav/>

     <section className="lists">
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
     </section>
          
          
    </div>
  );


}