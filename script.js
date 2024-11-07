document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').innerText = 'お問い合わせありがとうございました。';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').innerText = 'すべてのフィールドを入力してください。';
    }
});
