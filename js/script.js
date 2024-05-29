document.addEventListener("DOMContentLoaded", function () {
  const signUpLink = document.querySelector(".login-form-subscribe a");
  const loginLink = document.querySelector(".sign-up-form-login a");
  const loginForm = document.querySelector("#login");
  const signUpForm = document.querySelector("#sign-up");
  const loginErrorMessage = document.querySelector("#login-error-message");
  const signUpErrorMessage = document.querySelector("#sign-up-error-message");

  const showFormSignUp = () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".sign-up-form").style.display = "flex";
    document.querySelector(".login-text-content h2").innerHTML =
      "Olá! <br />Seja bem-vindo(a).";
    document.querySelector(".login-text-content p").innerHTML =
      "Crie sua conta para acessar a plataforma.";
  };

  const showFormLogin = () => {
    document.querySelector(".login-form").style.display = "flex";
    document.querySelector(".sign-up-form").style.display = "none";
    document.querySelector(".login-text-content h2").innerHTML =
      "Olá! <br />Seja bem-vindo(a) de volta.";
    document.querySelector(".login-text-content p").innerHTML =
      "Faça login para continuar acessando a página.";
  };

  if (signUpLink) {
    signUpLink.addEventListener("click", function (event) {
      event.preventDefault();
      showFormSignUp();
    });
  }

  if (loginLink) {
    loginLink.addEventListener("click", function (event) {
      event.preventDefault();
      showFormLogin();
    });
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = this.querySelector('input[name="email"]');
    const passwordInput = this.querySelector('input[name="password"]');
    let errorMessages = [];

    if (emailInput.value.trim() === "") {
      emailInput.classList.add("error");
      errorMessages.push("Email é obrigatório.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add("error");
      errorMessages.push("Email inválido.");
    } else {
      emailInput.classList.remove("error");
    }

    if (passwordInput.value.trim().length < 8) {
      passwordInput.classList.add("error");
      errorMessages.push("Senha deve conter pelo menos 8 caracteres.");
    } else {
      passwordInput.classList.remove("error");
    }

    if (errorMessages.length > 0) {
      loginErrorMessage.innerHTML = errorMessages.join("<br>");
      loginErrorMessage.style.display = "block";
    } else {
      loginErrorMessage.style.display = "none";

      fetch(
        `http://localhost:4000/users?email=${emailInput.value}&senha=${passwordInput.value}`
      )
        .then(response => response.json())
        .then(users => {
          const user = users.find(
            user => user.email === emailInput.value && user.password === passwordInput.value
          );
          if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'dashboard.html';
          } else {
            loginErrorMessage.innerHTML = "Email ou senha incorretos.";
            loginErrorMessage.style.display = "block";
          }
        })
        .catch(error => {
          console.error('Error:', error);
          loginErrorMessage.innerHTML = "Erro ao se comunicar com o servidor.";
          loginErrorMessage.style.display = "block";
        });
    }
  });

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = this.querySelector('input[placeholder="Nome"]');
    const emailInput = this.querySelector('input[placeholder="E-mail"]');
    const passwordInput = this.querySelector('input[name="password"]');
    const rePasswordInput = this.querySelector('input[name="re-password"]');
    let errorMessages = [];

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("error");
      errorMessages.push("Nome é obrigatório.");
    } else {
      nameInput.classList.remove("error");
    }

    if (emailInput.value.trim() === "") {
      emailInput.classList.add("error");
      errorMessages.push("Email é obrigatório.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add("error");
      errorMessages.push("Email inválido.");
    } else {
      emailInput.classList.remove("error");
    }

    if (passwordInput.value.trim().length < 8) {
      passwordInput.classList.add("error");
      errorMessages.push("Senha deve conter pelo menos 8 caracteres.");
    } else {
      passwordInput.classList.remove("error");
    }

    if (passwordInput.value !== rePasswordInput.value) {
      rePasswordInput.classList.add("error");
      errorMessages.push("As senhas não coincidem.");
    } else {
      rePasswordInput.classList.remove("error");
    }

    if (errorMessages.length > 0) {
      signUpErrorMessage.innerHTML = errorMessages.join("<br>");
      signUpErrorMessage.style.display = "block";
    } else {
      signUpErrorMessage.style.display = "none";

      const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };

      fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(response => response.json())
      .then(data => {
        alert("Cadastro submetido com sucesso!");
        localStorage.setItem('loggedInUser', JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error:', error);
        signUpErrorMessage.innerHTML = "Erro ao se comunicar com o servidor.";
        signUpErrorMessage.style.display = "block";
      });
    }
  });
});
