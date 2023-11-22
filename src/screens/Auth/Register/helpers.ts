import * as yup from "yup";

export const validationSchema = yup.object().shape({
  phone: yup
  .string().matches(/^\+383\d{8}$/, {
    message: "Formati i numrit nuk është i saktë.",
  })
    .required("Numri i telefonit është i detyrueshëm."),
  name: yup.string().required("Emri është i detyrueshëm."),
  surname: yup.string().required("Mbiemri është i detyrueshëm."),
  password: yup.string().required("Fjalkalimi është i detyrueshëm."),
  confirmPassword: yup.string().test({
    name: "passwords-match",
    message: "Fjalkalimet duhet të përputhen.",
    test: function (value) {
      return value === this.parent.password;
    },
  }),
});

export default validationSchema;
