import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IPage from "../interfaces/page";
import { Button, Form, Modal } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "./home.scss";
import { Link } from "react-router-dom";
import { createAtm, getAtm, getQueue } from "../store/action/actionATM";
import {logOut} from "../store/action/auth"
import { getApiProcess } from "../store/action/actionProcessClient";
import { getApiDeleteAtm, postApiCreatePeople } from "../api/apiclient";
import { RootStore } from "../interfaces/typescript";
import Loading from "./../Loadding/loadding";

const Home: React.FunctionComponent<IPage> = (props) => {
  const dispatch = useDispatch();
  const [nameATM, setNameATM] = useState<string>("");
  const [namepeople, setnamepeople] = useState<string>("");
  const [transaction, settransaction] = useState<string>("");

  let AtmReducer =  useSelector((state: RootStore) => state.AtmReducer);
  let Listqueue =  useSelector((state: RootStore) => state.Listqueue);
  let ProcessClientReducer  = useSelector((state: RootStore) => state.ProcessClientReducer);
  let LoadingReducer  = useSelector((state: RootStore) => state.LoadingReducer);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleCREATEATM = () => {
    dispatch(createAtm(nameATM));
    setShow(false);
  };


  useEffect(() => {
  const interval =  setInterval(function () {
      dispatch(getAtm());
      dispatch(getApiProcess());
      dispatch(getQueue());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const deleteATM = async (id: string) => {
    getApiDeleteAtm(id);
    
  };

  const handleCreatePeople = () => {
    const numbertransaction = Number(transaction);
    postApiCreatePeople(namepeople, numbertransaction);
    setShow1(false);
  };

  const logOutcode = () => {
    dispatch(logOut())
  };

  return (
    <div className="blocktrangchu">
      <ToastContainer position="top-right" autoClose={1000} closeOnClick />
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <Button className="btn btn-button" onClick={handleShow}>
              Add New ATM
            </Button>

            <Button className="btn btn-button people" onClick={handleShow1}>
              Add New People
            </Button>

            <Link to="/listatm">
              
              <Button className="btn btn-button "> Show List Atm </Button>
            </Link>

            <Link to="/login">
              
              <Button className="btn btn-button " onClick={logOutcode}>
                
                Log Out
              </Button>
            </Link>
            <div className="row viewatms">
              {LoadingReducer.loadding ?<Loading/> :   AtmReducer.map((data, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="blockitemsatm">
                      <div className="blockimg">
                        <img src="https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg" />
                        <i
                          className="	fa fa-close icondeletecar"
                          onClick={() => deleteATM(data.id)}
                        ></i>
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* userview */}
          <div className="col-lg-3">
            <div className="Listpeople">
              {LoadingReducer.loadding ?<Loading/> : Listqueue.map((data, index) => {
                return (
                  <div className="BlockViewPeoples" key={index}>
                    <img
                      src="https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg"
                      className="imgpeople"
                    />
                    <div> Name : {data.name} </div>
                    <div> transaction : {data.transaction}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* end userview */}
        </div>

        {/* client procss */}
        <div className="row">
          <h2>Processed client</h2>
          <div className="col-lg-12">
            <div className="blockdata">
            {LoadingReducer.loadding ? <Loading/> : ProcessClientReducer.processedClient}
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Th??m ATM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="New ATM"
            name="nameATM"
            value={nameATM}
            onChange={(e) => setNameATM(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCREATEATM}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Th??m people</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="New people"
            name="namepeople"
            value={namepeople}
            onChange={(e) => setnamepeople(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="New transaction"
            name="namepeople"
            value={transaction}
            onChange={(e) => settransaction(e.target.value)}
            className="transaction"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreatePeople}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
