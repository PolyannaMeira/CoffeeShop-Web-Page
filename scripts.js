const modal= document.querySelector(".modal")
const mask = document.querySelector(".mask-modal")


function showModal(){
   modal.style.left='50%';
   mask.style.visibility='visible';
}

function hideModal(){
   modal.style.left='-30%';
   mask.style.visibility='hidden';
}

function aboutUs() {
    // Seleciona a seção 'About Us'
    const aboutSection = document.querySelector('.about-box');
    
    // Verifica se a seção existe antes de tentar rolar até ela
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Seção "About Us" não encontrada.');
    }
  }

  function showMenu() {
    // Seleciona a seção 'Menu'
    const menuSection = document.querySelector('.menu-box');
    
    // Verifica se a seção existe antes de tentar rolar até ela
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Seção "Menu" não encontrada.');
    }
  }
  function showContact() {
    // Seleciona a seção 'Menu'
    const showContact = document.querySelector('.contact-box');
    
    // Verifica se a seção existe antes de tentar rolar até ela
    if (showContact) {
        showContact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Seção "Menu" não encontrada.');
    }
  }
  
  