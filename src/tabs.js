import home from './home';
import contactUs from './contact';
import menuPage from './menu';
import aboutPage from './about';
const tabsBtn = () => {
  // const home = document.createElement('div');
  // const menu = document.createElement('div');
  // const about = document.createElement('div');
  // const contact = document.createElement('div');

  const content = document.querySelector('#container');

  const homeTab = document.querySelector('#home');
  const menuTab = document.querySelector('#menu');
  const aboutTab = document.querySelector('#about');
  const contactTab = document.querySelector('#contact');

  // content.append(homeTab, menuTab, aboutTab, contactTab);
  // homeTab.append(home);
  // menuTab.append(menu);
  // aboutTab.append(about);
  // contactTab.append(contact);

  homeTab.addEventListener('click', () => {
    clearMenuScreen();
    clearContactScreen();
    clearHomeScreen();
    clearAboutScreen();
    home();
  });
  menuTab.addEventListener('click', () => {
    clearMenuScreen();
    clearContactScreen();
    clearHomeScreen();
    clearAboutScreen();
    menuPage();
  });
  aboutTab.addEventListener('click', () => {
    clearMenuScreen();
    clearContactScreen();
    clearHomeScreen();
    clearAboutScreen();
    aboutPage();
  });
  contactTab.addEventListener('click', () => {
    clearMenuScreen();
    clearContactScreen();
    clearHomeScreen();
    clearAboutScreen();
    // clearContact();
    contactUs();
  });
};
// function clearHomeScreen() {
//   const content = document.querySelector('#container');
//   const contentPage = document.querySelector('.page-content');
//   if (contentPage) {
//     content.remove(contentPage);
//   }
// }
function clearMenuScreen() {
  const content = document.querySelector('#container');
  const menuDiv = document.querySelector('.menu-div');
  if (menuDiv) {
    content.removeChild(menuDiv);
  }
}
function clearAboutScreen() {
  const content = document.querySelector('#container');
  const aboutDiv = document.querySelector('.about-div');
  if (aboutDiv) {
    content.removeChild(aboutDiv);
  }
}
function clearContactScreen() {
  const content = document.querySelector('#container');
  const contactDiv = document.querySelector('.contact-div');
  if (contactDiv) {
    content.removeChild(contactDiv);
  }
}
function clearHomeScreen() {
  const content = document.querySelector('#container');
  const homeDiv = document.querySelector('.home-div');
  if (homeDiv) {
    content.removeChild(homeDiv);
  }
}
// function clearAboutScreen() {
//   const content = document.querySelector('#container');
//   const aboutContent = document.querySelector('.about-div');
//   if (aboutContent) {
//     content.remove(aboutContent);
//   }
// }
// function clearContactScreen() {
//   const content = document.querySelector('#container');
//   const contactContent = document.querySelector('.contact-div');
//   if (contactContent) {
//     content.remove(contactContent);
//   }
// }

// function clearHome() {
//   clearContactScreen();
//   clearAboutScreen();
//   clearMenuScreen();
// }
// function clearAbout() {
//   clearContactScreen();
//   clearMenuScreen();
//   clearHomeScreen();
// }
// function clearContact() {
//   clearAboutScreen();
//   clearMenuScreen();
//   clearHomeScreen();
// }
// function clearMenu() {
//   clearContactScreen();
//   clearAboutScreen();
//   clearHomeScreen();
// }

export default tabsBtn();

// export function tabs() {
//   const content = document.querySelector('#container');
//   const div1 = document.createElement('div');
//   const div2 = document.createElement('div');
//   const div3 = document.createElement('div');
//   const div4 = document.createElement('div');

// div1.textContent = 'Home';
// div2.textContent = 'menu';
// div3.textContent = 'contact';
// div4.textContent = 'about';

//   const homeTab = document.querySelector('#home');
//   const menuTab = document.querySelector('#menu');
//   const aboutTab = document.querySelector('#about');
//   const contactTab = document.querySelector('#contact');

//   homeTab.append(div1);
//   menuTab.append(div2);
//   contactTab.append(div3);
//   aboutTab.append(div4);

//   content.append(homeTab);
//   content.append(menuTab);
//   content.append(contactTab);
//   content.append(aboutTab);

//   homeTab.addEventListener('click', () => {
//     clearHome();
//     homePage();
//   });
//   menuTab.addEventListener('click', () => {
//     clearMenu();
//     menuPage();
//   });
//   aboutTab.addEventListener('click', () => {
//     clearAbout();
//     aboutPage();
//   });
//   contactTab.addEventListener('click', () => {
//     clearContact();
//     contactUs();
//   });
//   function clearHomeScreen() {
//     const content = document.querySelector('#container');
//     const contentPage = document.querySelector('.page-content');
//     if (contentPage) {
//       content.remove(contentPage);
//     }
//   }
//   function clearMenuScreen() {
//     const content = document.querySelector('#container');
//     const menuContent = document.querySelector('.menu-content');
//     if (menuContent) {
//       content.remove(menuContent);
//     }
//   }
//   function clearAboutScreen() {
//     const content = document.querySelector('#container');
//     const aboutContent = document.querySelector('.about-content');
//     if (aboutContent) {
//       content.remove(aboutContent);
//     }
//   }
//   function clearContactScreen() {
//     const content = document.querySelector('#container');
//     const contactContent = document.querySelector('.contact-content');
//     if (contactContent) {
//       content.remove(contactContent);
//     }
//   }

//   function clearHome() {
//     clearContactScreen();
//     clearAboutScreen();
//     clearMenuScreen();
//   }
//   function clearAbout() {
//     clearContactScreen();
//     clearMenuScreen();
//     clearHomeScreen();
//   }
//   function clearContact() {
//     clearAboutScreen();
//     clearMenuScreen();
//     clearHomeScreen();
//   }
//   function clearMenu() {
//     clearContactScreen();
//     clearAboutScreen();
//     clearHomeScreen();
//   }
// }
