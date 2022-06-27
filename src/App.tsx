// style
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

export default function App() {
  // inputの中身のstate
  const [text, setText] = useState<string>("");
  // メモ一覧のstate
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

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

  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <div>
        <input type="text" value={text} onChange={onChangeText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <SMemoList>
        <h3>メモ一覧</h3>
        <ul>
          {memos.map((memo, index) => (
            <>
              <li key={memo}>{memo}</li>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </>
          ))}
        </ul>
      </SMemoList>
    </div>
  );
}

const SMemoList = styled.div`
  border: solid 1px black;
`;
