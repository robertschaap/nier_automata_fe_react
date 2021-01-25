import React, { useEffect, useState } from 'react';

import { config } from 'utils/config';

const randomCharacter = (string: string) => {
  return string[Math.floor(Math.random() * string.length)] || '';
};

const randomisedString = (string: string) => {
  return string.split('').reduce((a, v, i) => {
    const prefix = string.slice(0, i);

    return a.concat(prefix + randomCharacter(string), prefix + randomCharacter(string), prefix + v);
  }, [] as string[]);
};

export const WriteText: React.FC<{ text: string }> = React.memo(({ text }) => {
  if (!config.SHOW_DISTRACTIONS) {
    return (
      <>{text}</>
    );
  }

  const [writtenText, setWrittenText] = useState(randomisedString(text));

  useEffect(() => {
    let timer: number;

    if (writtenText.length > 1) {
      timer = window.setTimeout(() => {
        setWrittenText(writtenText.splice(1));
      }, 15);
    }

    return () => window.clearTimeout(timer);
  }, [writtenText]);

  return (
    <>
      {writtenText[0]}
    </>
  );
});
