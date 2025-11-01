// App.jsx
import "./App.css";
import ErrorStartTemplate from "./components/ErrorStartTemplate";

function Header() {
  return <h1>✅ 나는 헤더</h1>;
}

function Footer() {
  return <h2>✅ 나는 푸터</h2>;
}

function App() {
  return (
    <div>
      <Header />
      <ErrorStartTemplate />
      <Footer />
    </div>
  );
}

export default App;
