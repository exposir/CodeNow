# 组件和 Props

## 函数组件与类组件

React 提供了两种主要方式来定义组件：函数组件和类组件。这两种组件类型在很多方面是相似的，但也有一些关
键差异。

### **函数组件**

- **简洁性**: 通常更简洁，更易于理解和维护。
- **Hooks**: 可以使用 React Hooks（如 **`useState`**, **`useEffect`** 等）。
- **没有`this`关键字**: 函数组件没有实例，因此没有**`this`**。
- **无生命周期方法**: 原生不支持像 **`componentDidMount`** 这样的生命周期方法，但可以通过
  **`useEffect`** Hook 模拟。

例如：

```jsx
const MyComponent = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    /* ... */
  });
  return <div>{state}</div>;
};
```

### **类组件**

- **Verbosity**: 通常更详细，可能需要更多的样板代码。
- **生命周期方法**: 支持 **`componentDidMount`**, **`shouldComponentUpdate`** 等。
- **`this` 关键字**: 有自己的实例和实例方法。
- **无 Hooks**: 不能使用 Hooks。

例如：

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* ... */
    };
  }
  componentDidMount() {
    /* ... */
  }
  render() {
    return <div>{this.state.something}</div>;
  }
}
```

### **总结**

1. **性能**: 早期，函数组件被认为更轻量，但随着 React 的优化，性能差异已经不再明显。
2. **功能**: 原先类组件功能更丰富，但随着 Hooks 的引入，函数组件几乎可以做到与类组件一样多。
3. **社区趋势**: 函数组件和 Hooks 得到了社区的广泛接受，许多新的库和工具也更倾向于函数组件。

因此，选择使用函数组件或类组件很大程度上取决于个人或团队的喜好和特定需求。最重要的是保持一致性和可维
护性。

## 组件嵌套

组件嵌套是 React 和许多其他前端框架中的一个基础概念，它允许你在一个组件内部包含其他组件。这样做有几
个目的和优点：

- **代码复用**: 通过组件嵌套，你可以将 UI 拆分为多个可重用的部分。例如，一个 **`Button`** 组件可以在
  多个页面和场景中复用。
- **分离关注点**: 组件嵌套有助于将大型和复杂的 UI 分解为更小、更易于管理的部分。这样，每个组件都专注
  于一个单一的任务或功能。
- **维护性和可扩展性**: 易于维护和扩展。如果需要更改某个 UI 元素，只需更改相应的组件即可，而不是在多
  个位置进行更改。

### **组件嵌套的方式**

1. **直接嵌套**: 在父组件的 **`render`** 或 **`return`** 方法中直接包含子组件。

   ```jsx
   const ParentComponent = () => {
     return (
       <div>
         <ChildComponent />
       </div>
     );
   };
   ```

2. **通过 Props 传递**: 子组件可以通过 props 作为参数传递给父组件。

   ```jsx
   const ParentComponent = ({ children }) => {
     return <div>{children}</div>;
   };

   // 使用
   <ParentComponent>
     <ChildComponent />
   </ParentComponent>;
   ```

3. **条件嵌套**: 根据条件动态渲染子组件。

   ```jsx
   const ParentComponent = ({ condition }) => {
     return <div>{condition ? <ChildComponent /> : <AnotherComponent />}</div>;
   };
   ```

### **需要注意的点**

1. **Props 传递**: 父组件可以将 props 传递给子组件，但这也可能导致“props 钻孔”问题，即多层嵌套时，中
   间组件需要传递与它们不直接相关的 props。
2. **状态提升**: 如果多个嵌套组件需要共享状态，通常将状态提升到最近的共同父组件中。
3. **组件通信**: 嵌套组件通常需要一种方式进行通信。这可以通过 props，context API 或其他状态管理库
   （如 Redux）实现。
4. **循环依赖**: 要避免组件之间的循环依赖，这会导致维护问题和潜在的运行时错误。

综合来看，组件嵌套是一种强大的模式，但也需要注意管理复杂性，特别是在大型应用中。正确使用时，它可以大
大提高应用的可维护性和可扩展性。

## Props 的传递和使用

在 React 中，Props（Properties 的缩写）是一种在组件之间传递数据和函数的机制。Props 是 React 组件的输
入，与组件实例的状态相对照。Props 的传递和使用有几个关键方面和最佳实践。

### **Props 的基础使用**

1. **数据传递**: 父组件可以将数据传递给子组件作为 props。

   ```jsx
   const ChildComponent = ({ message }) => <div>{message}</div>;
   <ChildComponent message="Hello, world!" />;
   ```

2. **函数传递**: 除了数据，也可以传递函数。

   ```jsx
   const ChildComponent = ({ action }) => <button onClick={action}>Click me</button>;
   <ChildComponent action={() => console.log("Button clicked")} />;
   ```

### **类型检查**

React 有一个内建的类型检查机制，通常通过**`propTypes`**来定义。

```jsx
import PropTypes from "prop-types";

ChildComponent.propTypes = {
  message: PropTypes.string.isRequired,
  action: PropTypes.func
};
```

### **默认值**

你可以为 props 设置默认值，以防没有提供值或值为**`undefined`**。

```jsx
ChildComponent.defaultProps = {
  message: "Default message"
};
```

### **展开操作符**

当你有一个对象，并且你想将其所有属性作为 props 传递时，可以使用展开操作符。

```jsx
const myProps = { message: "Hello", action: () => console.log("Hi") };
<ChildComponent {...myProps} />;
```

### **只读性**

Props 在子组件中应该是不可变的。这意味着在子组件内不应该修改它们。

### **条件和动态 Props**

可以根据条件动态地设置 Props。

```jsx
<ChildComponent message={condition ? "Message 1" : "Message 2"} />
```

### **嵌套和组合**

Props 不仅可以传递基本数据类型和函数，还可以传递 React 元素和组件实例，允许高度灵活的组件嵌套和组
合。

```jsx
const ParentComponent = ({ children }) => <div>{children}</div>;
```

### **高阶组件和 Render Props**

Props 也是高阶组件和使用 render props 模式的基础，它们允许更高级别的组件抽象和重用。

### **考量点**

1. **Props 钻孔**: 在多层嵌套中，中间组件可能需要传递与自己无关的 props，这被称为“props 钻孔”，通常
   不推荐。
2. **API 设计**: 组件的 props API 应该简洁、一致并具有描述性。
3. **状态提升**: 如果两个子组件需要共享状态，将状态提升到它们的最近公共父组件，并通过 props 下传。
4. **不必要的重新渲染**: 传递新的 props 对象或数组（即使内容没有改变）可能导致不必要的重新渲染。

Props 是 React 组件间通信和复用逻辑的基础，合理使用 props 有助于创建可维护、可扩展和高度可重用的
React 应用。
