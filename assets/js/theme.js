  // Function to close both dropdowns
  function closeDropdowns() {
    document.getElementById('cartDropdown').style.display = 'none';
    const userDropdown = document.getElementById('userDropdown');
    const userDropdownMenu = userDropdown.nextElementSibling;
    if (userDropdownMenu.classList.contains('show')) {
      userDropdown.click();
    }
  }

  // Toggle the cart dropdown
  function toggleCartDropdown() {
    const cartDropdown = document.getElementById('cartDropdown');
    if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
      closeDropdowns(); // Close other dropdowns
      cartDropdown.style.display = 'block';
    } else {
      cartDropdown.style.display = 'none';
    }
  }

  // Close Cart dropdown when clicking on the User dropdown
  document.getElementById('userDropdown').addEventListener('click', () => {
    document.getElementById('cartDropdown').style.display = 'none';
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    const cartDropdown = document.getElementById('cartDropdown');
    const userDropdownMenu = document.querySelector('.dropdown-menu');

    if (!event.target.closest('.btn') && !event.target.closest('.dropdown-toggle') && !event.target.closest('.dropdown-menu')) {
      cartDropdown.style.display = 'none';
      if (userDropdownMenu.classList.contains('show')) {
        userDropdownMenu.classList.remove('show');
      }
    }
  });