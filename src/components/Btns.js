import { useState } from 'react';

function Btns(props) {

  let [index, setIndex] = useState(0);

  function move(moveIndex) {
    setIndex(moveIndex);
    props.frame.current.style.transform = `rotate(${props.deg * index}deg)`;
  }

  /*
  let x = 5, result;

  //선할당 후증가
  result = x++;
  console.log(result, x);  // 5,6

  //선증가 후할당
  result = ++x;
  console.log(result, x);  // 7,7

  //선할당 후감소
  result = x--;
  console.log(result, x);  // 7,6

  //선감소 후 할당
  result = --x;
  console.log(result, x);  // 5,5
  */

  return (
    <>
      <div className="btnPrev" onClick={()=>{move(++index)}}>
        <span>PREV</span>
      </div>
      <div className="btnNext" onClick={()=>{move(--index)}}>
        <span>NEXT</span>
      </div>
    </>
  )
}

export default Btns;