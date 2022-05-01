import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log("再レンダリング");
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！！</h1>
      <ColoredMessage color="blue">元気ですかー</ColoredMessage>
      <ColoredMessage color="pink">元気だよー</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
