import * as React from 'react';
import { Component, createRef } from 'react';

interface State {
  state: 'waiting' | 'now' | 'ready';
  message: string;
  result: number[];
}

class RespondCheckClass extends Component<{}, State> {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하기',
    result: [],
  };

  // 화면에 영향을 주지 않는 상태들은 ref로 만든다.
  timeout: number | null = null;
  startTime: number | null = null;
  endTime: number | null = null;
}

export default RespondCheckClass;