# Adapts Typescript to React

## 1. 프로젝트의 의의
> React에 Typescript를 적용하여 활용하기 위한 공부

## 2. 프로젝트에서 배운 점
> 타입스크립트에서 import React from 'react' 등을 사용할 수 없는 이유는 react에 default가 없기 때문이다. 때문에 import * as React from 'react'를 사용하거나 tsconfig.json에서 esModuleInterop: true를 설정해서 사용 할 수 있다.

- input!.focus() 와 같이 타입에 느낌표를 사용하기 위해서는 input이 절대로 null이 아니라는 확신이 필요하다. 만에 하나 null 값일 경우 에러가 발생할 수 있기 때문이다.

- useState가 자동으로 타입추론을 해주는 것으로 보이지만 스스로 타입추론을 하지 못하는 경우도 생기므로 이 때에는 제네릭을 사용하여 임의로 타입을 정해줘야하는 경우가 생길 수 있으므로 주의해야 한다.

  > React에서 제안하는 개발 방향은 대부분 class보다는 hooks를 사용하는 방안이며 대체로 코드는 hooks가 더 짧다.

