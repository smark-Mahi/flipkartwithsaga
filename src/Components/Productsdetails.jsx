import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import styles from './Product.module.css'
import styled from 'styled-components'
const Productsdetails = () => {
    const {id}=useParams();
    const [data,setdata]=useState({})
   const fetchproducts=async()=>{
    const response=await axios.get(`http://localhost:3500/products/${id}`);
    setdata(response.data)
    console.log(response.data)
  }
    useEffect(()=>{
        fetchproducts()//important to call
      },[id])
  return (
    <div className={styles.container}>
        <div className={styles.Card}>
        <img src={data.image}/>
          <h4 className={styles.h4} style={{fontFamily:`monospace`,fontSize:`27px`,letterSpacing:`1px`}}>{data.Title}</h4>
          <h4 className={styles.h4}>₹&nbsp;&nbsp;{data.price}</h4>
          <h4 className={styles.h4}>discount:&nbsp;&nbsp;{data.discount}</h4>
          <h4 className={styles.h4}>Avalibility:&nbsp;&nbsp;{data.stock}</h4>
          <h4 className={styles.h4}></h4>
        </div>
    </div>
  )
}


export default Productsdetails
