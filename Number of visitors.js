const check = (string) => {
    let regularExp = /W|M|C/g;
    let checkRegularExp = string.match(regularExp);
    let resultString = '';
    let resultQuantityW = 0;
    let resultQuantityM = 0;
    let resultQuantityC = 0;
  
    if (checkRegularExp !== null) {
      for (let i = 0; i <= checkRegularExp.length - 1; i = i + 1 ) {
        switch (checkRegularExp[i]) {
          case 'W': 
          resultQuantityW = resultQuantityW + 1;
          break;
          case 'M': 
          resultQuantityM = resultQuantityM + 1;
          break;
          case 'C': 
          resultQuantityC = resultQuantityC + 1;
          break;
        }
      }
    } else {
      return 'Throw error!'
    }
    
    if ((resultQuantityW !== 0 && resultQuantityM !== 0 && resultQuantityC !== 0 ) && (resultQuantityW !== (resultQuantityM || resultQuantityC)) && (resultQuantityM !== ( resultQuantityW || resultQuantityC)) && (resultQuantityC !== ( resultQuantityW || resultQuantityM))) {
      resultString = resultQuantityW + 'W' + resultQuantityC + 'C' + resultQuantityM + 'M';
      console.log(resultString);
    } else if (resultQuantityC === 0 && resultQuantityW !== 0 && resultQuantityM !== 0 ) {
      resultString = resultQuantityM + 'M' + resultQuantityW + 'W';
      console.log(resultString);
    } else if ((resultQuantityW === (resultQuantityM || resultQuantityC )) && resultQuantityM === (resultQuantityW || resultQuantityC) && resultQuantityC === (resultQuantityM) || resultQuantityW) {
      resultString = resultQuantityM + 'M' + resultQuantityW + 'W' + resultQuantityC + 'C';
      console.log(resultString);
    }
  
  }
  check('WWMMCC');