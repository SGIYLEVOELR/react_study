import "./App.css";
import Counter from "./Counter";
import Hello from "./Hello";
import InputSample from "./InputSample/InputSample";
import InputSampleDOM from "./InputSample/InputSampleDOM";
import InputSampleM from "./InputSample/InputSampleM";
import UserList from "./UserList/UserList";
import UserListUp from "./UserList/UserListUp";
import Wrapper from "./Wrapper";

function App() {
  const name = "Apple";
  const style = {
    backgroundColor: "#282c34",
    color: "#61dafb",
    fontSize: 24, // 기본 단위 :: px
    padding: "1rem", // px이 아닌 다른 단위 사용 시 단위 꼭 붙이기
  };
  return (
    <div className="App">
      <Hello name={name} color="red" />
      <header>
        <div style={style}>RESTART</div>
        <div className="gray-box"></div>
        {/* 주석은 화면에 보이지 않습니다. */}
        /* 중괄호로 감싸지 않으면 화면에 보입니다. */
        <Hello
          color="#61dafb"
          // 열리는 태그 내부에서는 이렇게 주석을 작성할 수 있습니다.
        />
      </header>
      <Hello />
      <hr />
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello name="react" color="blue" isSpecial />
        <Hello color="#61dafb" />
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "2px solid #282c34",
          margin: "20px",
        }}
      >
        <Counter />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "2px solid #282c34",
          margin: "20px",
        }}
      >
        <InputSample />
        <InputSampleM />
        <InputSampleDOM />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "2px solid #282c34",
          margin: "20px",
        }}
      >
        <UserList />
        <UserListUp />
      </div>
    </div>
  );
}

export default App;
