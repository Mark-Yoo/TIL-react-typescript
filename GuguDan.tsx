import * as React from 'react';
import { useState, useRef } from 'react';

// <> === React.Fragment
const GuguDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult('정답');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      if (input) {
        // input!.focus() 와 같이 느낌표를 사용하기 위해서는 input이 절대로 null이 아니라는 확신이 필요하다. 만에 하나 null 값일 경우 에러가 발생할 수 있기 때문이다.
        input.focus();
      }
    } else {
      setResult('땡');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  }

  return (
    <>
      <div>{first} 곱하기 {second}는 ?</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} type="number" value={value} onChange={(e) => setValue(e.target.value)}></input>
      </form>
    </>
  )
}

export default GuguDan;