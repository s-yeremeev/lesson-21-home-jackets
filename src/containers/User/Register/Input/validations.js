export const nameIsValid = async function (value) {
  const regExp = /^[A-Z][a-z]+\s[A-Z][a-z]+$/
  
  if (!regExp.test(value)) throw new Error("Name is not valid!")
}

export const usernameIsValid = async function (value) {
  const regExp = /^[a-z0-9\_\.]{3,}$/i

  if (!regExp.test(value)) throw new Error("Username is not valid!")
}

export const emailIsValid = async function (value) {
  const regExp = /^[a-z0-9\.\_]{3,}\@[a-z]+\.[a-z]{2,}$/i

  if (!regExp.test(value)) throw new Error("Email is not valid!")
}

export const passwordIsValid = async function (value) {
  const regExp = /^[a-z0-9]{6,}$/i

  if (!regExp.test(value)) throw new Error("Password is not valid!")
}

export const confirmPasswordIsValid = async function (passwordValue, value) {
  if (!passwordValue || !value || passwordValue != value) throw new Error("Confirm password is not equal with Password!")
}