import homePage from './homePage';
import menuPage from './menu';
import contactUs from './contact';
import aboutPage from './about';
import tabsBtn, { tabs } from './tabs';
// import pageMenu from './menu.js';
function loadPage() {
  homePage();
  // menuPage();
  // contactUs();
  // aboutPage();
  tabsBtn();
  // tabs();
}

export default loadPage;
