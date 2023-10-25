import React from 'react'
import { useParams } from 'react-router-dom'
import {TiArrowBack} from "react-icons/ti"
import {MdNumbers} from "react-icons/md"
import {GiTeacher} from "react-icons/gi"
import {BiSolidUserCircle} from "react-icons/bi"
import {AiFillPhone} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"

import "./details.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Details = (props) => {
    const {id} = useParams();

    const [teacher] = props.data.filter((e)=>e.id == id);

  return (
    <>
        <div className="details-header">
            <div className="header-back-btn"
                onClick={()=>{
                    history.back();
                }}
            ><TiArrowBack/> orqaga</div>
        </div>

        <div className="container details-body">

            <div className="details-body-card">
                <div className="details-img">
                    <div className="details-body-card-img" style={{
                        backgroundImage: "url("+teacher?.photo+")",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}></div>
                </div>
                

                <div className="details-texts">
                    <div className="details-text"><GiTeacher className='details-icon'/>{teacher.title}</div>
                    <div className="details-text"><BiSolidUserCircle className='details-icon'/>{teacher?.firstname+" "+teacher?.lastname}</div>
                    <div className="details-text"><MdNumbers className='details-icon'/>{teacher?.age+" yosh"}</div>
                    <div className="details-text"><AiFillPhone className='details-icon'/>{teacher?.phone}</div>
                    <div className="details-text"><FcAbout className='details-icon'/>{teacher?.about}</div>
                </div>
                    <hr />
                <div className="details-video">
                    <div className="details-video-title h2 p-2">Videodarslardan lavha</div>
                    <iframe src={"https://www.youtube.com/embed/"+teacher.video} className='details-video-youtube'></iframe>
                </div>

            </div>
        </div>
    </>
  )
}

export default Details