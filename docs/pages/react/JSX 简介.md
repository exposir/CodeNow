# JSX 简介

## JSX 基础

JSX (JavaScript XML) 是一种 JavaScript 的语法扩展，常用于 React 库中。它允许你用类似于 HTML 的标记语法来描述 UI 组件的结构和内容。这使得 UI 的代码更直观和易于理解。在编译时，这些 JSX 表达式会被转换为标准的 JavaScript 函数调用和对象，通常是通过 Babel 这类工具完成。

### **背景与假设**

1. JSX 不是严格的 HTML 或 XML，有一些语法差异，比如 **`className`** 代替 **`class`**。
2. JSX 是可选的，但在 React 生态系统内普遍使用。
3. 在 JSX 中，可以直接嵌入 JavaScript 表达式，通常放在花括号 **`{}`** 中。

### **基础使用**

```jsx
const element = <h1>Hello, world!</h1>;
```

### **嵌入表达式**

```jsx
const name = "John";
const element = <h1>Hello, {name}</h1>;
```

### **组件嵌套**

```jsx
const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};
```

### **动态属性与事件处理**

```jsx
const handleClick = () => alert("Clicked");
const element = <button onClick={handleClick}>Click Me</button>;
```

### **关键点**

- JSX 提供了一种直观的方式来构造 UI。
- 它实际上是被转换为 React.createElement() 调用。
- JSX 允许开发者在标记中嵌入 JavaScript 逻辑。

JSX 是 React 开发中的一个重要部分，它提供了一种高效、直观的方法来构建和描述组件树。

## JSX 与 HTML 的区别

JSX（JavaScript XML）和 HTML 在外观上非常相似，但两者之间有一些重要的差异。了解这些差异对于有效地使用 JSX 在 React 中构建 UI 是至关重要的。

### **背景和假设**

1. HTML 是用于构建和描述网页的标记语言。
2. JSX 是 JavaScript 的语法扩展，通常用于 React 程序中描述 UI 结构。

### **区别**

1. **属性名称**: 在 HTML 中，属性名称通常是小写的，如 **`onclick`** 和 **`tabindex`**。在 JSX 中，这些变成 camelCase，例如 **`onClick`** 和 **`tabIndex`**。
2. **类名指定**: HTML 使用 **`class`** 属性，而 JSX 使用 **`className`**。

   ```jsx
   // JSX
   <div className="App">Hello</div>
   ```

3. **自闭合标签**: 在 HTML 中，某些标签（例如 **`br`**, **`img`**）可能不需要闭合，但在 JSX 中必须显式地闭合它们。

   ```jsx
   // JSX
   <img src="image.jpg" alt="description" />
   ```

4. **JavaScript 表达式**: JSX 允许在花括号 **`{}`** 中直接嵌入 JavaScript 表达式。

   ```jsx
   // JSX
   <h1>{`Hello, ${user}`}</h1>
   ```

5. **逻辑运算和条件**: JSX 允许更复杂的逻辑，如条件渲染。

   ```jsx
   jsxCopy code
   // JSX
   {showHeader && <Header />}

   ```

6. **样式定义**: 在 HTML 中，样式是字符串形式的。在 JSX 中，样式通常是对象。

   ```jsx
   // JSX
   <div style={{ color: "blue", fontSize: "14px" }}>Text</div>
   ```

7. **执行环境**: HTML 是在浏览器环境中解析和执行的，而 JSX 是在 JavaScript 环境中解析并最终转化为 **`React.createElement()`** 调用。

### **关键点**

- JSX 使用 camelCase，而 HTML 使用小写属性。
- JSX 需要所有标签都要闭合。
- JSX 允许在代码中直接嵌入 JavaScript 逻辑和表达式。

总体而言，虽然 JSX 和 HTML 在语法上有很多相似之处，但 JSX 提供了更多的灵活性和扩展性，这有助于在复杂的应用程序中更有效地描述 UI。
