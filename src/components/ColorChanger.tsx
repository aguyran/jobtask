import React, { useState } from "react";

const ColorChanger = function ({
  setter,
  value,
}: {
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [edit, setEdit] = useState<boolean>(false);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setter(e.currentTarget.value);
  };
  return (
    <div
      className="fixed right-8 bottom-8 bg-yellowOwl p-4 rounded-lg text-xl z-10"
      onClick={() => {
        setEdit(true);
      }}
    >
      {!edit ? (
        "#222222"
      ) : (
        <input
          type={"text"}
          className="bg-yellowOwl outline-none"
          value={value}
          onChange={handleChange}
        ></input>
      )}
    </div>
  );
};
export default ColorChanger;
