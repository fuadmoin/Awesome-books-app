import * as variable from './variables.js';

const addPage = () => {
  variable.addNew.addEventListener('click', () => {
    variable.contactPage.style.display = 'none';
    variable.addBooksPage.style.display = 'block';
    variable.listPage.style.display = 'none';
    variable.list.style.color = 'black';
    variable.addNew.style.color = 'blue';
    variable.contact.style.color = 'black';
    variable.footer.style.position = 'absolute';
    variable.footer.style.top = '95%';
  });
};

export default addPage;