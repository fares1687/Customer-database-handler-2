const form = document.getElementById('customer-form');
const table = document.getElementById('customer-table');
const tbody = table.getElementsByTagName('tbody')[0];
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearDataBtn = document.getElementById('clear-data-btn');

let customers = JSON.parse(localStorage.getItem('customers')) || [];

function renderCustomers() {
  tbody.innerHTML = '';

  customers.forEach((customer) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = customer.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = customer.age;
    row.appendChild(ageCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = customer.phone;
    row.appendChild(phoneCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = customer.email;
    row.appendChild(emailCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = customer.address;
    row.appendChild(addressCell);

    const orderCell = document.createElement('td');
    orderCell.textContent = customer.order;
    row.appendChild(orderCell);

    const totalCell = document.createElement('td');
    totalCell.textContent = customer.total;
    row.appendChild(totalCell);

    tbody.appendChild(row);
  });
}

renderCustomers();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const order = document.getElementById('order').value;
  const total = document.getElementById('total').value;

  const newCustomer = {
    name,
    age,
    phone,
    email,
    address,
    order,
    total
  };

  customers.push(newCustomer);
  localStorage.setItem('customers', JSON.stringify(customers));
  renderCustomers();

  form.reset();
});

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm)
  );
  customers = filteredCustomers;
  renderCustomers();
});

clearDataBtn.addEventListener('click', () => {
  customers = [];
  localStorage.removeItem('customers');
  renderCustomers();
});
