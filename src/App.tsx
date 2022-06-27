import { ChangeEvent, useCallback, useState } from "react";
import { useMemoList } from "./hooks/useMemoList";
import { MemoList } from "./components/MemoList";

export default function App() {
  // inputの中身のstate
  const [text, setText] = useState<string>("");

  const { memos, addTodo, deleteTodo } = useMemoList();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // ボタン押したら一覧に追加
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  // ボタンを押したらそのメモを削除
  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <div>
        <input type="text" value={text} onChange={onChangeText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
}
