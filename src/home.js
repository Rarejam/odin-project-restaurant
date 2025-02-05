function home() {
  const content = document.querySelector('#container');
  const contentPage = document.createElement('div');
  contentPage.classList.add('home-div');
  const h1 = document.createElement('h1');
  h1.classList.add('name');
  h1.textContent = "Rarejam's Resturant";
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = 'home.jpg';
  img.classList.add('image');
  const p = document.createElement('p');
  p.textContent = 'this is a restaurant that serves a variety of dishes including African dishes,sea food and etc....';
  p.classList.add('menu');
  contentPage.append(h1, img, p);
  content.append(contentPage);
}
export default home;
