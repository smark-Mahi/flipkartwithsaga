import React, { useEffect, useState } from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import styles from './Product.module.css';
//import Makeupcards from './Makeupcards'
const Login = () => {
  const [state,setstate]=useState(false)
  const schema=yup.object().shape({
    email:yup.string().required("your email is required"),
    password:yup.string().min(6).max(10).required("your password should be greater than six characters"),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null,"passwords don't match"]).required(),
  });
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });
  const navigate=useNavigate()

  const onSubmit=(data)=>{
    console.log('data',data)
    if(data){
      localStorage.setItem('login',true)
      setstate(true)
      navigate('/')
    }
  }

  return (
    <div className={styles.body}>
     <div className={styles.center}>
     <h1 className={styles.loginh1}>Login</h1>
     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
     <div className={styles.bod}>
     <input className={styles.bo} type="email" placeholder='Email... '{...register("email")} />
      <p style={{color:`red`,fontWeight:`400`,fontSize:`13px`}}>{errors.email?.message}</p>
     </div>
      <div className={styles.bod}>
      <input className={styles.bo} type="password" placeholder='Password' {...register("password")} /><br/>
      <p style={{color:`red`,fontWeight:`400`,fontSize:`13px`}}>{errors.password?.message}</p>
      </div>
     <div className={styles.bod}>
     <input className={styles.bo} type="password" placeholder='Confirm password...' {...register("confirmpassword")} /><br/>
      <p style={{color:`red`,fontWeight:`400`,fontSize:`13px`}}>{errors.confirmpassword?.message}</p>
     </div>
      <button type="submit" className={styles.sinupbtn}>SIGN UP</button>
    </form>
     </div>
    </div>
  )
}

export default Login
