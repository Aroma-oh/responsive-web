# Responsive-web 
반응형 웹을 연습하기 위한 리포지토리입니다. </br>
`grid` 또는 `flex`로 레이아웃을 만들어 _일관성 있는 반응형 웹_ 을 만들고자 고민했습니다.

## Grid
* Grid section, Grid element는 모두 컴포넌트화하여 재사용성을 높이고자 했습니다.
* 하지만 grid column 개수를 section과 element가 공유하는 방법,
* break point에 따라 `grid-column`을 동적으로 바꾸는 좋은 방법을 찾지 못해 재사용성을 높이지는 못했습니다. 
#### Grid section
```
const GridStyled = styled.section<GridProps>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  ...
```
#### Grid element 
```
export const CardStyled = styled.div<CardProps>`
  grid-column: ${(props) => `${props.start} / ${props.end}`};
  ...

  @media (max-width: 480px) {
    grid-column: 1 / 7;
  }
`
```

## Flex
* `flex: 1 1 n%` 속성 값으로도 break point에 따른 대응을 할 수 있음을 배웠습니다.
* 미디어 쿼리를 적용하기에는 Grid보다 Flex 속성을 적용하는 것이 더 깔끔하다고 느꼈습니다. 
#### Flex section
```
const FlexStyled = styled.section<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ? `${direction}` : `row`};
  flex-wrap: ${({ wrap }) => wrap ? `${wrap}` : `wrap`};
`
```
#### Flex element

```
export const CardStyled = styled.div<CardProps>`
  flex: ${({ pb }) => pb ? `1 1 ${pb}%` : `30%`};
   ...
  @media (max-width: 480px) {
    flex: ${({ mb }) => mb ? `1 1 ${mb}%` : `100%`};
  }
  @media ((min-width: 480px) and  (max-width: 900px)) {
    flex: ${({ tb }) => tb ? `1 1 ${tb}%` : `40%`};
  }
`
```
