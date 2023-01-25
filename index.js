// Code your solution here
function findMatching(drivers, foo){
    
    return drivers.filter((drivers) => drivers.toLowerCase().includes(foo.toLowerCase())); 
}
function fuzzyMatch(drivers, foo){
    return drivers.filter((drivers) => drivers.slice(0,2) === foo);
}
function matchName(drivers, foo){
    return drivers.filter((drivers) => drivers.name === foo) ;
}