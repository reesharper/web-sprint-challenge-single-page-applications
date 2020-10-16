import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be 2 character"),
  instructions: yup
    .string(),
  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),
  pepperoni: yup.boolean(),
  olives: yup.boolean(),
  ham: yup.boolean(),
  pineapple: yup.boolean(),
});