// Login Form Validation and Handling

const form = document.getElementById("loginForm")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Validation functions
function validateEmail(email) {
  if (!email.trim()) {
    return "Email is required"
  }
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address"
  }
  return ""
}

function validatePassword(password) {
  if (!password.trim()) {
    return "Password is required"
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters"
  }
  return ""
}

// Show error message
function showError(input, errorElement, message) {
  if (message) {
    input.classList.add("error")
    errorElement.textContent = message
  } else {
    input.classList.remove("error")
    errorElement.textContent = ""
  }
}

// Real-time validation
emailInput.addEventListener("blur", () => {
  const error = validateEmail(emailInput.value)
  showError(emailInput, emailError, error)
})

passwordInput.addEventListener("blur", () => {
  const error = validatePassword(passwordInput.value)
  showError(passwordInput, passwordError, error)
})

// Clear error on input
emailInput.addEventListener("input", () => {
  if (emailError.textContent) {
    emailError.textContent = ""
    emailInput.classList.remove("error")
  }
})

passwordInput.addEventListener("input", () => {
  if (passwordError.textContent) {
    passwordError.textContent = ""
    passwordInput.classList.remove("error")
  }
})

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Validate all fields
  const emailErr = validateEmail(emailInput.value)
  const passwordErr = validatePassword(passwordInput.value)

  showError(emailInput, emailError, emailErr)
  showError(passwordInput, passwordError, passwordErr)

  // If no errors, submit
  if (!emailErr && !passwordErr) {
    console.log("[v0] Form validation passed")
    console.log("[v0] Email:", emailInput.value)
    console.log("[v0] Password: [hidden]")

    // Here you would typically send the data to your backend
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({...}) })

    // For now, show success message
    alert("Login successful! (This is a demo)")

    // Reset form
    form.reset()
    emailInput.classList.remove("error")
    passwordInput.classList.remove("error")
    emailError.textContent = ""
    passwordError.textContent = ""
  } else {
    console.log("[v0] Form validation failed")
  }
})

// Google login button
const googleBtn = document.querySelector(".login-form__google")
googleBtn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("[v0] Google login clicked")
  alert("Google login integration coming soon!")
})

console.log("[v0] Login form initialized")
