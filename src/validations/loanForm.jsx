import * as Yup from "yup";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  phone: Yup.string()
    .matches(/^\+234\d{10}$/, "+234XXXXXXXXXX format required")
    .required("Phone Number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
});


export default validationSchema