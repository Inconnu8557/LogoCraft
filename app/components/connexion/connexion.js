const SignInBtnLink = document.querySelector('.signin-btn-link');
const SignUpBtnLink = document.querySelector('.signUp-btn-link');
const wrapper = document.querySelector('.wrapper');

SignUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})

SignInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})