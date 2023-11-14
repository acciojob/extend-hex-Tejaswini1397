const extendHex = (shortHex) => {
   const hexWithoutHash = shortHex.replace(/^#/, '').toLowerCase();

  // Ensure the input is a valid short hex code
  if (!/^[0-9a-f]{3}$/i.test(hexWithoutHash)) {
    console.error('Invalid short hex code');
    return null;
  }

  // Expand short hex code to full hex code
  const fullHex = hexWithoutHash
    .split('')
    .map(component => component.repeat(2))
    .join('');

  // Add the # prefix and return the result
  return `#${fullHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
