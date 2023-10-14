import React, { useState } from 'react'
import "./index.css"
import Card from '../components/Card'
import MyPaginatin from '../components/MyPagination'


const Home = (props) => {


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
               <MyPaginatin data = {props.data}/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home