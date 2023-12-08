import * as yup from "yup";

export const validationSchema = yup.object().shape({
  city: yup.string(),
  address: yup.string().required("Adresa është e detyrueshme").min(6,"Shkruaj adresen"),

});

export default validationSchema;

