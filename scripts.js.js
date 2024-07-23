document.getElementById('yes-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('yes-message').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('no-message').classList.remove('hidden');
});
