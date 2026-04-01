document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-phone-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const phoneElement = document.getElementById('phone-number');
            const phoneNumber = phoneElement.innerText.trim();
            navigator.clipboard.writeText(phoneNumber).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Скопировано!';
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
            });
        });
    }
});
