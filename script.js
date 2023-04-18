const changeImg = () =>  document.getElementById('i1').src = 'img/' + Math.ceil(Math.random() * 10) + '.jpg';
const changeImg2 = () =>  document.getElementById('i2').src = 'img/' + Math.ceil(Math.random() * 10) + '.jpg';
const changeImg3 = () =>  document.getElementById('i3').src = 'img/' + Math.ceil(Math.random() * 10) + '.jpg';
const changeImg4 = () =>  document.getElementById('i4').src = 'img/' + Math.ceil(Math.random() * 10) + '.jpg';

changeImg();
changeImg2();
changeImg3();
changeImg4();