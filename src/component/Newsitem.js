import React , { component }from 'react'
import image from '../asset/image.png'

const Newsitem = ({title,description,src,url}) => {
  return (
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 card my-3" style={{maxWidth:"400px"}}>
       <img src={src?src:image} style={{height:"150px",width:"250px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
     <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90): "The Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ."}</p>
      <a href={url} className="btn btn-primary">Read More</a>
   </div>
</div>
  )
}

export default Newsitem
