import waiting from "../img/Waiting.gif";
import { getUsers } from "../../actions/auth";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRooms } from "../../actions/rooms";
import Hotel from "./Hotel";
import { Grid } from "@mui/material";

// <a href="https://www.flaticon.com/free-animated-icons/delivery" title="delivery animated icons">Delivery animated icons created by Freepik - Flaticon</a>

const Location = () => {
  const dispatch = useDispatch();

  const rooms = useSelector((state) => state.rooms);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRooms());
  }, [dispatch, rooms.length]);

  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      {users?.length === 0 && (
        <div className="fullscreen">
          <img src={waiting} alt="" style={{ width: "100%" }} />
        </div>
      )}

      {users?.map((user) => (
          <Hotel user={user} key={user._id} />
      ))}
    </div>
  );
};
export default Location;
