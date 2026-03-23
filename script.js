function decrypt(text, shift = 3) {
  return text
    .split("")
    .map(char => {
      if (/[a-zA-Z]/.test(char)) {
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

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  );
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].date < right[j].date) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

const messages = [
  { date: "2023-04-11", content: "Wklv lv d whvw phvvdjh" },
  { date: "2023-04-09", content: "Frgxlq jfkliuh" },
  { date: "2023-04-12", content: "Uhjlvqhlq jklwnh" },
  { date: "2023-04-10", content: "Dqrwkhu whvw phvvdjh" }
];

function App() {
  const decrypted = messages.map(msg => ({
    ...msg,
    content: decrypt(msg.content)
  }));

  const sorted = mergeSort(decrypted);

  return (
    <div>
      <h1>Aryabhatta's Message Decrypter</h1>

      <ul id="message-container">
        {sorted.map((msg, i) => (
          <li key={i}>
            {msg.date}: {msg.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 👇 IMPORTANT (no export)
ReactDOM.render(<App />, document.getElementById("root"));