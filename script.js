//your JS code here. If required.
import React from "react";

const messages = [
  { date: "2023-04-11", content: "Wklv lv d whvw phvvdjh" },
  { date: "2023-04-09", content: "Frgxlq jfkliuh" },
  { date: "2023-04-12", content: "Uhjlvqhlq jklwnh" },
  { date: "2023-04-10", content: "Dqrwkhu whvw phvvdjh" }
];

// 🔐 Caesar Cipher Decryption (shift = 3)
function decrypt(text, shift = 3) {
  return text
    .split("")
    .map(char => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);

        let base = code >= 65 && code <= 90 ? 65 : 97;

        return String.fromCharCode(
          ((code - base - shift + 26) % 26) + base
        );
      }
      return char;
    })
    .join("");
}

// 🔀 Merge Sort by Date
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].date < right[j].date) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

export default function App() {
  // Decrypt messages
  const decryptedMessages = messages.map(msg => ({
    ...msg,
    content: decrypt(msg.content)
  }));

  // Sort messages by date
  const sortedMessages = mergeSort(decryptedMessages);

  return (
    <div>
      <h1>Aryabhatta's Message Decrypter</h1>

      <ul id="message-container">
        {sortedMessages.map((msg, index) => (
          <li key={index}>
            {msg.date}: {msg.content}
          </li>
        ))}
      </ul>
    </div>
  );
}