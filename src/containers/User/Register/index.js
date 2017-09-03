import React from "react"
import ButtonComponent from "./Button"
import InputComponent from "./Input"
import LinksContainer from "./Links"
import * as constants from "./constants"
import * as validations from "./Input/validations"
import { setItem } from "../../../helpers/localStorage"
import { browserHistory } from "react-router"

const inputs = [
  {
    placeholderText: "John Smith",
    labelText: "Name",
    typeInput: "text",
    inputId: constants.INPUT_ID_NAME,
    validation: validations.nameIsValid,
    field: "name"
  },
  {
    placeholderText: "jsmith",
    labelText: "Username",
    typeInput: "text",
    inputId: constants.INPUT_ID_USERNAME,
    validation: validations.usernameIsValid,
    field: "username"
  },
  {
    placeholderText: "jsmith@example.org",
    labelText: "Email",
    typeInput: "email",
    inputId: constants.INPUT_ID_EMAIL,
    validation: validations.emailIsValid,
    field: "email"
  },
  {
    placeholderText: "●●●●●●●",
    labelText: "Password",
    typeInput: "password",
    inputId: constants.INPUT_ID_PASSWORD,
    validation: validations.passwordIsValid,
    field: "password"
  },
  {
    placeholderText: "●●●●●●●",
    labelText: "Confirm Password",
    typeInput: "password",
    inputId: constants.INPUT_ID_CONFIRM_PASSWORD,
    validation: validations.confirmPasswordIsValid
  }
]

export default class RegisterContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      errors: {}
    }
  }

  handleRegisterClick = async () => {
    const { errors, user } = await inputs.reduce(async (acc, { field, inputId, validation }) => {
      const _acc = await acc
      try {
        const value = this[inputId].value
        switch (inputId) {
          case `${constants.INPUT_ID_CONFIRM_PASSWORD}`: {
            const passwordValue = this[constants.INPUT_ID_PASSWORD].value
            await validation(passwordValue, value)
            break
          }
          default: await validation(value)
        }
        if (field) _acc.user[field] = value
        return Promise.resolve(_acc)
      } catch ({ message }) {
        _acc.errors.push({ [inputId]: message })
        return Promise.resolve(_acc)
      }
    }, Promise.resolve({ errors: [], user: {} }))

    if (!errors.length) {
      await setItem("user", user)
      browserHistory.push("/todo")
    } else {
      this.setState(() => {
        const _errors = errors.reduce((acc, error) => {
          if (error) acc = { ...acc, ...error }
          return acc
        }, {})
        return { errors: _errors }
      })
    }

  }

  handlerInputBlur = async (value, inputId, isValid) => {
    try {
      switch (inputId) {
        case `${constants.INPUT_ID_CONFIRM_PASSWORD}`: {
          const passwordValue = this[constants.INPUT_ID_PASSWORD].value
          await isValid(passwordValue, value)
          break
        }
        default: await isValid(value)
      }
      this.setState(({ errors }) => {
        delete errors[inputId]
        return {
          errors: { ...errors }
        }
      })
    } catch ({ message }) {
      this.setState(({ errors }) => ({
        errors: {
          ...errors,
          [inputId]: message
        }
      }))
    }
  }

  render() {
    const { errors } = this.state
    const registerIsDisabled = Object.keys(errors).length

    return (
      <section className="hero is-fullheight is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-4 is-offset-4">
                <h1 className="title">
                  Register an Account
                </h1>
                <div className="box">
                  {
                    inputs.map(({ placeholderText, inputId, validation, labelText, typeInput }, index) => (
                      <span key={index}>
                        <InputComponent
                          functionRef={input => this[inputId] = input}
                          handleBlur={this.handlerInputBlur}
                          isValid={errors[inputId]}
                          placeholderText={placeholderText}
                          labelText={labelText}
                          typeInput={typeInput}
                          inputId={inputId}
                          validation={validation}
                        />
                        {
                          index == 2 ? <hr /> : null
                        }
                      </span>
                    ))
                  }
                  <hr />
                  <p className="control">
                    <ButtonComponent
                      handleClick={this.handleRegisterClick}
                      classNames={["is-primary"]}
                      buttonText={"Register"}
                      isDisabled={registerIsDisabled}
                    />
                    <ButtonComponent
                      classNames={["is-default"]}
                      buttonText={"Cancel"}
                    />
                  </p>
                </div>
                <LinksContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}