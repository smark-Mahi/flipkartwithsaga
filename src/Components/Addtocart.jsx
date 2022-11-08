import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from './Product.module.css'
import styled from 'styled-components'
import { deletecart } from '../features/makupcart'
const Addtocart = () => {
  const makeupcart=useSelector(state=>state.makeupcart.value)
  console.log(makeupcart)
  const dispatch=useDispatch()
  /*function handleminus(id){
    setstate(!state)
    if(stock==1){
      dispatch(deletecart({id:id}))
    }else{
      setstock(stock-1)
    }
  }
  function handleadd(stocks,id){
    setstate(!state)
    if(id && stock!=stocks){
      setstock(stock+1)
    }
  }*/
  function handlequantity(id,quantity,stock){
    if(quantity<=stock){
      dispatch(deletecart({id,quantity}))
    }else{
      return <h5 className={styles.h5}>sorry!we have this {stock} much stock only</h5>
    }
  }
  return (
    <Wrapper>
      {
        makeupcart.map((item)=>
        <div className={styles.ccards}>
        <div className={styles.imgcard}>
        <img src={item.image} className={styles.imgg}/>
        </div>
          <div className={styles.div}>
          <h3 className={styles.h33}>{item.Title}</h3><br/>
          <div className={styles.line}>
          <h4>₹{item.price}</h4>&nbsp;
          {item.discount?<h4>{item.discount}</h4>:''}
          </div>
          <h4 className={styles.inp}>Avalibility&nbsp;{item.stock}</h4>
          <div  className={styles.inputtt}>
          <input type="text"  value={item.quantity} className={styles.input} />
          <button className={styles.button1} onClick={()=>handlequantity(item.id,item.quantity-1,item.stock)}>-</button>
          <button onClick={()=>handlequantity(item.id,item.quantity+1,item.stock)} className={styles.button2}>+</button>
         
          </div>
          </div>
        </div>)
      }
      {makeupcart.length==0?<h2 className={styles.h2}>cart is empty...</h2>:''}
    </Wrapper>
  )
}
const Wrapper=styled.div`
width: 100vw;
font-family: monospace;
font-size: 1em;
display: flex;
flex-wrap: wrap;
margin-left: 10px;
margin-top: 20px;
`;


export default Addtocart
