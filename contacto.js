
document.querySelector("form").addEventListener("submit", function (e) {
    const message = document.querySelector("textarea[name='message']").value;
    if (message.trim() === "") {
        e.preventDefault();
        alert("Por favor, escribí un mensaje antes de enviar.");
    }
});

