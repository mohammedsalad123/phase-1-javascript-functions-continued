//code your solution here
// code your solution here
function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`

}

saturdayFun("bathe my dog");

function mondayWork(x = 'go to the office'){
    return `This Monday, I will ${x}.`;
}

mondayWork('work from home')

function wrapAdjective(wrapper = '*') {
    return function result(adjective = '||') {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }