const colorButtons = document.querySelectorAll('.color-btn');
const clearBtn = document.getElementById('clearBtn');
const outputColor = document.getElementById('outputColor');
const colorList = document.getElementById('colorList');

const colors = [];

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        console.log(`Button clicked: ${color}`); // Log the clicked color to the console
        colors.push(color);
        const listItem = document.createElement('li');
        listItem.textContent = color;
        colorList.appendChild(listItem);
        updateOutputColor();
    });
});

clearBtn.addEventListener('click', () => {
    console.log('Clear button clicked'); // Log clear button click
    colors.length = 0;
    colorList.innerHTML = '';
    outputColor.textContent = 'None';
});

function updateOutputColor() {
    console.log('Updating output color'); // Log the output color update process
    if (isOutputWhite()) {
        outputColor.textContent = 'White';
    } else if (isOutputCyan()) {
        outputColor.textContent = 'Cyan';
    } else if (isOutputPurple()) {
        outputColor.textContent = 'Purple';
    } else if (isOutputYellow()) {
        outputColor.textContent = 'Yellow';
    } else if (colors.length > 0) {
        outputColor.textContent = colors[0];
    } else {
        outputColor.textContent = 'Black';
    }
}

function isOutputCyan() {
    return colors.includes('Cyan') || (colors.includes('Blue') && colors.includes('Green'));
}

function isOutputYellow() {
    return colors.includes('Yellow') || (colors.includes('Red') && colors.includes('Green'));
}

function isOutputPurple() {
    return colors.includes('Purple') || (colors.includes('Red') && colors.includes('Blue'));
}

function isOutputWhite() {
    return colors.includes('White') ||
        (colors.includes('Red') && colors.includes('Blue') && colors.includes('Green')) ||
        (colors.includes('Cyan') && colors.includes('Red')) ||
        (colors.includes('Yellow') && colors.includes('Blue')) ||
        (colors.includes('Purple') && colors.includes('Green')) ||
        (colors.includes('Cyan') && colors.includes('Yellow')) ||
        (colors.includes('Cyan') && colors.includes('Purple')) ||
        (colors.includes('Purple') && colors.includes('Yellow'));
}
