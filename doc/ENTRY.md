***이 글은 webpack3 문서를 해석한 글 입니다.***

# Entry
빌드의 시작점을 뜻한다. 하나의 시작점을 지정 할 수도 있고 여러개의 시작점을 지정할 수 있다.
여러 시작점을 지정하는 경우는 보통 의존성 독립을 위하여 사용된다.

## 문법
```javascript
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};
```

document를 확인하면 entry 속성의 형식은 `string | Array<string>`이다. 하지만 위에
예제는 `Object`임을 확인할 수 있다.( 입맛 대로... ) 좀 더 상세한 의존성 관리를 원한다면
위에 방식처럼 `Object`로 선언 할 것을 추천한다. 

좀 더 상세한 의존성 분리는 [DllPlugin](https://webpack.js.org/plugins/dll-plugin/)를 사용한다.( 원 솔루션으로는 안되는 듯 )

## Multi Page Application
```javascript
const config = {
    etnry: {
        pageOne: './src/page1/index.js',
        pageTwo: './src/page2/index.js',
        pageThree: './src/page3/index.js'
    }
}
```

페이지가 여러 가지로 나뉘는 앱을 만들시에는 페이지 별로 의존성을 나눈다. 이 때 모든 페이지들이 필요로 하는 영역으로 
공유 영역으로 설정하는데 [CommonChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/)를 사용한다.

## 정리
entry는 webpack에서 빌드의 시작점이며 의존성을 나누는 요소이다. 의존성을 나눌시에는 나누는 것에만 관여하며
이 후 이를 보완하기 위한 plugin이 있다는 것을 숙지해야겠다.
