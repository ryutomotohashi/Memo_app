import { ChangeEvent, FC, memo, useState } from "react";

export const Search: FC = memo(() => {
  const [text, setText] = useState<string>();

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <button>追加</button>
    </div>
  );
});
