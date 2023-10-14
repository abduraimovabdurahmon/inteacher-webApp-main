import React, { useEffect, useState } from 'react'
import "./categories.css"
import Form from "react-bootstrap/Form"
import MyPagination from '../components/MyPagination';

const Categories = (props) => {
    const categoriesList = [];

    const [category, setCategory] = useState("");
    const [data, setData] = useState([])

    props?.data.map((el)=>{
        if(!categoriesList.includes(el.spec)){
            categoriesList.push(el.spec.toLowerCase());
        }
    });

    useEffect(()=>{
        const filterData = props?.data?.filter((e)=>e?.spec?.toLowerCase() === category);
        setData(filterData);
    },[category]);

  return (
    <>
        <div className="categories-box">
            <div className="container">
                <div className="categories-title">
                    Categories
                </div>

                <Form.Select className='mt-3' name='category'
                    onChange={(e)=>{
                        setCategory(e.target.value);
                    }}
                >
                    <option>Select category</option>
                    {
                        categoriesList?.map((el, index)=>{
                            return (
                                <option value={el} key={index}>{el}</option>
                            )
                        })
                    }
                </Form.Select>

                {
                    data.length >= 1 ? (
                        <MyPagination data = {data}/>
                    ):(<>
                        <center>Hechkim topilmadi</center>
                    </>)
                }
            </div>
        </div>
    </>
  )
}

export default Categories