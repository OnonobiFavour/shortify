import React, {useEffect} from 'react'
import db from '../config/config'
import { useParams } from 'react-router-dom'

const Redirect = () => {
  const {slug} = useParams();
  useEffect(()=>{
    let query = db.collection('urls').where('slug', '==', slug)
    query.onSnapshot((data)=>{
      let finalData = data.docs[0].data();
      window.location.href = finalData.url
    })
  },[slug])
  return (
    <div></div>
  )
}

export default Redirect