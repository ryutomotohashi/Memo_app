import { FC, memo } from "react";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = memo((props) => {
  const { memos, onClickDelete } = props;

  return (
    <div>
      <h3>メモ一覧</h3>
      <ul>
        {memos.map((memo, index) => (
          <div style={{ display: "flex" }}>
            <li key={memo}>{memo}</li>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  );
});
