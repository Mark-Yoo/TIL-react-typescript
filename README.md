# Adapts Typescript to React

---

## 1. 프로젝트의 의의
> React에 Typescript를 적용하여 활용하기 위한 공부
>
> 동적으로 타입을 추론하는 Javascript는 인자로 받는 값이 정확히 어떤 값인지 출력하지 않는 이상 제대로 알 수 없고 에러를 캐치하지 못하는 경우가 생겨 시간을 낭비하기도 한다. 그러한 부분적 문제를 해소하고 팀프로젝트에서 조금 더 혼란을 없애기 위해서 타입스크립트의 사용이 필수적으로 필요해지는 상황이다.

## 2. 공부 순서

- [구구단](https://github.com/Mark-Yoo/TIL-react-typescript/blob/master/GuguDan.tsx)

- [구구단(클래스 사용)](https://github.com/Mark-Yoo/TIL-react-typescript/blob/master/GuguDanClass.tsx)

- [끝말잇기](https://github.com/Mark-Yoo/TIL-react-typescript/blob/master/WordRelay.tsx)

- [끝말잇기(클래스 사용)](https://github.com/Mark-Yoo/TIL-react-typescript/blob/master/WordRelayClass.tsx)

- [반응속도 체크](https://github.com/Mark-Yoo/TIL-react-typescript/blob/master/RespondCheck.tsx)

  

## 3. 프로젝트에서 배운 점
> 타입스크립트에서 import React from 'react' 등을 사용할 수 없는 이유는 react에 default가 없기 때문이다. 때문에 import * as React from 'react'를 사용하거나 tsconfig.json에서 esModuleInterop: true를 설정해서 사용 할 수 있다.

- input!.focus() 와 같이 타입에 느낌표를 사용하기 위해서는 input이 절대로 null이 아니라는 확신이 필요하다. 만에 하나 null 값일 경우 에러가 발생할 수 있기 때문이다.

- useState가 자동으로 타입추론을 해주는 것으로 보이지만 스스로 타입추론을 하지 못하는 경우도 생기므로 이 때에는 제네릭을 사용하여 임의로 타입을 정해줘야하는 경우가 생길 수 있으므로 주의해야 한다.

  > React에서 제안하는 개발 방향은 대부분 class보다는 hooks를 사용하는 방안이며 대체로 코드는 hooks가 더 짧다.

- useCallback으로 함수를 감싸는 경우에 생길 수 있는 문제로는 타입추론이 제대로 되지 않는 경우를 들 수 있는데 useCallback으로 감싸진 함수의 파라미터가 any 타입으로 추론되는 경우가 생긴다. 이를 해결하기 위해서 useCallback에 제네릭을 사용하여 타입을 정해줄 수도 있으나 인라인으로 제네릭을 사용할 경우 코드가 길어지므로 별도의 함수로 분리하는 것을 추천한다.
  
- 제네릭을 사용하면 타입 추론이 잘 되는 대신 가독성이 떨어진다는 단점이 있다.
  
- current가 Readonly 인 것은 useRef의 종류가 약 3가지 정도 된다는 점에서 착안한다. useRef를 사용하면 값이 바뀌어도 화면 리렌더링이 일어나지 않는데, type definition를 살펴보면 RefObject를 반환하는 useRef와 MutableRefObject를 반환하는 useRef가 대표적인데 제네릭이 undefined인지, null인지의 여부에 따라 이 세가지로 나눠지게 된다.

- 항상 definition의 속성을 확인한 상태에서 가장 정확한 문법을 사용해야한다.

- node.js와 브라우저의 문법을 구분하지 않으면 생길 수 있는 오류들이 존재하므로 주의가 필요하다.

---

## 타입스크립트 개별 공부

- 제네릭 방식 타입 - 타입이 고정된 함수를 만들기보다는 T[ ] 형태로 배열의 아이템 타입을 한꺼번에 표현하는 것이 편리함. 타입을 변수처럼 취급하는 것을 제네릭 타입이라고 한다.

```typescript
const arrayLength = (array: T[]): number => array.length;
// 이와 같은 경우 T가 타입 변수(type-variable)이라고 컴파일러가 알 수 있어야 한다.

const arrayLengthWithGeneric = <T>(array: T[]): number => array.length;
// 위와 같이 T가 타입 변수임을 명시해주는 것으로 다양한 배열 타입에 모두 정상적으로 대응하는 코드를 만들 수 있게 된다.

```

- 제네릭 함수의 타입 추론 기능

  ```typescript
  // 제네릭 형태로 구현된 함수는 타입 변수를 활용하는 명태로 명시해주어야 한다.
  // 함수 이름<타입 변수>(매개변수)
  // 하지만 타입 변수를 적어주지 않더라도 타입 추론을 통해서 생략된 타입을 찾아낸다.
  
  
  const identifyBoolean = <T>(n: T): T => n;
  
  // ex1
  console.log(identifyBoolean<Boolean>(true));
  
  // ex2
  console.log(identify(true));
```
  
  

