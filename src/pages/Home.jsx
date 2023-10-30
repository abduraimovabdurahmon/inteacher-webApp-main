import React, { useState } from 'react'
import "./index.css"
import Card from '../components/Card'
import MyPaginatin from '../components/MyPagination'


const Home =  (props) => {

    const shuffle =  (data)=>{
        let myData =  data;
        for(let i=0; i<data.length; i++){
            const random1 =  Math.floor(Math.random()*(data.length));            
            const random2 =  Math.floor(Math.random()*(data.length));            
            [myData[random1], myData[random2]] =  [myData[random2], myData[random1]];
        }
        return myData;
    }

  return (
    <div>
        <div className="popular-teachers">
            <div className="popular-teachers-title">Popular Teachers</div>
            <div className="populars-box">
            <div className="cards">
                {props.data.map((element, index)=>{
                    if(element?.popular){
                        return (
                            <Card data = {element} key = {index}/>
                        )
                    }
                })}
            </div>
            </div>
        </div>
        <div className="teachers-list container">
            <div className="teachers-list-title">All teachers</div>
            <div className="teachers-box">
               <MyPaginatin data = {shuffle(props.data)}/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home