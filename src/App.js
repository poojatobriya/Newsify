
import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Newsboard from './component/Newsboard'



const App = () => {
  const [category,setCategory]=useState("general");
  //const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const handlePrevious = () => {
    
      setPage(page - 1);
    
  };
  
  const handleNext = () => {
    
      setPage(page + 1);
    
  };
  

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    
    
    <div className="d-flex justify-content-between">
        <button  type="button" className="btn btn-dark" onClick={handlePrevious}>
        &larr; Previous
        </button>
        <button  type="button" className="btn btn-dark" onClick={handleNext} >
          Next &rarr;
        </button>
  </div>      
</div>
  )
}

export default App
