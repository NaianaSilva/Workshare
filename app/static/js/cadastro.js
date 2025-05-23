document.addEventListener('DOMContentLoaded', function () {
    // --- Password Toggle Functionality ---
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePassword');

    if (togglePasswordIcon && passwordInput) {
        togglePasswordIcon.addEventListener('click', function () {
         
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            if (type === 'password') {
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    }

 
    const cadastroForm = document.querySelector('.cadastro-box');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            
            const nomeCompletoInput = this.querySelector('input[placeholder="Nome Completo"]');
            const emailInput = this.querySelector('input[type="email"]');
          

            const nomeCompleto = nomeCompletoInput ? nomeCompletoInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const senha = passwordInput ? passwordInput.value : '';
        
            if (!nomeCompleto) {
                alert('Por favor, preencha o nome completo.');
                nomeCompletoInput.focus();
                return;
            }
            if (!email) {
                alert('Por favor, preencha o email.');
                emailInput.focus();
                return;
            }
            if (!senha) {
                alert('Por favor, crie uma senha.');
                passwordInput.focus();
                return;
            }
            if (senha.length < 6) { 
                alert('A senha deve ter pelo menos 6 caracteres.');
                passwordInput.focus();
                return;
            }

 
            console.log('Dados do Formulário de Cadastro:');
            console.log('Nome Completo:', nomeCompleto);
            console.log('Email:', email);
            console.log('Senha:', senha);

      
            alert('Cadastro realizado com sucesso (simulação)! Verifique o console para os dados.');

        });
    }
});