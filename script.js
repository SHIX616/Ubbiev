// Получение элементов из DOM
const toggleButton = document.getElementById('toggleButton');
const priceList = document.getElementById('priceList');
const backToTopButton = document.getElementById('backToTop');
const certificateAmountSelect = document.getElementById('certificate-amount');
const certificateQuantityInput = document.getElementById('certificate-quantity');
const addToCartButton = document.getElementById('addToCartButton');
const paymentSection = document.getElementById('paymentSection');
const selectedCertificateInfo = document.getElementById('selectedCertificateInfo');
const payButton = document.getElementById('payButton');

let selectedAmount = 0;
let selectedQuantity = 1;

// Обновление информации о выбранном сертификате
function updateSelectedCertificateInfo() {
    selectedCertificateInfo.textContent = `Выбран сертификат на сумму ${selectedAmount} руб. в количестве ${selectedQuantity}`;
}

// Обработчик изменения номинала сертификата
certificateAmountSelect.addEventListener('change', function () {
    selectedAmount = parseInt(certificateAmountSelect.value, 10);
    updateSelectedCertificateInfo();
});

// Обработчик изменения количества сертификатов
certificateQuantityInput.addEventListener('input', function() {
    selectedQuantity = parseInt(certificateQuantityInput.value, 10);
    if (isNaN(selectedQuantity) || selectedQuantity < 1) {
        selectedQuantity = 1;
        certificateQuantityInput.value = 1;
    }
    updateSelectedCertificateInfo();
});

// Обработчик нажатия кнопки "Добавить в корзину"
addToCartButton.addEventListener('click', function() {
    paymentSection.classList.remove('hidden');
    updateSelectedCertificateInfo();
});

// Обработчик нажатия кнопки "Оплатить"
payButton.addEventListener('click', function() {
    const totalAmount = selectedAmount * selectedQuantity;
    alert(`Оплата за ${selectedQuantity} сертификат(а) на сумму ${totalAmount} руб. прошла успешно!`);
    window.location.href = `https://www.digiseller.market/asp2/pay_wm.asp?id_d=4303600&lang=ru-RU&amount=${totalAmount}`;
});

// Обработчик нажатия кнопки "Скрыть/Показать прайс-лист"
toggleButton.addEventListener('click', function () {
    priceList.classList.toggle('hidden');
    toggleButton.textContent = priceList.classList.contains('hidden') ? '+' : '-';
});

// Обработчик нажатия кнопки "Наверх"
backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const priceList = document.getElementById('priceList');

    toggleButton.addEventListener('click', function() {
        priceList.classList.toggle('hidden');
        toggleButton.textContent = priceList.classList.contains('hidden') ? '+' : '-';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsSection = document.getElementById('reviewsSection');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const reviewTitle = document.createElement('h3');
        reviewTitle.textContent = name;

        const reviewText = document.createElement('p');
        reviewText.textContent = review;

        reviewDiv.appendChild(reviewTitle);
        reviewDiv.appendChild(reviewText);

        reviewsSection.appendChild(reviewDiv);

        reviewForm.reset();
    });
});

