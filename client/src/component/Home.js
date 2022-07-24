import { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { useSelector, useDispatch } from 'react-redux';
import { getLists } from '../store/listSlice';


const Home = () => {
  const patch = useDispatch();

  useEffect(() => {
    patch(getLists);
  }, [patch]);

  const list = useSelector((state) => state.list.value); 
  // eslint-disable-next-line

  return (
    <div className=" px-3 flex flex-wrap flex-row">
      <br />

      {list?.map((list) => (
        <List list={list} />  
      ))}

      <Form />
    </div>
  );
};

export default Home;
