import { FC, Fragment } from "react";

const SplitText: FC<{ text: string }> = ({ text }) => {
  const word_arr = text.split(" ");
  return (
    <Fragment>
      {word_arr.map((word, i) => (
        <span key={i} className="inline-block mr-2">
          {word.split("").map((char, j) => (
            <span key={j} className="inline-block letters">
              {char}
            </span>
          ))}
        </span>
      ))}
    </Fragment>
  );
};

export default SplitText;
