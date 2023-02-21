const yourArray = ["apple", 42, true, {one: 1, two: 2}, [ { a: "a", b: "b" }, { c: "c", d: "d" } ]];

var para = document.getElementById('array')

yourArray.map((e)=>{
	var list = document.createElement('li')
	list.innerText += e;
    para.append(list)
})
