const lowerCaseAlpha = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"
  ];
  
  const upperCaseAlpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "U", "V", "W", "X", "Y", "Z"
  ];
  
  const number = [1,2,3,4,5,6,7,8,9,10]
  
  
  const passwordChar1 = `${lowerCaseAlpha[Math.floor((Math.random()*26))]}`
  const passwordChar2 = `${upperCaseAlpha[Math.floor((Math.random()*26))]}`
  const passwordChar3 = `${lowerCaseAlpha[Math.floor((Math.random()*26))]}`
  const passwordChar4 = `${number[Math.floor((Math.random()*10))]}`
  const passwordChar5 = `${lowerCaseAlpha[Math.floor((Math.random()*26))]}`
  const passwordChar6 = `${number[Math.floor((Math.random()*10))]}`
  const passwordChar7 = `${upperCaseAlpha[Math.floor((Math.random()*26))]}`
  const passwordChar8 = `${number[Math.floor((Math.random()*10))]}`
  
  const password = passwordChar1+passwordChar2+passwordChar3+passwordChar4+passwordChar5+passwordChar6+passwordChar7+passwordChar8
  
  console.log(password)