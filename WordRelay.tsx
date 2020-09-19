import * as React from 'react';
import { useState } from 'react';

const WordRelay = () => {
  return(
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={(e) => setValue(e.currentTarget.value)}>입력</input>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordRelay;