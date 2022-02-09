import dictionary from "../assets/words.json";

class WordsStore {
  static getAllWords() {
    return dictionary;
  }
  static isWord(word: string) {
    return dictionary.indexOf(word) > -1;
  }
}
export default WordsStore;
