
import * as Yup from "yup"


export const initialValues = {
    email: '', 
    password: '', 
    name: '',
    rapeatPassword: '',

}

export const validateSchemaAuth = Yup.object().shape({
    email: Yup.string().email("Введите корректный email").required("Поле обязательно к заполнению"),
    password: Yup.string().typeError("Введите коректный пароль").required("Поле обязательно к заполнению")
})

export const validateSchemaReg = Yup.object().shape({
    name: Yup.string().required("Поле обязательно к заполнению"),
    email: Yup.string().email("Введите корректный email").required("Поле обязательно к заполнению"),
    password: Yup.string().typeError("Введите коректный пароль").required("Поле обязательно к заполнению").matches(/[a-z]/, "Хотябы одну букву латинского алфавита").min(6, 'Не менее 6 символов'),
    rapeatPassword:  Yup.string()
    .test('passwords-match', 'Passwords must match', function(value){
      return this.parent.password === value
    })
})
