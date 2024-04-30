import React from 'react';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
}

export default function Button({ bgColor, textColor, text}: ButtonProps) {
  return (
    <button className={`font-bold py-2 px-4 rounded`} style={{backgroundColor:`${bgColor}`, color:`${textColor}`}}>
      {text}
    </button>
  );
}

