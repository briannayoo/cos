const mainMenu = document.querySelectorAll('#list>li');
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

for(let mm of mainMenu){
	mm.addEventListener('mouseover',()=>{
		let smHeight = mm.querySelector('ul').offsetHeight;
		let totalHeight = smHeight + headerHeight;
		header.style.height = `${totalHeight}px`;
	});
	mm.addEventListener('mouseout',()=>{
		header.style.height = `${headerHeight}px`;
    });
};