import { ChangeEvent, useCallback, useState } from "react";

import { MemoList } from "./components/MemoList";

export default function App() {
  // inputの中身のstate
  const [text, setText] = useState<string>("");
  // メモ一覧のstate
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // ボタン押したら一覧に追加
  const onClickAdd = () => {
    // 配列を新規作成
    const newMemos = [...memos];
    // 配列にtextを追加
    newMemos.push(text);
    // memosの中身を更新
    setMemos(newMemos);
    // inputの中身を空にする
    setText("");
  };

  // ボタンを押したらそのメモを削除
  const onClickDelete = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
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
