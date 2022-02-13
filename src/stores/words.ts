import dictionary from "../assets/words.json";
import popularDictionary from "../assets/popularWords.json";

class WordsStore {
  static getAllWords() {
    return dictionary;
  }
  static isWord(word: string) {
    return dictionary.indexOf(word) > -1;
  }
  static randomWord(dictionary = "popular") {
    if (dictionary === "popular")
      return popularDictionary[
        Math.floor(Math.random() * popularDictionary.length)
      ];
    return dictionary[Math.floor(Math.random() * dictionary.length)];
  }
}
export default WordsStore;
