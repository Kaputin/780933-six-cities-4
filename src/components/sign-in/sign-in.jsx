import React, {PureComponent, createRef, Fragment} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../const.js";

export class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();

    this.props.onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {authorizationStatus} = this.props;

    return (
      <Fragment>
        {authorizationStatus === AuthorizationStatus.AUTH && <Redirect from="/login" to="/" />}
        {authorizationStatus === AuthorizationStatus.NO_AUTH &&
        <div className="page page--gray page--login">
          <Header />
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>

                <form className="login__form form" action="" onSubmit={this.submitHandler} method="post" >
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={this.loginRef}/>
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={this.passwordRef} />
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign in</button>
                </form>

              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </section>
            </div>
          </main>
        </div>}
      </Fragment>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
