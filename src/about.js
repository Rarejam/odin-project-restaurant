function aboutPage() {
  const content = document.querySelector('#container');
  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-div');
  const img = document.createElement('img');
  img.src = 'about.jfif';
  img.classList.add('image');
  const aboutUs = document.createElement('div');
  aboutUs.classList.add('about-us');
  const aboutUsText = document.createElement('p');
  aboutUsText.textContent =
    "Sooo....this is basically not a real restaurant page but it is just a dummy for the odin project's project....thank you!!";
  aboutUs.append(aboutUsText);
  aboutDiv.append(img, aboutUs);
  // aboutContent.append(aboutDiv);
  content.append(aboutDiv);
}
export default aboutPage;
