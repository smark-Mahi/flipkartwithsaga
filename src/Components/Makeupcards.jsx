import React, { useEffect } from 'react'
import axios from 'axios'
//import { products,searchproducts } from '../features/Makeup'
import {useDispatch,useSelector} from 'react-redux'
import {FiShoppingCart} from 'react-icons/fi'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom'
import Products from './Products'
import styled from 'styled-components'
import styles from './Product.module.css'
import { searchproducts,products } from '../features/Makeup'
const Makeupcards = () => {
    const url='http://localhost:3500/products';
    const dispatch=useDispatch()
    const makeupcart=useSelector(state=>state.makeupcart.value)
    console.log(makeupcart)
    //const [data,setdata]=useState([])
    useEffect(()=>{
      const fetchproducts=async()=>{
        const response=await axios.get(url);
        dispatch(products(response.data))
        console.log(response.data)
      }
      fetchproducts()//important to call
    },[])
    const makeup=useSelector(state=>state.makeup.value)
   console.log(makeup)
   function handlefilter(e){
    const searchword=e.target.value;
    const newfilter=makeup.filter((item)=>{
      return ((item.Title).toLowerCase()).includes(searchword)
    })
    dispatch(searchproducts(newfilter))
 }
  return (
    <div>
      <h1>My Store</h1>
      <div className={styles.Nav}>
        <input type="text" name="search" onChange={handlefilter} placeholder='Search' className={styles.inputt}/>
        <Link className={styles.carticon} to='addtocart'><FiShoppingCart/></Link><div className={styles.circle}><span className={styles.num}>{makeupcart.length}</span></div>
      </div>
      {makeup.length===0?<h1>Product not found</h1>:''}
      <Wrapper>
      {
        makeup.map((item)=>
        <Products item={item}/>
        )
      }
      </Wrapper>
    </div>
  )
}
const Wrapper=styled.div`
width: 100%;
height: calc(100vh-50px);
position: relative;
font-family: monospace;
font-size: 1em;
display: flex;
flex-wrap: wrap;
margin-left: 10px;
gap: 10px;

`;
export default Makeupcards
