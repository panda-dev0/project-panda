function _panda_toggleDebugger() {
  var debuggerElem = document.getElementById("panda-debugger");
    debuggerElem.classList.toggle("expanded");
}
function _panda_showPage(pageId) {
  var pages = document.querySelectorAll('.debugger-page');
  var tabs = document.querySelectorAll('.tab-button');

  pages.forEach(function(page) {
    if (page.id === pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  tabs.forEach(function(tab) {
    if (tab.dataset.page === pageId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}
function checkConsoleErrors() {
  var errorCount = 0;
  var consoleErrors = [];

  // Monitor for errors in the console
  window.addEventListener('error', function (event) {
    // Extract error details
    var errorMessage = event.message;
    var scriptURL = event.filename || '[unknown]';
    var lineNumber = event.lineno || '[unknown]';

    // Ignore errors from "desktop_polymer.js"
    if (errorMessage.includes('desktop_polymer.js') || scriptURL.includes('desktop_polymer.js')) {
      return;
    }

    // Increment error count
    errorCount++;

    // Construct error message with location
    var errorMessageWithLocation = errorMessage + ' (at ' + scriptURL + ':' + lineNumber + ')';

    // Add error message to the list
    consoleErrors.push(errorMessageWithLocation);

    // Update error count in the debugger header
    document.getElementById("error-count").innerText = errorCount;
document.getElementById("error-count").classList.add('error')
  var debuggerElem = document.getElementById("panda-debugger");
    debuggerElem.classList.add("expanded");
    _panda_showPage('errors')
    // Add error message to the debugger content
    var debuggerContent = document.getElementById("errors-list");
    var errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = errorMessageWithLocation;
    debuggerContent.appendChild(errorElement);
  });

  // Function to clear errors in the debugger
  /*document.getElementById("clear-errors").addEventListener('click', function () {
    errorCount = 0;
    consoleErrors = [];
    document.getElementById("error-count").innerText = errorCount;
    document.getElementById("debugger-content").innerHTML = "";
  }); */
}

// Call the function to start monitoring console errors
checkConsoleErrors();

function createCheckboxes() {
    // Make a request to the API endpoint
    fetch('https://api.cr-img.ct8.pl/v1/config')
    .then(response => response.json())
    .then(data => {
        // Retrieve the exp_flags array from the JSON data
        const expFlags = data.exp_flags;
 const container = document.getElementById('config-list');

        // Loop through the exp_flags array
        expFlags.forEach(flag => {
            // Create checkbox element
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
      checkbox.className = "flag-checkbox";
            checkbox.id = flag.id;
            
            // Check local storage for the state of the checkbox
            const storedValue = localStorage.getItem('cr-exp_flags-' + flag.id);
            if (storedValue === 'true') {
                checkbox.checked = true;
            } else if (storedValue === 'false') {
                checkbox.checked = false;
            } else if (storedValue === null) {
                localStorage.setItem('cr-exp_flags-' + flag.id, flag.default_state)
      checkbox.checked = flag.default_state;
            }
            
            // Create title element
            const title = document.createElement('p');
      title.className = "flag-title";
            title.textContent = flag.title.toUpperCase();
            const desc = document.createElement('p');
      desc.className = "flag-desc";
      desc.style.color = "gray";
            desc.textContent = flag.description;
            
            // Create div element to contain checkbox and title
            const flagDiv = document.createElement('div');
            flagDiv.id = 'flag';
            flagDiv.appendChild(checkbox);
            flagDiv.appendChild(title);
            flagDiv.appendChild(desc);
            // Append div to container
            container.appendChild(flagDiv);
            
            // Add event listener to update local storage when checkbox state changes
            checkbox.addEventListener('change', function() {
    localStorage.setItem('cr-exp_flags-' + flag.id, this.checked.toString());
});
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Call the function to create checkboxes

      
      function sha256(str) {
    function utf8Encode(str) {
        return unescape(encodeURIComponent(str));
    }
    const charSize = 8; // Character size in bits
    const blockSize = 512; // Block size in bits
    const hashSize = 256; // Hash size in bits

    // SHA-256 constants
    const constants = [];
    for (let i = 0; i < 64; i++) {
        constants[i] = Math.floor(Math.abs(Math.sin(i + 1)) * Math.pow(2, 32));
    }

    // Initial hash values
    const initialHashValues = [
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
        0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ];

    // Pre-processing: Padding the message
    let paddedMessage = utf8Encode(str);
    paddedMessage += String.fromCharCode(0x80); // Append single '1' bit
    while ((paddedMessage.length * charSize) % blockSize !== (blockSize - 64)) {
        paddedMessage += String.fromCharCode(0x00); // Append '0' bits
    }
    const messageLengthBits = str.length * charSize; // Message length in bits
    paddedMessage += String.fromCharCode((messageLengthBits >>> 56) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 48) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 40) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 32) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 24) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 16) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 8) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits) & 0xff);

    // Initialize hash values
    let hashValues = initialHashValues.slice();

    // Main loop
    for (let chunkIndex = 0; chunkIndex < paddedMessage.length / (blockSize / charSize); chunkIndex++) {
        const chunkStart = chunkIndex * (blockSize / charSize);
        const chunkEnd = (chunkIndex + 1) * (blockSize / charSize);
        const chunk = paddedMessage.slice(chunkStart, chunkEnd);
        const chunkWords = [];
        for (let i = 0; i < chunk.length / 4; i++) {
            const wordStart = i * 4;
            chunkWords[i] = (
                (chunk.charCodeAt(wordStart) & 0xff) << 24 |
                (chunk.charCodeAt(wordStart + 1) & 0xff) << 16 |
                (chunk.charCodeAt(wordStart + 2) & 0xff) << 8 |
                (chunk.charCodeAt(wordStart + 3) & 0xff)
            ) >>> 0;
        }
        for (let i = 16; i < 64; i++) {
            const s0 = (chunkWords[i - 15] >>> 7 | chunkWords[i - 15] << 25) ^
                (chunkWords[i - 15] >>> 18 | chunkWords[i - 15] << 14) ^
                (chunkWords[i - 15] >>> 3);
            const s1 = (chunkWords[i - 2] >>> 17 | chunkWords[i - 2] << 15) ^
                (chunkWords[i - 2] >>> 19 | chunkWords[i - 2] << 13) ^
                (chunkWords[i - 2] >>> 10);
            chunkWords[i] = (
                chunkWords[i - 16] +
                s0 +
                chunkWords[i - 7] +
                s1
            ) >>> 0;
        }
        let [a, b, c, d, e, f, g, h] = hashValues;
        for (let i = 0; i < 64; i++) {
            const s1 = (e >>> 6 | e << 26) ^
                (e >>> 11 | e << 21) ^
                (e >>> 25 | e << 7);
            const ch = (e & f) ^ (~e & g);
            const temp1 = (h >>> 14 | h << 18) ^
                (h >>> 18 | h << 14) ^
                (h >>> 41 | h << 23);
            const temp2 = temp1 + ch;
            const s0 = (a >>> 2 | a << 30) ^
                (a >>> 13 | a << 19) ^
                (a >>> 22 | a << 10);
            const maj = (a & b) ^ (a & c) ^ (b & c);
            const temp3 = s0 + maj;
            h = g;
            g = f;
            f = e;
            e = (d + temp2) >>> 0;
            d = c;
            c = b;
            b = a;
            a = (temp2 + temp3) >>> 0;
        }
        hashValues[0] += a;
        hashValues[1] += b;
        hashValues[2] += c;
        hashValues[3] += d;
        hashValues[4] += e;
        hashValues[5] += f;
        hashValues[6] += g;
        hashValues[7] += h;
        for (let i = 0; i < hashValues.length; i++) {
            hashValues[i] >>>= 0;
        }
    }

    // Convert hash values to hex string
    let hashHex = '';
    for (let i = 0; i < hashValues.length; i++) {
        let hex = (hashValues[i] >>> 0).toString(16);
        while (hex.length < 8) {
            hex = '0' + hex;
        }
        hashHex += hex;
    }
    return hashHex;
}