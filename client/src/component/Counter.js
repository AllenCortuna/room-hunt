

import {store} from '../state/store';

const Counter = () => {
  const count = store(state => state.count)

  return (
    <>
    <div className="count">
      <p>count is :</p>
      <p>{count}</p>
    </div> 
    </>
  );
}

export default Counter;

