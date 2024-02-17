import React,{ useState } from 'react';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import Slider from '../Pages/Slider';
// import {Categoty} from '../../Categorys/Category'



function Navber() {


  return (
<>
<nav>
  <div className='container my-2 '>
    <div className='row'>
      <div className='col-sm-3'>
        <button className='btn  btn-success'>
          <ViewCozyIcon/> 
          Puspendra Singh
        
          </button>

      </div>
      

      <div className='col'>
     Home

      </div>

      <div className='col'>
      About

      </div>

      <div className='col'>
        Shop

      </div>

      <div className='col'>
        Venders

      </div>

      
   

      <div className='col'>
      Blog

      </div>


      <div className='col'>
      Contect

      </div>
    </div>
  </div>
</nav>

<Slider/>


</>  )
}

export default Navber

