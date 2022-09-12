// Write your code below
const randomStr = 'ChristinaRules%#2'


const checkSpecialCharacters = (str) => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(str)){
      return true;
    } else {
      return false;
    }
}
console.log(checkSpecialCharacters(randomStr))

