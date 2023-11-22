import * as yup from "yup";

export const validationSchema = yup.object().shape({
  phone: yup.string().matches(/^\+383\d{8}$/, {
    message: "Formati i numrit nuk është i saktë.",
  }).required("Numri i telefonit është i detyrueshëm."),
  password: yup.string().required("Fjalkalimi është i detyrueshëm."),
 
});

export default validationSchema;


