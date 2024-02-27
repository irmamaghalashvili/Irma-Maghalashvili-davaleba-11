'use strict';
// 1.	მოცემულია მასიცი:
let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let newArray = array2.map(element => {
    if (typeof element === 'number') {
      return element ** 2;  
    } else if (typeof element === 'string') {
      return element.toUpperCase(); 
    } else {
      return element; 
    }
  });
  
  console.log(newArray);


// 2.	მოცემულია სტრინგი: 
let info= "good day";
//  ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთო დის საშუალებით.
let newInfo =  info.slice(0, 5)
console.log(newInfo);

// 3.	დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

function stringLength(str) {
    let strLength = str.length;
    return strLength;
}
console.log(stringLength('hello'));

// 4.	prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let answer = 'atlanta';

let response = prompt('Capital of Georgia?');
let responseLowerCase = response.toLowerCase();

if (responseLowerCase === answer) {
  console.log('Correct');
} else {
  console.log('False');
}

// 5.	მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: 
let fruits = ['apple', 'mango', 'avocado','kiwi']
//  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 
fruits.splice(fruits.length - 1, 1, 'strawberry')
console.log(fruits);

// 6.	შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
let array = [5, 25, 89, 120, 36];
array.push('javascript', 'python');
array.unshift('html', 'css');
console.log(array.length);
array.shift();
array.pop();

console.log(array);

// 7.	შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; 
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
let array1 = ['ფორთოხალი', 'ბანანი', 'კივი'];
console.log(array1.length);
array1.push('ვაშლი', 'ანანასი');
array1.unshift('საზამთრო');
console.log(array1.length);
array1.splice(2, 0, "მანგო");
array1.shift();
array1.pop();
console.log(array1.length);


// 8.	მოცემულია მასივი 
let array3 = [1, 2, 3, 4, 5];
// splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].	
array3.splice(3, 0, 'a', 'b', 'c' );
console.log(array3);

// 9.	 მოცემულია მასივი:
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
let newArra5 = array5.map(function(num) {
    return num / 3;
});
console.log(newArra5);


// 10.	მოცემულია მასივი: 
let array7 =  [15, 100, 25, 10, 36];
//   წაშალეთ ამ მასივიდან რიცხვი 10;
let numberTen = array7.indexOf(10);

if (numberTen !== -1) {
    array7.splice(numberTen, 1);
}
console.log(array7);


// 11.	მოცემულია მასივი:  
let array8 = [1, 2, 3 , 4 , 5];
// მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;
let numberTree = array8.indexOf(3);

if (numberTree !== -1) {
    array8.splice(numberTree, 1, 'three');
}
console.log(array8);

// 12.	მოცემულია მასივი, შემდეგი მნიშვნელობებით - 
let array9 =['hello1', 14, 24, 'hello2'] 
// გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;
let newArra9 = array9.filter(element => typeof element === 'number');
console.log(newArra9);

// 13.	მოცემულია მასივი:
let array4 = [1, 2, 3, 4, 5];
// foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
let sum = 0;
array4.forEach(function (num) {
    
    sum += num;
});
console.log(sum);

// 14.	მოცემულია მასივი:
let languages = ['html', 'css', 'javascript', 'python', 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let newLanguages = languages.filter((item) => item.length > 3);
console.log(newLanguages);



// 15.	მოცემულია მასივი:
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let newWords = words.filter(item => item.toLowerCase().indexOf('m') >= 0);
console.log(newWords);
