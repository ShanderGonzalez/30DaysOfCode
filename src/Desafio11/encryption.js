function decodeMessage(messageEncryption) {
    const dictionary = {
      0: "M",
      1: "U",
      2: "R",
      3: "C",
      4: "I",
      5: "E",
      6: "L",
      7: "A",
      8: "G",
      9: "O"
    };
  
    return messageEncryption.replace(/[0-9]/g, charEncryption => dictionary[charEncryption]);
  }
  
  const messageEncryption = "T24st5z7 S9y y9 d5 n15v9 H735 t450p9 q15 n9s v509s N9 p92q15 q14527 p529 b15n9 1st5d s450p25 05 q14s9 0as";
  const decodemessage = decodeMessage(messageEncryption);
  console.log(decodemessage);
  