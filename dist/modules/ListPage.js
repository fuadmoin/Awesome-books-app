import * as variable from './variables.js';

const displayListPage = () => {
  variable.list.addEventListener('click', () => {
    variable.contactPage.style.display = 'none';
    variable.addBooksPage.style.display = 'none';
    variable.listPage.style.display = 'block';
    variable.list.style.color = 'blue';
    variable.addNew.style.color = 'black';
    variable.contact.style.color = 'black';
    variable.footer.style.position = 'relative';
    variable.footer.style.top = '70px';
  });
};

export default displayListPage;