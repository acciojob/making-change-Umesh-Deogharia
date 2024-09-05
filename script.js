const makeChange = (c) => {
  your name here

	c = Number(c);
	
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
	 if (c >= 10 ) {
		obj.d = Math.floor(c / 10);
		c = c % 10;
	}
	 if (c >= 5 ) {
		obj.n = Math.floor(c / 5);
		c = c % 5;
	} if (c >= 1) {
		obj.p =  c ;
	}
	
	return obj;
};


};
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
