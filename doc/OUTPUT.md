***이 글은 webpack3 문서를 해석한 글 입니다.***

# Output
빌드한 결과를 파일로 남긴다. 기본적으로 하나의 output 지점을 갖는다.( entry가 다수여도 )

## 문법
```javascript
const config = {
    output: {
        filename: 'bundle.js',
        path: './build'
    }
};

module.exports = config;
```

output의 타입 js object다. 속성으로는 `filename`과 `path`를 갖는다.( 자세한 건 설명 안해도...)

페이지 별 혹은 다수의 entry point를 통해 의존성을 나눌 때에는 output 또한 파일을 나누어주어야한다.
이 때 `[name]` 값을 통해 템플릿 형식으로 entry의 속성값을 주입 할 수 있다.
```javascript
const config = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    }
}
```
위와 같은 템플릿이 가능한 것은 [TemplatePathPlugin](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js)
기본적으로 내장되어 있기 때문이다. `filename`에 할당된 템플릿 값들은 webpack의 configuration 문서에서 확인할 수 있다. 

[Link](https://webpack.js.org/configuration/output/#output-filename)
소소한 팁으로 `[hash]`를 통해 build된 파일에 hash 값을 부여 할 수 있다.
