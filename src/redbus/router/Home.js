import React, { useContext } from 'react';
import './Home.scss'
import { Context } from '../context/Context';
import { CiPlug1 } from "react-icons/ci";
import { RiBusWifiLine } from "react-icons/ri";
import { IoBusOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { LuTicket } from "react-icons/lu";
import { RiTicket2Line } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { GiStreetLight } from "react-icons/gi";
// import { MdEventSeat } from "react-icons/md";
import { MdShareLocation } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineEventSeat } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";

export const Home = () => {
    const icon1 = [{ i: <IoBusOutline /> }, { i: <MdEventSeat /> }, { i: <RiTicket2Line /> }, { i: <CiPlug1 /> }, { i: <CiCirclePlus /> }]
    const icon = [{ i: <IoBusOutline />, name: "Deep Cleaned Buses" }, { i: <MdEventSeat />, name: "Captain seat" }, { i: <RiTicket2Line />, name: "M-ticket Supported" }, { i: <CiPlug1 />, name: "Charging Point" }, { i: <GiStreetLight />, name: "Reading Light" }, { i: <CiPhone />, name: "Emergency Contact Number" }, { i: <LuTicket />, name: "USB port for charger" }, { i: <RiBusWifiLine />, name: "Track My Bus" }]
    const { a, b } = useContext(Context)
    const icons = (id) => {
        let x = a.arr.map((e) => { return e.id === id ? { ...e, isicon: !e.isicon } : e })
        b({ type: "update", payload: x })
    }
    const seats = (id) => {
        let x = a.arr.map((e) => { return e.id === id ? { ...e, isview: !e.isview } : e })
        b({ type: "update", payload: x })
    }
    const setprice = (index, initialIndex) => {
        let x = a.arr.map((e, i) => {
            return initialIndex === i ? { ...e, seatPrice: e.seatPrice.map((el, ind) => { return index === ind ? { ...el, isprice: true } : { ...el, isprice: false } }) } : e
        })
        b({ type: "update", payload: x })
    }
    const bookseat=(i,ind)=>{
        let x=a.arr.map((e,index)=>{
            return index===ind?{...e,isbk:true,noOfSeats:e.noOfSeats.map((el,inde)=>{return inde===i?el.isselect && el.isbook? el: {...el,isselect:!el.isselect}:el})}:e
        })
        b({type:'update',payload:x})
    }
    const bookBtn=(index)=>{
        let x=a.arr.map((e,i)=>{return i===index?{...e,noOfSeats:e.noOfSeats.map((el)=>{return el.isselect?{...el,isbook:true}:el})}:e})
        b({type:"update",payload:x})
    }
    return (
        <div className='home-sec'>
            <div className='navbar'>
                <div className='container'>
                    <div className='nav-row'>
                        <div>
                            <img src={"https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"} alt="logo" />
                        </div>
                        <div className='navs'>
                            <p><CiHeadphones />HELP</p>
                            <p>ACCOUNT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='det-title'>
                    <h5>SORT BY:</h5>
                    <div>
                        {
                            a.arr1.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <p>{e.a}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {a.arr.map((e, index) => {
                    return (
                        <div className='parent-row' key={index}>
                            <div className='home-col'>
                                <div className='det1'>
                                    <h3>{e.busname}</h3>
                                    <div className='det1-col'>
                                        <h2>{e.starttime}</h2>
                                        <p>{e.duration}</p>
                                        <h2 style={{}}>{e.arrive}</h2>
                                        <p style={{ padding: "5px 10px", backgroundColor: "#ebaf3c", borderRadius: "5px", color: "#fff" }}>{e.rating}</p>
                                        <p>INR {e.rate}</p>
                                    </div>
                                </div>
                                <div className='det2'>
                                    <p style={{ color: "#999", fontSize: "14px" }}>{e.type}</p>
                                    <div className='det2-col'>
                                        <p style={{ color: "#d84e55" }}>{e.arrivedate}</p>
                                        <p>{e.seats} <span style={{ color: "#999" }}>Seats available</span></p>
                                    </div>
                                </div>
                                <div className='det3'>
                                    <div className='det3-card'>
                                        <div className='det3-col'>
                                            <p>{e.startplace}</p>
                                            <p>{e.arriveplace}</p>
                                        </div>
                                        <p>{e.single} <span style={{ color: "#999" }}>Singles</span></p>
                                    </div>
                                </div>
                                <div className='det4'>
                                    <div className='det4-row'>
                                        {icon1.map((v, i) => {
                                            return (
                                                <div key={i} className='det4-col'>
                                                    <div>
                                                        <p style={{ cursor: "pointer" }} onClick={() => icons(e.id)}>{v.i}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='det4-location'>
                                        <p><MdShareLocation />Live Tracking</p>
                                    </div>
                                </div>
                                <div className='det6'>
                                    <div className='det6-row'>
                                        <div className='det6-col'>
                                            {e.busdetails.map((e, i) => {
                                                return (
                                                    <div key={i}>
                                                        <p>{e.b1}<span style={{ color: "#d84e55", paddingLeft: "10px" }}>|</span></p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {e.isview ?
                                        <div className='view-seate' onClick={() => seats(e.id)} >
                                            <button style={{ backgroundColor: "#999" }}>HIDE SEATS</button>
                                        </div> :
                                        <div onClick={() => seats(e.id)} className='view-seate'>
                                            <button>VIEW SEATS</button>
                                        </div>}
                                </div>
                            </div>
                            <div className='det5-icon'>
                                {e.isicon ?
                                    <div className='det5-row'>
                                        {icon.map((e, i) => {
                                            return (
                                                <div className='det5-col' key={i}>
                                                    <p>{e.i}</p>
                                                    <p>{e.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div> : ""}
                            </div>
                            <div className='det7-seatSec'>
                                <div>
                                    {
                                        e.isview ?
                                            <div>
                                                <div className='det7-seatrow'>
                                                    <h3>Seat Price</h3>                                                    {
                                                        e.seatPrice.map((val, i) => {
                                                            return (
                                                                <div key={i} className='det7-pricecol'>
                                                                    <div className='det7-pricecard'>
                                                                        <p onClick={() => setprice(i, index)} style={val.isprice ? { backgroundColor: "#000", color: "#fff" } : { backgroundColor: "#fff", color: "#000" }}>{val.p}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className='seat-book'>
                                                    <div className='seat-book-sec'>
                                                        <div className='seat-book-row1'>
                                                            
                                                        </div>
                                                        <div className='seat-book-row2'>
                                                            
                                                        </div>
                                                        <div className='seat-book-row'>
                                                            {e.noOfSeats.map((element, inde) => {
                                                                return (
                                                                    <div key={inde} className='seat-book-col'>
                                                                        {
                                                                            element.isselect ?
                                                    
                                                                                <div className='seat-book-card' onClick={()=>bookseat(inde,index)} style={element.isbook?{cursor:"context-menu"}:{cursor:"pointer"}}>
                                                                                    <p><MdEventSeat style={element.isbook?{color:"red"}:{color:"#000"}}/></p>
                                                                                </div> :
                                                                                <div className='seat-book-card' onClick={()=>bookseat(inde,index)} title={"Seat No : "+element.no}>
                                                                                    <p><MdOutlineEventSeat /></p>
                                                                                </div>
            
                                                                        }
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className='book-btn-row'>
                                                            {e.isbk?
                                                            <div className='book-btn-card'>
                                                                <button onClick={()=>bookBtn(index)}>CONTUNUE</button>
                                                            </div>:""
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : ""

                                    }
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}