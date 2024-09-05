// const makeChange = (c) => {
//   your name here
// 	let obj = {
// 		q : 0,
// 		d : 0,
// 		n : 0,
// 		p : 0
// 	}
// 	if (c >= 25) {
// 		obj.q = Math.floor(c / 25);
// 		c = c % 25;
// 	}
// 	 if (c >= 10 ) {
// 		obj.d = Math.floor(c / 10);
// 		c = c % 10;
// 	}
// 	 if (c >= 5 ) {
// 		obj.n = Math.floor(c / 5);
// 		c = c % 5;
// 	} if (c >= 1) {
// 		obj.p =  c ;
// 	}
// 	console.log(obj);
// 	return obj;
// };

const makeChange = (c) => {
  
  c = Number(c);
  
  let change = {
    q: 0, 
    d: 0, 
    n: 0, 
    p: 0  
  };


  change.q = Math.floor(c / 25);
  c %= 25;


  change.d = Math.floor(c / 10);
  c %= 10;


  change.n = Math.floor(c / 5);
  c %= 5;


  change.p = c;

  return change;
};
// Do not the change the code below
// const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
