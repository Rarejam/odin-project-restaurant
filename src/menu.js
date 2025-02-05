const menuPage = function () {
  const content = document.querySelector('#container');
  const img = document.createElement('img');
  img.classList.add('image');
  img.src = 'menu.jpg';
  const heading = document.createElement('h1');
  heading.textContent = 'Choose the Menu you want';
  const menuDiv = document.createElement('div');
  menuDiv.textContent = 'Menu';
  menuDiv.classList.add('menu-div');
  const menu1 = document.createElement('div');
  menu1.textContent = 'White rice';
  menu1.classList.add('menu1');
  const menu2 = document.createElement('div');
  menu2.textContent = 'Jollof rice';
  menu2.classList.add('menu2');
  const menu3 = document.createElement('div');
  menu3.textContent = 'Fried rice';
  menu3.classList.add('menu3');
  const menu4 = document.createElement('div');
  menu4.textContent = 'Swallow';
  menu4.classList.add('menu4');

  menuDiv.append(img, menu1, menu2, menu3, menu4);
  // menuContent.append(menuDiv);
  content.append(menuDiv);
};
export default menuPage;
