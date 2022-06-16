import { getUsers } from "../actions/auth";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRooms } from "../actions/rooms";
import { Grid } from "@mui/material";
import Hotel from "./hotel/Hotel";


const Home = () => {


  const dispatch = useDispatch()
  const rooms = useSelector((state) => state.rooms);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRooms());
  }, [dispatch, rooms.length]);

  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <Grid container>
        {users.map((user) => (
          <Hotel hotel={user} id={user.id} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
