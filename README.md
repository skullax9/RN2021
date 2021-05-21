# 이영찬 201740130
## React Native Android (2021)

## 05월 21호
>1. Component의 수직, 수평 정렬 (alignItems)
>>* flex 요소의 수직 방향 정렬 방식 설정
>>* 두 줄 이상을 가지는 flex 에서 효과 발생
```css
cardContainer: {
        alignItems: 'center',
        ...
}
```
![캡처](https://user-images.githubusercontent.com/70187273/119085237-51520300-ba3e-11eb-90cb-05fc93b77e86.PNG)

>2. font family 지정
>>* fontFamily 속성에 여러개의 폰트 지정 가능
>>* iOS에선 monospace 사용 불가
>>* 기본 폰트 외 다른 폰트 사용시 Platform 컴포넌트 이용
```javascript
import {Platform,Stylesheet,Text,View} from 'react-native';
~
{Platform.OS}
~
centeredText: {
    ~,
    ...Platform.select({
        ios: {
            ~
        },
        android: {
            ~
        }
    })
}
```
![캡처](https://user-images.githubusercontent.com/70187273/119086672-cf170e00-ba40-11eb-96ee-ab7a1f3c86b6.PNG)


## 05월 14일
>1. Component 스타일 (border)
>>* border는 컴포넌트의 테두리를 뜻한다.
>>* 속성은 크게 네가지로 나뉜다. Color, Radius, Style, Width
```javascript
<Example style={{borderWidth: 1}}>    
    <Text>borderWidth: 1</Text>
</Example>
<Example style={{borderWidth: 3, borderLeftWidth: 0}}>    
    <Text>borderWidth: 3, borderLeftWidth: 0</Text>
</Example>
<Example style={{borderWidth: 3, borderLeftColor: 'red'}}>    
    <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
</Example>
<Example style={{borderLeftWidth: 3}}>    
    <Text>borderLeftWidth: 3</Text>
</Example>
<Example style={{borderWidth: 1, borderStyle: 'dashed'}}>    
    <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
</Example>
```
![캡처](https://user-images.githubusercontent.com/70187273/118224688-a3cf7480-b4be-11eb-8bf1-9c6012021b21.PNG)

>2. Component 스타일 II (margin, padding)
>>* margin을 이용하여 컴포넌트 사이의 상대적 위치를 정의
>>* padding을 이용하여 컴포넌트 테두리로 부터 컴포넌트의 상대적 위치를 정의
>>* 컴포넌트 속성별 영역의 상호 연관성

![캡처](https://user-images.githubusercontent.com/70187273/118226530-2148b400-b4c2-11eb-958f-fff70ffd3d2f.PNG)
```javascript
//margin
<Example style={{}}/>   //A
<Example style={{marginTop: 50}}/>   //B
<Example style={{marginTop: 50, marginLeft: 10}}/>   //C
<Example style={{marginLeft: -10, marginTop: -10}}/>  //D
```
![캡처](https://user-images.githubusercontent.com/70187273/118229874-b7cba400-b4c7-11eb-9864-1020b1d0345d.PNG)
```javascript
//padding
<Example style={{}}/>   //A
<Example style={{paddingTop: 50}}/>   //B
<Example style={{paddingTop: 50, paddingLeft: 10}}/>   //C
<Example style={{paddingLeft: -10, paddingTop: -10}}/>  //D
```
![캡처](https://user-images.githubusercontent.com/70187273/118229916-c74aed00-b4c7-11eb-8b40-763c98635c22.PNG)

>3. Component 스타일 III (position)
>>* 리액트 네이티브에서 모든 요소는 다른 요소들에 상대적으로 배치
>>* absolute로 지정되면 해당 요소의 위치는 부모요소의 위치를 기준으로 배치
>>* absolute(절대값)와 relative(상대값) 두가지 속성 존재
>>* css의 static, fixed 지원X
```javascript
<View style={styles.row}/> //A B C
<View style={[styles.tinyExample, {position:'absolute', right:0, bottom: 0}]}/> //D
<Example style={{position: 'absolute', right:0, bottom:0}}>
```
```css
row:{
    flex: 1,
    flexDirection: 'row'
}
```
![캡처](https://user-images.githubusercontent.com/70187273/118230673-04fc4580-b4c9-11eb-87d3-0810048fda31.PNG)



## 05월 07일
>1. Component 선언방법 두가지
>>* class : state,liftCycle 관련 기능 사용 가능하고 임의 메소드를 정의 할 수 있다.
>>* function : state,liftCycle 관련 기능 사용 불가하고 컴포넌트 선언이 편리하다.
```javascript
// class 형태
class Project extends Component {
    render() {
        const name = "class";
        return (
            <div>{name}</div>
        )
    }
}

//function 형태
function Project() {
    const name = 'function';
    return <div>{name}</div>;
}
```

>2. 구조 분해 할당
>>* 구조 분해를 사용하면 객체 안에 있는 필드 값을 원하는 변수에 대입할 수 있다.
>>* 코드의 가독성을 높이고 간략화를 할 때 유용하게 사용된다.
```javascript
// 배열
let arr = ["react","native"]

let [first,second] = arr;

console.log(first); // react
cossole.log(second); // native

//객체
let arr2 = {
    p1: "A",
    p2: "B",
    P3: "C"
};

let {p1,p2,p3} = arr2;

cossole.log(p1); // A
cossole.log(p2); // B
cossole.log(p3); // C
```

>3. AppRegistry
>>* AppRegistry를 통하여 시작하는 컴포넌트를 지정할 수 있다
>>* 해당 컴포넌트의 render 메소드를 통해 뷰를 렌더링한다.

## 04월 30일
>1. 리액트 네이티브 스타일 적용과 관리
>> - 내장 컴포넌트의 특정 스타일 지원
>> - ex) View 컴포넌트 -> shadowColor, Text 컴포넌트 -> textShadowColor
>> - 스타일의 적용법 3가지
>> - render 메소드와 스타일 분리
>2. 스타일 구성
>> - 스타일은 컴포넌트 단위로 적용
>> - 스타일시트 선언을 통한 완전한 캡슐화 가능
>> - 스타일 파일의 확장자는 js 

## 04월 16일
>1. 렌더링을 위한 2개의 컴포넌트 작성
>2. 배열을 매핑하여 새로운 컴포넌트 만들기
>3. toggleComplete와 deleteTodo 메소드의 역할과 작동 방식
>4. todo에 전달한 버튼 컴포넌트 제작

## 04월 09일
>1. 리액트 네이티브를 통한 앱의 동작 방식
>2. ScrollView의 특징과 역할

## 04월 02일
>1. state가 없는 컴포넌트의 props 사용시기
>2. 컴포넌트가 수행하는 동작의 제어방법
>3. 컴포넌트 스펙의 종류 (render, constructor, statics)
>4. render 메소드의 특징
>5. 리액트 생명주기 메소드

## 03월 26일
>1. 컴포넌트 state의 속성과 특징
>2. 초기 state의 초기화와 사용법
>3. onPress의 특징    
>4. state를 갱신하기 위한 setState 메소드의 활용
>5. props의 정의와 속성
>6. 정적 props와 동적 props의 차이