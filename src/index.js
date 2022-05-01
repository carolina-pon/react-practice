import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// JSX記法で関数の返却値としてHTMLのタグが記述でき、コンポーネントとして扱って画面を構成する
//retutn以降の内容は()で囲うが、1つのタグで囲う必要がある
// return (
// <h1>こんにちは！！</h1>
// <p>お元気ですか？？</p>
// ); これはエラー出る

// return (
//   <div>
//     <h1>こんにちは！！</h1>
//     <p>お元気ですか？？</p>
//   </div>
// ); これならオッケー