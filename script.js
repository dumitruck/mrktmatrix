const cells = document.querySelectorAll('#draggable-table td[draggable="true"]');

let draggedCell = null;

cells.forEach(cell => {
  cell.addEventListener('dragstart', () => {
    draggedCell = cell;
  });

  cell.addEventListener('dragover', event => {
    event.preventDefault();
  });

  cell.addEventListener('drop', () => {
    const swappedValue = cell.textContent;
    cell.textContent = draggedCell.textContent;
    draggedCell.textContent = swappedValue;
    draggedCell = null;
  });
});
