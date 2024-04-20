import React from 'react'
import LoaderImg from '../assets/pre.svg'

function Loader() {
  return (
    <div className="loading" style={{display:'flex' , height:'100vh' , width : '100%' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#0c0513'}}>
<img src={LoaderImg} alt="Loader" width={'100px'} />
    </div>
  )
}

export default Loader