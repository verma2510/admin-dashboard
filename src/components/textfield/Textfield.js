import React from 'react'

export const Textfield = ({type, icon: Icon, name, placeholder, value, onChange, title}) => {
  return (
    <div className="textfield">
      {/* <p>{title ? title : "Title"}</p> */}
      {/* {Icon && <Icon className="textfieldIcon" />} */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : "Type here"}
      />
    </div>
  );
};
