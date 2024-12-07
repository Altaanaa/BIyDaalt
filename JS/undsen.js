// Select main container and items
const main = document.querySelector('.main');
const items = document.querySelectorAll('.item');

// Step 1: Extract unique class names (excluding 'item')
const classNames = Array.from(items).reduce((set, item) => {
  const classes = Array.from(item.classList).filter(cls => cls !== 'item');
  classes.forEach(cls => set.add(cls));
  return set;
}, new Set());

// Step 2: Create a container for filter buttons
const filterContainer = document.createElement('div');
filterContainer.style.marginBottom = '20px';
main.insertBefore(filterContainer, main.querySelector('.main-body'));

// Step 3: Create filter buttons dynamically
classNames.forEach(className => {
  const button = document.createElement('button');
  button.textContent = capitalizeFirstLetter(className); // Capitalize class name for the button text
  button.style.margin = '5px';
  button.style.padding = '10px 20px';
  button.style.cursor = 'pointer';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.backgroundColor = getComputedStyle(document.querySelector(`.${className}`)).backgroundColor;
  button.style.color = 'white';

  button.addEventListener('click', () => filterItemsByClass(className));
  filterContainer.appendChild(button);
});

// Step 4: Add "Show All" button
const showAllButton = document.createElement('button');
showAllButton.textContent = 'Show All';
showAllButton.style.margin = '5px';
showAllButton.style.padding = '10px 20px';
showAllButton.style.cursor = 'pointer';
showAllButton.style.border = 'none';
showAllButton.style.borderRadius = '5px';
showAllButton.style.backgroundColor = 'black';
showAllButton.style.color = 'white';

showAllButton.addEventListener('click', () => filterItemsByClass(null));
filterContainer.appendChild(showAllButton);

// Step 5: Filter items based on class
function filterItemsByClass(className) {
  items.forEach(item => {
    if (!className || item.classList.contains(className)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// Helper function: Capitalize first letter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
