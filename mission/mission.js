document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');
    selectElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue == 'Dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
});