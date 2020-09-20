import * as React from 'react';
import { useState, useCallback, useRef } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('감자');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback((e: React.FormEvent) => {

  }, []);
  
  const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setValue(e.currentTarget.value);
  }, []);

  return(
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChange}>입력</input>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordRelay;