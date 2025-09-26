/*
Task 3:
Write a function to show an alert with information about links. 
Clicking on the button should display the number of links on the page, the first link in the page, and the last link in the page.

*/


const btn3 = document.querySelector('button');

if (btn3) {
  btn3.addEventListener('click', () => {
    const links = Array.from(document.querySelectorAll('a'));
    if (links.length === 0) {
      alert('No hay enlaces en la página.');
      return;
    }
    const first = links[0].href;
    const last = links[links.length - 1].href;
    alert(`Número de links: ${links.length}\nPrimer link: ${first}\nÚltimo link: ${last}`);
  });
}
