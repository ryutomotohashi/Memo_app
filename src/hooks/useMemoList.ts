import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      const newMemo = [...memos];
      newMemo.push(text);
      setMemos(newMemo);
    },
    [memos]
  );

  const deleteTodo = useCallback(
    (index: number) => {
      const newMemo = [...memos];
      newMemo.splice(index, 1);
      setMemos(newMemo);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
