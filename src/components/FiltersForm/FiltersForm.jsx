import React from "react";
import Icon from "../Icon/Icon";
import { useTheme } from "styled-components";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import { Form } from "./FiltersForm.styled";
const FiltersForm = () => {
  const theme = useTheme();
  const vehicleEquipmentFilters = [
    { icon: "ac", text: "AC" },
    { icon: "transmission", text: "Automatic" },
    { icon: "kitchen", text: "Kitchen" },
    { icon: "tv", text: "TV" },
    { icon: "shower", text: "Shower/WC" },
  ];
  const VehicleTypeFilters = [
    { icon: "van", text: "Van" },
    { icon: "fully-integrated", text: "Fully Integrated" },
    { icon: "alcove", text: "Alcove" },
  ];
  return (
    <Form>
      <div className="inputContainer">
        <label htmlFor="location">Location</label>
        <div className="inputLocationContainer">
        <Icon name="location" stroke={theme.iconColorFirst} width="18" height="20"/>
        <input className="locationInput" type="text" name="location" placeholder="Kiev, Ukraine" />
        </div>
        
      </div>
      <p>Filters</p>
      <div>
        <h3>Vehicle equipment</h3>
        <ul>
          {vehicleEquipmentFilters.map(({ icon, text }) => (
            <li key={text}>
              <Icon name={icon} />
              <label htmlFor={text}>{text}</label>
              <input type="checkbox" name={text} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Vehicle type</h3>
        <ul>
          {VehicleTypeFilters.map(({ icon, text }) => (
            <li key={text}>
              <Icon name={icon} />
              <label htmlFor={text}>{text}</label>
              <input type="checkbox" name={text} />
            </li>
          ))}
        </ul>
      </div>
      <DefaultBtn type="submit" text="Search" />
    </Form>
  );
};

export default FiltersForm;
