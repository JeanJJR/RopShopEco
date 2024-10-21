document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    setTimeout(function () {
        popup.style.display = "block";
    }, 3000);

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

// Espera a que el documento se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Captura el formulario
    const loginForm = document.querySelector("form");

    // Manejo de envío del formulario
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        // Captura los valores del formulario
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validación simple
        if (email === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí puedes realizar una llamada a tu backend para autenticar al usuario
        // Por ejemplo, utilizando fetch para un POST a tu API de login
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Asumiendo que el servidor responde con JSON
            }
            throw new Error("Error en la autenticación");
        })
        .then(data => {
            // Manejo de la respuesta del servidor
            if (data.success) {
                // Redirigir al usuario a la página principal o donde sea necesario
                window.location.href = "index.html"; 
            } else {
                alert(data.message || "Error en el inicio de sesión.");
            }
        })
        .catch(error => {
            console.error("Hubo un problema con la petición:", error);
            alert("Error en el proceso de inicio de sesión.");
        });
    });

    // Manejador para el inicio de sesión con Google
    document.getElementById("google-login").addEventListener("click", function () {
        // Aquí puedes implementar la lógica para autenticar con Google
        // Esto generalmente implica usar la API de Google Sign-In
        alert("Iniciar sesión con Google (no implementado en este ejemplo)");
    });

    // Manejador para el inicio de sesión con Facebook
    document.getElementById("facebook-login").addEventListener("click", function () {
        // Aquí puedes implementar la lógica para autenticar con Facebook
        // Esto generalmente implica usar el SDK de Facebook
        alert("Iniciar sesión con Facebook (no implementado en este ejemplo)");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showRegisterBtn = document.getElementById("show-register");
    const showLoginBtn = document.getElementById("show-login");

    // Muestra el formulario de registro y oculta el de inicio de sesión
    showRegisterBtn.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        showRegisterBtn.classList.add("active");
        showLoginBtn.classList.remove("active");
    });

    // Muestra el formulario de inicio de sesión y oculta el de registro
    showLoginBtn.addEventListener("click", function(event) {
        event.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        showLoginBtn.classList.add("active");
        showRegisterBtn.classList.remove("active");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".form-container");

    // Centrar el formulario
    function centerForm() {
        formContainer.style.display = "flex";
        formContainer.style.flexDirection = "column";
        formContainer.style.alignItems = "center";
        formContainer.style.justifyContent = "center";
        formContainer.style.margin = "0 auto"; // Centrar horizontalmente
        formContainer.style.width = "300px"; // Ajusta el ancho según sea necesario
    }

    centerForm();

    // Toggle para mostrar el formulario de inicio de sesión y registro
    const showLoginButton = document.getElementById("show-login");
    const showRegisterButton = document.getElementById("show-register");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    showLoginButton.addEventListener("click", function () {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        showLoginButton.classList.add("active");
        showRegisterButton.classList.remove("active");
    });

    showRegisterButton.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        showRegisterButton.classList.add("active");
        showLoginButton.classList.remove("active");
    });
});
