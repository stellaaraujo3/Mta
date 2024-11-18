
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); 

    try {

        const response = await fetch('main.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data), // Converte os dados para string JSON
        });

 
        const result = await response.json(); // Espera que o back-end retorne JSON


        document.getElementById('response').innerText = result.message;


        if (result.success) {
            window.location.href = '/dashboard.html'; // Substitua pelo destino correto
        }
    } catch (error) {
        console.error('Erro ao realizar o login:', error);
        document.getElementById('response').innerText = 'Erro ao conectar ao servidor.';
    }
});
