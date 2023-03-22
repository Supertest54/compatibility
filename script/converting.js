document.querySelector('.button1').onclick = getInput

function getInput(){
	let yourName = document.querySelector('.your').value.toUpperCase()
	yourName += document.querySelector('.your1').value.toUpperCase()
	let hisName1 = document.querySelector('.his').value.toUpperCase()
	hisName1 += document.querySelector('.his1').value.toUpperCase()
	let hisName2 = hisName1
	let list1 = new Array()
	let list2 = new Array()
	function converting(name1, name2, list){
		for(let item of name1){
			if(name2.includes(item)){
				list.push(true)
				let index = name2.indexOf(item)
				delete name2[index]
			}else{
				list.push(false)
			}
		}
	}
	converting(yourName, hisName1, list1)
	converting(hisName2, yourName, list2)
}
