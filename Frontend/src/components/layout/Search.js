import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const {keyword, setKeyword} = useState("");
    const navigate = useNavigate();
    const searchHandler = (e) =>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/eats/stores/search/${keyword}`);
        }
        else{

        }
    }
  return (
   <form  onSubmit={searchHandler}>
   <div className='col-12 col-md-6 mt-2 mt-md-0'> 
     <div className='input-group'> 
     <input
     type='text'
     id='search_field'
     className='form-control' 
     placeholder='Search your favourite restaurant'
     onChange={(e) => setKeyword(e.target.value)}
     />
    
     <div className='input-group-append'>
      <button
      id='search_btn' className='btn'
      >
       <i className='fa fa-search' aria-hidden = 'true'> </i> 
       </button>
     </div>
     </div>
     {/* login */}
    
      </div>
   </form>
  )
}

export default Search
