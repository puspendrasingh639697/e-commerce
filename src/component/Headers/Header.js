import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem, Input } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Person3Icon from '@mui/icons-material/Person3';
// import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SelectDrop from '../selectDrop/SelectDrop';
import Navber from '../Nav/Navber';
// import YourComponent from '../Locations';
import Main from '../Main';
import YourComponent from '../Locations';



function Header() {
   const[categoty,setCaregory] = useState([
    {id:1, name:"India"}, {id:2, name:"Austria"}, {id:3, name:"Albania"},
     {id:4, name:"Batain"}, {id:5, name:"Bhuten"},{id:6,name:'Brazil'},
    {id:2, name:"Canada"},{id:8,name:'China'},{id:9,name:'Denmark'},
    {id:4, name:"Batain"}, {id:5, name:"Bhuten"},{id:6,name:'Brazil'},
    {id:1, name:"India"}, {id:2, name:"Austria"}, {id:3, name:"Albania"},
    {id:2, name:"Canada"},{id:8,name:'China'},{id:9,name:'Denmark'}

   ]);



   const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   
 
  return (
    <>
     <Navbar expand="lg" className="bg-dark text-white p-0 h-133px">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src='https://cdn3d.iconscout.com/3d/premium/thumb/vegetable-paper-bag-6874591-5655173.png' 
          style={{height:'80px',width:'100px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <YourComponent/>
            
       

           
          
            
           
        
              <div className ="container">
    <div className ="input-group">
        <input type="text" className ="form-control" placeholder="Search..." aria-label="Search"
        // style={{width:'300px'}}
       />
        <button className ="btn btn-outline-secondary " type="button">
            <i className ="fas fa-search">
              <SearchIcon/></i> 
        </button>
    </div>
</div>

         
          
           
          </Nav>
        
           <div className="d-flex justify-content-between gap-3 p-1 mx-auto">
         <button type="button" className="btn btn-white position-relative">
          <span> 
    <Main/>

</span>        
  
</button>

<button type="button" className="btn btn-white position-relative text-white">
          <span> Wishlist <FavoriteBorderIcon/>  </span>  
  <span className="position-relative top-5 start-10  badge rounded-pill bg-success">
    99+
  </span>
</button>

<button type="button" className="btn btn-white position-relative text-white">
          <span> Cart<AddShoppingCartIcon/>  </span>  
  <span className="top-5 start-10  badge rounded-pill bg-success">
    99+
  </span>
</button>







<Button  onClick={handleClick}> 
  <Person3Icon/>Account</Button>
      <Menu
      

        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        

          
            <MenuItem  onClick={handleClose}><Person3Icon/>
            <span className='ms-3'> Puspendra singh</span>
            
            </MenuItem>

            
            <MenuItem  onClick={handleClose}><LocationOnIcon/>
            <span className='ms-4'> Puspendra singh</span>
            
            </MenuItem>
            
                 
            <MenuItem  onClick={handleClose}><PersonOutlineIcon/>
            <span className='ms-4'> Puspendra singh</span>
            
            </MenuItem>
            

            
            <MenuItem  onClick={handleClose}><FavoriteBorderIcon/>
            <span className='ms-4'> Puspendra singh</span>
            
            </MenuItem>

            
            <MenuItem  onClick={handleClose}><SettingsIcon/>
            <span className='ms-4'> Puspendra singh</span>
            
            </MenuItem>

            
            <MenuItem  onClick={handleClose}><LogoutIcon/>
            <span className='ms-3'> Puspendra singh</span>
            
            </MenuItem>
        
       
      </Menu>

</div>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Navber/>

    
    </>
  );
}

export default Header;
