window.addEventListener('DOMContentLoaded', () => {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    const uploadContainer = document.getElementById('upload-container');
    const fileInput = document.getElementById('file-input');
    let fileCount = 0;

    uploadContainer.addEventListener('click', () => {
        fileInput.click();
    });

    uploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadContainer.classList.add('dragover');
    });

    uploadContainer.addEventListener('dragleave', () => {
        uploadContainer.classList.remove('dragover');
    });

    uploadContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadContainer.classList.remove('dragover');
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    });

    fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        handleFiles(files);
    });

    function handleFiles(files) {
        if (fileCount + files.length > 5) {
            alert('Вы можете загрузить до 5 фото.');
            return;
        }

        fileCount += files.length;
        uploadContainer.textContent = `Загружено фото: ${fileCount}`;
    }

    // burger
    const burgerBtn = document.querySelector('.burger-btn'),
          burgerMenu = document.querySelector('.header__nav-menu'),
          closeBtn = document.querySelector('.close');


    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        burgerMenu.classList.remove('show');
        document.body.style.overflow = '';
    });

    // modal
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.modal-btn');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => {
                if (btn.getAttribute('data-modal') == modal.getAttribute('data-modal')) {
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }

                const modalClose = modal.querySelector('.modal__close');

                modalClose.addEventListener('click', () => {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                });
            });
        });
    });


});