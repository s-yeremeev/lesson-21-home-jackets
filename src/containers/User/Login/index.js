import React from "react"
import InputComponent from "./Input"
import { emailIsValid, passwordIsValid } from "../Register/Input/validations"
import bulmaLogoImg from "./img/bulma-logo.png"
import { Link, browserHistory } from "react-router"
import { getItem } from "../../../helpers/localStorage"
import "./index.scss"

const INPUT_ID_LOGIN = "INPUT_ID_LOGIN"
const INPUT_ID_PASSWORD = "INPUT_ID_PASSWORD"

const inputs = [
  {
    inputType: "email",
    inputClassNames: ["email-input"],
    iconClassNames: ["fa-user"],
    inputPlaceholder: "jsmith@example.org",
    inputId: INPUT_ID_LOGIN,
    isValid: false,
    validation: emailIsValid,
    field: "email"
  },
  {
    inputType: "password",
    inputClassNames: ["password-input"],
    iconClassNames: ["fa-lock"],
    inputPlaceholder: "●●●●●●●",
    inputId: INPUT_ID_PASSWORD,
    isValid: false,
    validation: passwordIsValid,
    field: "password"
  }
]

export default class LoginContainer extends React.PureComponent {
  inputs = {}
  state = {
    errors: {}
  }
  
  constructor(props) {
    super(props)
  }

  handlerInputBlur = async (event, inputId, validation) => {
    try {
      await validation(this.inputs[inputId].value)
      this.setState(({ errors }) => {
        delete errors[inputId]
        return {
          errors: { ...errors }
        }
      })
    } catch ({ message }) {
      console.error("--->", message)
      this.setState(({ errors }) => ({
        errors: {
          ...errors,
          [inputId]: message
        }
      }))
    }
  }

  handlerLoginClick = async () => {
    const _user = await getItem("user")

    const { errors } = await inputs.reduce(async (acc, { field, inputId }) => {
      const _acc = await acc
      try {
        const value = this.inputs[inputId].value
        await validation(value)
        if (_user[field] != value) throw new Error("Is not valid!")
        return Promise.resolve(_acc)
      } catch ({ message }) {
        _acc.errors.push({ [inputId]: message })
        return Promise.resolve(_acc)
      }
    }, Promise.resolve({ errors: [] }))

    if (errors.length) {
      this.setState(() => {
        const _errors = errors.reduce((acc, error) => {
          if (error) acc = { ...acc, ...error }
          return acc
        }, {})
        return { errors: _errors }
      })
    } else {
      browserHistory.push("/todo")
    }
  }
  // {"name":"Dsdadsdsa Dsaddsa","username":"sadsdsadsa","email":"asdsadas@dsddas.dodd","password":"12345678"}

  render() {
    const { errors } = this.state
    const isDisabled = Object.keys(errors).length

    return (
      <div className="login-wrapper columns">
        <div className="column is-8 is-hidden-mobile hero-banner">
          <section className="hero is-fullheight is-dark">
            <div className="hero-body">
              <div className="container section">
                <div className="has-text-right">
                  <h1 className="title is-1">Login</h1><br />
                  <p className="title is-3">Secure User Account Login</p>
                </div>
              </div>
            </div>
            <div className="hero-footer">
              <p className="has-text-centered">Image © Glenn Carstens-Peters via unsplash</p>
            </div>
          </section>  
        </div>
        <div className="column is-4">
          <section className="hero is-fullheight">
            <div className="hero-heading">
              <div className="section has-text-centered">
                <img src={bulmaLogoImg} alt="Bulma logo" width="150px" />
              </div>
            </div>
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <h1 className="avatar has-text-centered section">
                      <img src="https://placehold.it/128x128" />
                    </h1>
                    <div className="login-form">
                      {
                        inputs.map((input, index) => (
                          <InputComponent 
                            {...input}
                            key={index}
                            isValid={errors[input.inputId]}
                            inputRef={el => this.inputs[input.inputId] = el}
                            handlerInputBlur={this.handlerInputBlur}
                          />
                        ))
                      }
                      <p className="control login">
                        <button
                          disabled={isDisabled}
                          onClick={this.handlerLoginClick}
                          className="button is-success is-outlined is-large is-fullwidth"
                        >
                          Login
                        </button>
                      </p>
                      <div className="section forgot-password">
                        <p className="has-text-centered">
                          <Link to="/register">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>  
        </div>
      </div>
    )
  }
}