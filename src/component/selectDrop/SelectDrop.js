import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Button, Menu, MenuItem, Input } from '@mui/material';

function SelectDrop(props) {
  // console.log("data",props.mydata);
  const {mydata} =props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button  onClick={handleClick}>
        <LocationOnIcon/> Location
      </Button>
      <Menu
      

        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem>
          <Input/>
        </MenuItem>
        {mydata.map((item,index)=>{
          return (
            <MenuItem key={index} onClick={handleClose}>{item.name}</MenuItem>



          )
        })}
      
        
       
      </Menu>
  

  
      
        
    </>
  );
}

export default SelectDrop;
