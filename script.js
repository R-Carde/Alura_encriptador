const dictionary = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  const MATCH_DICTIONARY_REGEX = /(ai|enter|imes|ober|ufat)/;

  const encrypt = (text) => {
    const textSplit = Array.from(text);

    return textSplit.reduce((acc, letter) => {
      return acc.concat(dictionary[letter] || letter);
    }, "");
  };

  const decrypt = (text) => {
    const dictionaryEntries = Object.entries(dictionary);
    const textSplit = text.split(MATCH_DICTIONARY_REGEX);

    return textSplit.reduce((acc, group) => {
      const match = dictionaryEntries.find((item) => item[1] === group);
      const decode = match ? match[0] : group;

      return acc.concat(decode);
    }, "");
  };

  const encryptButton = document.getElementById("encryptButton");
  encryptButton.addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = encrypt(inputText);
    document.getElementById("outputText").value = encryptedText;
  });

  const decryptButton = document.getElementById("decryptButton");
  decryptButton.addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;
    const decryptedText = decrypt(inputText);
    document.getElementById("outputText").value = decryptedText;
  });
