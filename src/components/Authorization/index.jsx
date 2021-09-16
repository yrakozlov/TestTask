// import React, { Component } from "react";
// import "./style.scss";
// import { Input } from "./../index";
// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// export default class Authorization extends Component {
//   state = {
//     formControls: {
//       email: {
//         value: "",
//         type: "email",
//         placeholder: "Email",
//         errorMessage: "Введите корректный email",
//         valid: false,
//         touched: false,
//         validation: {
//           required: true,
//           email: true,
//         },
//       },
//       password: {
//         value: "",
//         type: "password",
//         placeholder: "password",
//         errorMessage: "Введите корректный Password",
//         valid: false,
//         touched: false,
//         validation: {
//           required: true,
//           password: true,
//           minLength: 6,
//         },
//       },
//     },
//   };

//   validateControl(value, validation) {
//     if (!validation) {
//       return true;
//     }

//     let isValid = true;

//     if (validation.required) {
//       isValid = value.trim() !== "" && isValid;
//     }

//     if (validation.email) {
//       isValid = validateEmail(value) && isValid;
//     }

//     if (validation.minLength) {
//       isValid = value.length >= validation.minLength && isValid;
//     }

//     return isValid;
//   }

//   onChangeHandler = (event, controlName) => {
//     const formControls = { ...this.state.formControls };
//     const control = { ...formControls[controlName] };

//     control.value = event.target.value;
//     control.touched = true;
//     control.valid = this.validateControl(control.value, control.validation);

//     formControls[controlName] = control;
//     this.setState({
//       formControls,
//     });
//   };

//   renderInputs() {
//     return Object.keys(this.state.formControls).map((controlName, index) => {
//       const control = this.state.formControls[controlName];

//       return (
//         <Input
//           key={controlName + index}
//           type={control.type}
//           value={control.value}
//           touched={control.touched}
//           placeholder={control.placeholder}
//           shouldValidate={!!control.validation}
//           errorMessage={control.errorMessage}
//           onChange={(event) => this.onChangeHandler(event, controlName)}
//           valid={control.valid}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className="wrapper">
//           <form className="auth-form">
//             <h1 className="form-title">Вход</h1>
//             <div className="form-fields">
//               {this.renderInputs()}
//               {/* <Input placeholder="Email" errorMessage="Test" />
//               <Input placeholder="Password" /> */}
//             </div>
//             <div className="form-buttons">
//               <button className="button">Войти</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
