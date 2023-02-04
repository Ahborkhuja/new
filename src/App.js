
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { CardArrayActions } from "./store/redux";
import { useState } from 'react';
import Bucket from "./assets/bucket.svg";
import CardImage from "./assets/CardImage.png";
import remove from "./assets/remove.svg";
import X from "./assets/X.svg";
import add from "./assets/add.svg";
function App() {
  const array = [
    {
      Img: { CardImage },
      name: "Black Converse",
      cost: 110,
      quantity: 0,
      id: 1
    },
    {
      Img: { CardImage },
      name: "Nike White AirForce",
      cost: 120,
      quantity: 0,
      id: 2
    },
    {
      Img: { CardImage },
      name: "Black Converse",
      cost: 110,
      quantity: 0,
      id: 3
    },
    {
      Img: { CardImage },
      name: "Nike White AirForce",
      cost: 160,
      quantity: 0,
      id: 4
    },
  ]
  const [btn, setBtn] = useState(true);
  const { CardArray } = useSelector((state) => state);
  const [Barray, setBarray] = useState(CardArray.card);
  const dispatch = useDispatch();
  const [bucket, setBucket] = useState("dn")
  const bucketSetter = () => {

  }
  const openBucket = () => {
    console.log(bucket);
    bucket === "dn" ? setBucket("db") : setBucket("dn")
  }
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0px 15px" }}>
        <h2>Redux</h2>
        <button type='button' onClick={openBucket}>
          <img src={Bucket} alt="" />
        </button>
      </header>
      <div className={bucket}>
        <ul className="bucketList">
          {CardArray.card.map(item => (
            <>
              <li key={item.id} className='bucketItem'>
                <div className="ImgWords">
                  <img src={item.Img.CardImage} alt="" width={100} />
                  <p>{item.name}</p>
                </div>
                <div className="quantity">
                  <button type='button' disabled={btn} className='but' onClick={() => {
                    if (item.quantity!==1) {
                      return dispatch(CardArrayActions.Remove(item));
                    }
                    return setBtn(false);
                  }}><img src={remove} alt="" /></button>
                  <p> {item.quantity} X ${item.cost} </p>
                  <button type='button' className='but' onClick={() => {
                    setBtn(true);
                    console.log(btn);
                    dispatch(CardArrayActions.Add(item));
                  }}><img src={add} alt="" /></button>
                </div>
                <button type='button' className='but' onClick={() => {
                  dispatch(CardArrayActions.Remove(item));
                }}><img src={X} alt="" /></button>
              </li>
            </>
          ))}
        </ul>
      </div>
      <main style={{ display: "flex" }}>
        {array.map(item => (
          <div key={item.id} style={{ margin: "10px" }}>
            <img src={item.Img.CardImage} alt="" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: '0 20px' }}>
              <div className="title">
                <p>{item.name}</p>
                <b>${item.cost}.00</b>
              </div>
              <button type='button' onClick={() => {
                dispatch(CardArrayActions.Add(item));
              }}>
                <img src={Bucket} alt="" />
              </button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
