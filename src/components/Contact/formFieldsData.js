// formFieldsData.js

export const formFields = [
    {
      id: "name",
      label: "Name",
      state: "",
      errorState: "",
      helperText: "Name is required",
    },
    {
      id: "email",
      label: "Email",
      state: "",
      errorState: "",
      helperText: "Email is required",
    },
    {
      id: "phone",
      label: "Phone Number",
      state: "",
      errorState: "",
      helperText: "Please enter a 10-digit phone number",
    },
    {
      id: "message",
      label: "Message",
      state: "",
      errorState: "",
      helperText: "Message is required",
    },
  ];
  
  export function updateFormFieldState(formFields, fieldId, value) {
    return formFields.map((field) =>
      field.id === fieldId ? { ...field, state: value } : field
    );
  }
  