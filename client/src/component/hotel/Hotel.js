


import { Grid } from "@mui/material";
const Hotel = ({hotel}) => {
  return (
    <Grid xs={12} md={6} lg={4}>
      <div className="hotel">

        <img src={hotel.image} alt=""/>
        <div className="hotel-details">

        </div>

      </div>

     
    </Grid>
  );
}


export default Hotel;

