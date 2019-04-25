
//getQuestion(1);

const question=function (level) {

    let min=1;
    let max=3;
	let operationType= Math.floor(Math.random()*(max-min+1)+min);
    //let operationType=3;
    let operationSign='';

    switch(operationType){
      case 1:
        operationSign='mas';
      break;
      case 2:
        operationSign='multiplicado';
      break;
      case 3:
        operationSign='menos';
      break;
      default:
        operationSign='mas';
      break;
    }
    let question='';
    if(operationType===1){
      question=getAddition(level);
    }else if(operationType===2){
      question=getSustraction(level);
    }else if(operationType===3){
      question=getPlus(level);
    }
    return question;
};


function getPlus(level){
  let min=1;
  let max=3;

  let min2=1;
  let max2=3;

  if(level===1){
    min=1;
    max=5;
    min2=1;
    max2=5;
  }
  if(level===2){
    min=2;
    max=5;
    min2=3;
    max2=6;
  }
  if(level===3){
    min=6;
    max=10;
    min2=6;
    max2=10;
  }
  if(level===4){
    min=1;
    max=3;
    min2=11;
    max2=19;
  }
  if(level===5){
    min=2;
    max=5;
    min2=11;
    max2=19;
  }
  if(level===6){
    min=6;
    max=10;
    min2=11;
    max2=19;
  }
  if(level===7){
    min=2;
    max=9;
    min2=20;
    max2=99;
  }
  if(level===8){
    min=20;
    max=99;
    min2=20;
    max2=99;
  }
  if(level===9){
    min=20;
    max=99;
    min2=20;
    max2=99;
  }
  if(level===10){
    min=100;
    max=999;
    min2=100;
    max2=999;
  }

  let digit1= Math.floor(Math.random()*(max-min+1)+min);

  let digit2=Math.floor(Math.random()*(max2-min2+1)+min);
  
  let q='¿Cuanto es '+digit1+' multiplicado por '+digit2+'?';
  let value=digit1*digit2;
    let question={
        question:q,
        value:value
    };
    //let question='¿Cuanto es '+digit1+' multiplicado por '+digit2+'?';
    return question;
}


function getSustraction(level){
  let min=1;
  let max=3;
  if(level===1){
    min=2;
    max=5;
  }
  if(level===2){
    min=5;
    max=9;
  }
  if(level===3){
    min=5;
    max=15;
  }
  if(level===4){
    min=11;
    max=29;
  }
  if(level===5){
    min=28;
    max=59;
  }
  if(level===6){
    min=60;
    max=99;
  }
  if(level===7){
    min=100;
    max=999;
  }
  if(level===8){
    min=1000;
    max=10000;
  }
  if(level===9){
    min=10000;
    max=100000;
  }
  if(level===10){
    min=100000;
    max=499000;
  }

  let digit1= Math.floor(Math.random()*(max-min+1)+min);
  min=min-1;
  max=digit1;
  let digit2=Math.floor(Math.random()*(max-min+1)+min);

    //let question='¿Cuanto es '+digit1+' menos '+digit2+'?';
    let q='¿Cuanto es '+digit1+' menos '+digit2+'?';
  let value=digit1-digit2;
    let question={
        question:q,
        value:value
    };
    return question;
}


function getAddition(level){
  let min=1;
  let max=3;
  if(level===1){
    min=1;
    max=5;
  }
  if(level===2){
    min=5;
    max=9;
  }
  if(level===3){
    min=8;
    max=15;
  }
  if(level===4){
    min=11;
    max=29;
  }
  if(level===5){
    min=28;
    max=59;
  }
  if(level===6){
    min=60;
    max=99;
  }
  if(level===7){
    min=100;
    max=999;
  }
  if(level===8){
    min=1000;
    max=10000;
  }
  if(level===9){
    min=10000;
    max=100000;
  }
  if(level===10){
    min=100000;
    max=499000;
  }

  let digit1= Math.floor(Math.random()*(max-min+1)+min);
  let digit2=Math.floor(Math.random()*(max-min+1)+min);

    //let question='¿Cuanto es '+digit1+' mas '+digit2+'?';
    let q='¿Cuanto es '+digit1+' mas '+digit2+'?';
  let value=digit1+digit2;
    let question={
        question:q,
        value:value
    };
    
    
    return question;
}

module.exports={
  question
}
