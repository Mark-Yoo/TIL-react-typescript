import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import Try from './Try';

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for(let i = 0; i < 4; i += 1) { // 랜덤한 숫자를 4개 (중복 X)
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t, {
          try: value,
          result: '홈런',
        },
      ]));
      setResult('홈런');
      alert('게임을 다시 시작합니다.');
      setValue('');
    }
  }, [answer, value]);

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} maxLength={4} value={value} onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), [])} />
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
        ))}
      </ul>
    </>
  )
}