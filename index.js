// Code your solution here
function findMatching(drivers, name){
  const nameLowerCase = name.toLowerCase();
  return drivers.filter(driver => {
    return driver.toLowerCase() == nameLowerCase;
  });
}

function fuzzyMatch(drivers, leadingLetters){

}
