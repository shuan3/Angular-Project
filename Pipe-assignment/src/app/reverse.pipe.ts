import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any{
if (value.length===0){
return value;

}else{
//   let reverseString:string="";
//   for (let char of value) {

//     // append every character of string to the start of the reverseString
//     reverseString = char + reverseString;
//  }
//  return reverseString

return value.split('').reverse().join('');

}
  }
}
// }
// function StringBuilder(value: any) {
//   throw new Error('Function not implemented.');
// }

