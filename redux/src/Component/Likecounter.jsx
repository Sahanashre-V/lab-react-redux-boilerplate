import { useDispatch, useSelector } from "react-redux";
import Action from "./Actions"

function Like(){
    const counter = useSelector((state) => {
        return state
      })
      const dispatch = useDispatch()


    return(
        <div>
              <div>
      <p>{counter}</p>
<div className="btn">
<button onClick={() => {dispatch(Action.Increment())}}>Like</button>
      <button onClick={() => {dispatch(Action.Decrement())}}>Unlike</button>
</div>

    </div>
        </div>
    )
}

export default Like