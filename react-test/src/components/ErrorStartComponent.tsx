// ErrorStartComponent.jsx
import { useState } from "react";

const ErrorStartComponent = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("컴포넌트 렌더링 중 에러 발생!");
  }

  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
        setError(true);
      }}
    >
      Count is {count} (4 이상 → 에러)
    </button>
  );
};

export default ErrorStartComponent;
