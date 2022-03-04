/*
pokaz
nozka
*/

export const enum Colors {
  correct = "correct",
  incorrect = "incorrect",
  wrongPlace = "wrongPlace",
}

function count(arr: string[], value: string) {
  return arr.reduce((a, v) => (v === value ? a + 1 : a), 0);
}
export function colorWord(word: string[], answer: string) {
  const onPlaces = word.filter((letter, i) => letter === answer[i]);

  return word.map((letter, i) =>
    letter === answer[i]
      ? Colors.correct
      : answer.includes(letter) &&
        count(word.slice(0, i), letter) <=
          count(answer.split(""), letter) - count(onPlaces, letter)
      ? Colors.wrongPlace
      : Colors.incorrect
  );
}

// export function colorWord(word: string[], answer: string) {
//   const letters = [...answer];
//   const result: Colors[] = Array(word.length).fill("");
//   for (const [i, char] of word.entries()) {
//     if (letters[i] === char) {
//       result[i] = Colors.correct;
//       letters[i] = "taken";
//     }
//   }
//   for (const [i, char] of word.entries()) {
//     if (letters[i] === "taken") {
//       console.log("already taken", i, char);
//       continue;
//     }
//     const indexInAnswer = letters.indexOf(char);
//     console.log("index", indexInAnswer, letters, char);
//     if (indexInAnswer === -1) {
//       result[i] = Colors.incorrect;
//       continue;
//     }

//     result[i] = Colors.wrongPlace;
//     letters[indexInAnswer] = "taken";
//   }
//   return [result, letters];
// }
