import * as React from 'react';
import { FunctionComponent } from 'react';
import { TryInfo } from './NumberBaseball';

// state는 useState가 대체하여 제네릭에서 타이핑이 없다.
const Try: FunctionComponent<{tryInfo: TryInfo}> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;