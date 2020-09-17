# Adapts Typescript to React

## 1. 프로젝트의 의의
> React에 Typescript를 적용하여 활용하기 위한 공부

## 2. 프로젝트에서 배운 점
> 타입스크립트에서 import React from 'react' 등을 사용할 수 없는 이유는 react에 default가 없기 때문이다. 때문에 import * as React from 'react'를 사용하거나 tsconfig.json에서 esModuleInterop: true를 설정해서 사용 할 수 있다.