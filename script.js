    const words = ["Computers", "Laptops",
         "Printers", "Scanners", "Accessories", "Hardware"];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;
    const speed = 50;
    const target = document.getElementById("typed-text");

    function type() {
        if (i < words.length) {
            if (!isDeleting && j <= words[i].length) {
                currentWord = words[i].substring(0, j++);
                target.textContent = currentWord;
            }

            if (isDeleting && j >= 0) {
                currentWord = words[i].substring(0, j--);
                target.textContent = currentWord;
            }

            if (j === words[i].length) {
                isDeleting = true;
                setTimeout(type, 1000);
                return;
            }

            if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }

            setTimeout(type, speed);
        }
    }

    type();
