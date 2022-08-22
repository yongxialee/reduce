

//extract value
//Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function extractValue(arr,key){
    return arr.reduce(function(accum,next){
        accum.push(next[key]);
        return accum;
    },[]);

}

//vowel count
//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel 
//and the values as the number of times the vowel appears in the string. 
//This function should be case insensitive so a lowercase letter and uppercase letter should count


function vowelCount(str){
    
    const vowels='aeiou';
    const split=str.split('');
    return split.reduce(function(accum,next){
        let lowerCasedLetter = next.toLowerCase();
        if(vowels.indexOf(lowerCasedLetter) !== -1){
            if(accum[lowerCasedLetter]){
                accum[lowerCasedLetter] ++;
            }else{
                accum[lowerCasedLetter] = 1;
            }
        } return accum;
    },{});
}

    
//add key and value
//Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects 
//passed to it with each object now including the key and value passed to the function.
/*
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arr, 'title', 'Instructor') //

[
  {title: 'Instructor', name: 'Elie'},
  {title: 'Instructor', name: 'Tim'},
  {title: 'Instructor', name: 'Matt'},
  {title: 'Instructor', name: 'Colt'}
]*/


function addKeyAndValue(array,key,value){
    return array.reduce(function(acc,next,idx){
        acc[idx][key]=value;
        return acc;
    },array);

}

//partition
//Write a function called partition which accepts an array and a callback and returns an array with two arrays 
//inside of it. The partition function should run the callback function on each value in the array and if the
//result of the callback function at that specific value is true, the value should be placed in the first subarray. 
//If the result of the callback function at that specific value is false, the value should be placed in the second subarray.
/*
function isEven(val){
  return val % 2 === 0;
}

const arr = [1,2,3,4,5,6,7,8];

partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(newArr,callback){
    return newArr.reduce(function(accum,next){
        if(callback(next)){
            accum[0].push(next);
        }else{
            accum[1].push(next);
        }
        return accum;
   
},[[],[]]);
    

}