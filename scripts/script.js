const inputs = document.querySelectorAll('.input--range');
const styleEl = document.querySelector('#style-variables')

const eInputRange = (e) => {
    const target = e.target;

    if (!target.dataset.range) {
        return;
    }

    const range = target.dataset.range;
    const val = target.value

    let rootRule;
    // Rules or cssRules for browser compatibility.
    if (styleEl.sheet.cssRules) {
        // First rule of style tag. in this case :root {}.
        rootRule = styleEl.sheet.cssRules[0];
    }
    if (styleEl.sheet.rules) {
        rootRule = styleEl.sheet.rules[0];
    }

    //Set variable in rootRule.
    rootRule.style.setProperty('--' + range, val + 'rem');
}

inputs.forEach(input => {
    input.addEventListener('input', eInputRange)
})