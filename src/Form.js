import React from "react";

export default function FriendForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div>
        <h2>Make your pizza!</h2>
      </div>

      <div className="form-group inputs">

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          Special Instructions
          <input
            value={values.instructions}
            onChange={onChange}
            name="instructions"
            type="text"
          />
        </label>


        <label>
          Size
          <select onChange={onChange} value={values.role} name="size">
            <option value=""> - Select an option -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

      </div>

      <div className="form-group checkboxes">
        <h4>Toppings</h4>


        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange={onChange}
          />
        </label>

        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            checked={values.ham}
            onChange={onChange}
          />
        </label>

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>

      </div>

      <div>
        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.name}</div>
        </div>
      </div>

    </form>
  );
}
