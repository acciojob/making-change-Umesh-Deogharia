const makeChange = (c) => {
  // your name here
	let obj = {
		q : 0,
		d : 0,
		n : 0,
		p : 0
	}
	if (c >= 25) {
		obj.q = Math.floor(c / 25);
		c = c % 25;
	}
	else if (c >= 10 && c < 25) {
		obj.d = Math.floor(c / 10);
		c = Math.floor(c % 10;
	}
	else if (c >= 5 && c < 10) {
		obj.n = Math.floor(c / 5);
		c = Math.floor(c % 5);
	}else if (c >= 1 && c < 5) {
		obj.p = Math.floor( c / 1);
	}
	console.log(obj);
	return obj
};
// Do not the change the code below
// const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
