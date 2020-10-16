import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";

const initialFormValues = {
  name: "",
  instructions: "",
  size: "",
  pepperoni: false,
  olives: false,
  ham: false,
  pineapple: false,
};
const initialFormErrors = {
  name: "",
};

const initialPizza = [];
const initialDisabled = true;

export default function Order() {

  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); 


  // const getPizza = () => {

  //   axios
  //     .get(`https://reqres.in/pizza`)
  //     .then((res) => {
  //       setPizza(res.results.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //     });
  // };

  const postNewPizza = (newPizza) => {

    axios
      .post("https://reqres.in/pizza", newPizza)
      .then((res) => {
        setPizza([res.data, ...pizza]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger
      });
  };


  const inputChange = (name, value) => {

    yup
      .reach(schema, name) 
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      size: formValues.size.trim(),
      hobbies: ["pepperoni", "olives", "ham", "pineapple"].filter(
        (toppings) => formValues[toppings]
      ),
    };

    postNewPizza(newPizza);
  };

  // useEffect(() => {
  //   getPizza();
  // }, []);

  useEffect(() => {

    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Lambda Eats</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {pizza.map((pizzas) => {
        return <Pizza key={pizzas.id} details={pizzas} />;
      })}
    </div>
  );
}