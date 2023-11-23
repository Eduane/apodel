import * as yup from "yup";


export const validationSchema = yup.object().shape({
  name: yup.string().required("Emri është i detyrueshëm."),
  surname: yup.string().required("Mbiemri është i detyrueshëm."),
  phone: yup.string().required("Telefoni është i detyrueshëm."),
  registerDate: yup.string().required("Data e regjistrimit është e detyrueshme."),
  city: yup.string().required("Qyteti është i detyrueshëm."),
  
});

export const initialFormValues = {
  name: "John", 
  surname: "Doe", 
  phone: "123-456-7890", 
  registerDate: "2022-01-01", 
  city: "New York", 
};


