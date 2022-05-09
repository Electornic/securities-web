import { useSelector, useDispatch } from "react-redux";
import {GlobalState} from "../store";
import {decrement, increment} from "../store/counter/slice";

function Home() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: GlobalState) => state.counter);

  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  )
}

export default Home