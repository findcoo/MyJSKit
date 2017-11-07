***이 글은 webpack3 문서를 해석한 글 입니다.***

# Loader
빌드 과정에 파일을 변환하는 방식을 설정한다. 
전처리기의 빌드 과정과 유사하다( Coffee라던가.. TypeScript라던가) 
주 사용처는 js 파일의 이미지를 URL로 변경한다던가 css 파일을 `import`한다.


## 사용법
```javascript
module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test:/\.ts$/, use: 'ts-loader' }
        ]
    }
};
```

```javascript
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

적용 방식에는 위에 두 예제 처럼 설정 파일을 이용한 방식과 인라인 방식으로 나뉜다.
인라인 방식은 혐오스러우닌깐 하지말자.

한술 더 떠서 CLI로 추가하는 방식도 있다.
```javascript
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

위에 방식은 배포간에 loader변경이 필요하다면 유용할 것으로 보인다.

## 주의할 점
loader는 좀 더 주의할 점이 몇 가지있는데, 

**처리 주기가 연쇄적으로 일어난다는 것**

( rules 속성을 보면 `Array<Object>` 형식인걸 알 수 있듯이 loader는 순차적으로 실행되며 앞선 loader의 결과물이 이후 loader에게 전달되며 이는 반복적으로 이루어진다. ), 

**Loader는 비동기적으로 호출 될 수 있다.**

( 당혹스럽지만, node.js에서 구동됨으로 이는 당연히 가능하다. 이는 웹팩에서 비동기적으로 호출하는게 아니라 loader자체가 비동기적으로 호출되는 요소이니 오해해서는 안된다. 반드시 loader의 특징을 숙지할 필요가 있겠다.)

이외에도 `options` Object를 이용한 loader 설정등 많지만 나머지 부분은

[Go To Loader's features ](http://www.url.com)

위 링크에 자세히 나와있다.

## 정리
파일 변환기다. 여려가지 설정법과 호출 방법이 있다.
