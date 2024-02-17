import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function YourComponent() {



  const handleOpenMap = () => {
    const mapURL = `https://www.google.com/maps?q`;
    window.open(mapURL, '_blank'); 
  };

  return (
    <div  onClick={handleOpenMap}>
      
        <span style={{color:'red'}}>
        <LocationOnIcon/>


        </span>
            

      
        

    </div>
  );
}

export default YourComponent;
