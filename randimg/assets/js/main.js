var messi = ['messi-1.jpg','messi-2.webp','messi-3.jpg','messi-4.webp','messi-5.jpg','messi-6.webp']
var ronaldo = ['ronaldo-1.jpg','ronaldo-2.jpg','ronaldo-3.jpg','ronaldo-4.jpg','ronaldo-5.jpg']
var allPic = ['messi-1.jpg','messi-2.webp','messi-3.jpg','messi-4.webp','messi-5.jpg','messi-6.webp','ronaldo-1.jpg','ronaldo-2.jpg','ronaldo-3.jpg',
'ronaldo-4.jpg','ronaldo-5.jpg']

var imageViewer = document.querySelector('.img_viewer');
var messiBtn = document.getElementById('messi');
var ronaldoBtn = document.getElementById('ronaldo');
var randomImgBtn = document.getElementById('randomImg');

messiBtn.addEventListener('click',()=>{
	let rand = Math.floor(Math.random()*messi.length)
	imageViewer.innerHTML ='';
	let image = document.createElement('img');
	image.src = './assets/images/'+messi[rand];
	imageViewer.append(image);
	console.log(rand);
});

ronaldoBtn.addEventListener('click',()=>{
	let rand = Math.floor(Math.random()*ronaldo.length)
	imageViewer.innerHTML ='';
	let image = document.createElement('img');
	image.src = './assets/images/'+ronaldo[rand];
	imageViewer.append(image);
	console.log(rand);
});

randomImgBtn.addEventListener('click',()=>{
	let rand = Math.floor(Math.random()*allPic.length)
	imageViewer.innerHTML ='';
	let image = document.createElement('img');
	image.src = './assets/images/'+allPic[rand];
	imageViewer.append(image);
	console.log(rand);
});


