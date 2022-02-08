import dictionary from '../assets/words.json'

class WordsStore {
    constructor() {
    }
    getAllWords() {
        return dictionary
    }
    isWord(word: string) {
        return dictionary.indexOf(word) > -1
    }
}
export default WordsStore