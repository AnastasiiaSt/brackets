module.exports = function check(str, bracketsConfig) {
  let arrFlat = [];
  let str1 = '';

  for (let k = 0; k < bracketsConfig.length; k++) {
    for (let l = 0; l < bracketsConfig[k].length; l++) {
        str1 = str1.concat(bracketsConfig[k][l]);
    }
        arrFlat.push(str1);
        str1 = '';
   }

  let result = 0;
  let index;

  if (str.length % 2 !== 0 ) {
    return false;  
  } else {

    let i = 0;
    let j = 0;
    let n = str.length;

    do {
      index = str.indexOf(arrFlat[i]);

      if (index === -1) {
        result += 0;
      } else {
        str = str.replace(arrFlat[i], '');
        result +=1
      } 

        j = j + 1;
              
      if (result === (n / 2) || str === '') {
        break;
      } else if (i >= arrFlat.length - 1 ) {
        i = 0;
      } else {
        i = i + 1;
      }
    } while (j <= n * arrFlat.length);

    if (result === (n / 2)) {
      return true;
    } else {
      return false;
    }
  }
}
