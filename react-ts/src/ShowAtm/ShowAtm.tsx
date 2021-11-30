import React, { useEffect, useState } from "react";
import IPage from "../interfaces/page";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { RootStore } from "../interfaces/typescript";
import { Link } from "react-router-dom"
import { getAtm } from "../store/action/actionATM";
import "./showatm.scss";
import Loading from '../Loadding/loadding'
const ShowAtm: React.FunctionComponent<IPage> = (props) => {
    let  AtmReducer = useSelector((state: RootStore) => state.AtmReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (AtmReducer.length === 0) {
            setInterval(function () {
                dispatch(getAtm());
            }, 5000);
        }
    }, []);

    return (
        <div className="listatm">
            <div className="container">
                <Link to="/home">

                    <Button className="btn btn-button combackhome"> Home </Button>
                </Link>
                <div className="row">
                    {   AtmReducer.length === 0
                        ? "Data ....."
                        : AtmReducer.map((data, index) => {
                            return (
                                <div className="col-lg-3" key={index}>
                                    <div className="blockimg">
                                        <img src="https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg" />

                                        <p>{data.status}</p>
                                        <p>{data.name}</p>
                                    </div>

                                    <div className="blockpeople">
                                        <div>
                                            <img src="https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg" />
                                        </div>

                                        <div className="ttpeople">
                                            <span>
                                                <b> {data.client} </b>
                                            </span>
                                            <p>transaction : {data.transaction}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ShowAtm;
