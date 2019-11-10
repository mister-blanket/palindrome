const isPal = word => {
  word = word.replace(/\W/g, '').toLowerCase();
  return (word == word.split('').reverse().join(''));
}

export default isPal
                    
