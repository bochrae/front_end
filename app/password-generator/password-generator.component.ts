import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  password = ''
  passwordLength = 0
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  disabledBth() {
    return !(this.passwordLength !== 0 && (this.includeLetters || this.includeNumbers || this.includeSymbols))
  }
  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  generatePassword() {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_-,.'

    let availableCharacters = ''

    if (this.includeLetters) {
      availableCharacters += lowerCaseLetters
      availableCharacters += upperCaseLetters
    }

    if (this.includeNumbers) {
      availableCharacters += numbers
    }

    if (this.includeSymbols) {
      availableCharacters += symbols
    }

    availableCharacters.split('')
    const generatedPassword = []

    for (let i = 0; i < this.passwordLength; i += 1) {
      const max = availableCharacters.length
      const ran = Math.random()
      const idx = Math.floor(ran * (max + 1))

      generatedPassword.push(availableCharacters[idx])

    }

    this.password = generatedPassword.join('')
  }
}
