// Code your solution here
function findMatching(drivers, name){
  const nameLowerCase = name.toLowerCase();
  drivers.filter(driver => {
    return driver.toLowerCase() == nameLowerCase;
  });
}

function fuzzyMatch(drivers, leadingLetters){

}
