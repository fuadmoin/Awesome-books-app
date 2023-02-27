import * as variable from './variables.js';

const displayContactPage = () => {
  variable.contact.addEventListener('click', () => {
    variable.contactPage.style.display = 'block';
    variable.addBooksPage.style.display = 'none';
    variable.listPage.style.display = 'none';
    variable.list.style.color = 'black';
    variable.addNew.style.color = 'black';
    variable.contact.style.color = 'blue';
    variable.footer.style.position = 'absolute';
    variable.footer.style.top = '95%';
  });
};

export default displayContactPage;