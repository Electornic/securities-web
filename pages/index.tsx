import { useSelector, useDispatch } from "react-redux";
import {jsx, css} from '@emotion/react';

const newStyle = css`
  background-color: blue;
`

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
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default Home