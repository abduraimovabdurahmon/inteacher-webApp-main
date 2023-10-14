import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pagination.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Card from "./Card";

const MyPaginatin = (props) => {
  const api = props?.data;

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalpages] = useState(
    Math.ceil(api.length / pageSize)
  );


  return (
    <>
        <div className="container">
            <div className="row">
                
                {Array.from({length: Math.min(10, api.length-((current-1)*10))}, (_, index)=>{
                    return ((current-1)*10)+1 + index;
                }).map((el, index)=>{
                    return (
                        <div className="col-6" key={index}>
                            <Card data = {props.data[index]}/>
                        </div>
                    )
                })}
            </div>
        </div>

      <div className="buttons">
        <Button
          variant="primary"
          onClick={() => {
            if (current !== 1) {
              setCurrent(current - 1);
            }
          }}
        >
          <AiOutlineDoubleLeft />
        </Button>

        {totalPages <= 7 ? (
          <>
            {Array.from({ length: totalPages }, (_, index) => {
              return index + 1;
            }).map((el, index) => {
              return (
                <Button
                  variant={el == current ? "success" : "outline-secondary"}
                  className="pagination-button"
                  key={index}
                  onClick={() => {
                    setCurrent(el);
                  }}
                >
                  {el}
                </Button>
              );
            })}
          </>
        ) : (
          <>
            {current <= 5 ? (
              <>
                {Array.from({ length: 5 }, (_, index) => {
                  return index + 1;
                }).map((el, index) => {
                  return (
                    <Button
                      key={index}
                      variant={
                        current == el ? "success" : "outline-secondary"
                      }
                      className="pagination-button"
                      onClick={() => {
                        setCurrent(el);
                      }}
                    >
                      {el}
                    </Button>
                  );
                })}
                <span className="pagination-button">...</span>
                <Button
                  variant={
                    current == totalPages ? "success" : "outline-secondary"
                  }
                  className="pagination-button"
                  onClick={() => {
                    setCurrent(totalPages);
                  }}
                >
                  {totalPages}
                </Button>
              </>
            ) : (
              <>
                {current > totalPages - 5 ? (
                  <>
                    <Button
                      variant={current == 1 ? "success" : "outline-secondary"}
                      className="pagination-button"
                      onClick={() => {
                        setCurrent(1);
                      }}
                    >
                      1
                    </Button>
                    <span className="pagination-button">...</span>
                    {Array.from({ length: 5 }, (_, index) => {
                      return index + totalPages - 4;
                    }).map((el, index) => {
                      return (
                        <Button
                          key={index}
                          variant={
                            current == el ? "success" : "outline-secondary"
                          }
                          className="pagination-button"
                          onClick={() => {
                            setCurrent(el);
                          }}
                        >
                          {el}
                        </Button>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <Button
                      variant={current == 1 ? "success" : "outline-secondary"}
                      className="pagination-button"
                      onClick={() => {
                        setCurrent(1);
                      }}
                    >
                      1
                    </Button>

                    <span className="pagination-button">...</span>
                      {Array.from({length:3}, (_, index)=>{
                        return index+current-1
                      }).map((el, index)=>{
                        return(
                            <Button key={index} className="pagination-button" variant={current == el? "success":"outline-secondary"}
                                onClick={()=>{
                                    setCurrent(el)
                                }}
                            >{el}</Button>
                        )
                      })}
                    <span className="pagination-button">...</span>
                    <Button
                      variant={
                        current == totalPages
                          ? "success"
                          : "outline-secondary"
                      }
                      className="pagination-button"
                      onClick={() => {
                        setCurrent(totalPages);
                      }}
                    >
                      {totalPages}
                    </Button>
                  </>
                )}
              </>
            )}
          </>
        )}

        <Button
          variant="primary"
          onClick={() => {
            if (current < totalPages) {
              setCurrent(current + 1);
            }
          }}
        >
          <AiOutlineDoubleRight />
        </Button>
      </div>
    </>
  );
};

export default MyPaginatin;
