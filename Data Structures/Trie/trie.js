class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }

      node = node.children[char];
    }
    return node.isEnd;
  }

  prefix(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }

      node = node.children[char];
    }
    return true;
  }

  autoSuggest(prefix) {
    let node = this.root;
    let suggestions = [];

    for (let char of prefix) {
      if (!node.children[char]) {
        return suggestions;
      }

      node = node.children[char];
    }

    this.collectSuggestions(node, prefix, suggestions)

    return suggestions;
  }

  collectSuggestions(node, prefix, suggestions) {
    if (node.isEnd) {
      suggestions.push(prefix);
    }

    for (let char in node.children) {
      this.collectSuggestions(node.children[char], prefix + char, suggestions)
    }
  }
}

const trie = new Trie();
trie.insert("Banana");
trie.insert("Banoop");
trie.insert("Bun");

console.log(trie.autoSuggest("Ba"));
