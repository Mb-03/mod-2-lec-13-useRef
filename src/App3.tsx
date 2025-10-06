import { useState } from "react";

const App3 = () => {
  type User = {
    name: string;
    age: number;
  };

  // const [name, setName] = useState<string>("")
  const [name, setName] = useState<User | null>({ name: "", age: 20 });

  // const [status, setStatus] = useState<"loading" | "success" | "error">("error")

  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default App3;
