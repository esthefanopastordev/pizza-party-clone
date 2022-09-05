export const Checkbox = ({ id, label, name, onChange }) => {
  return (
    <div>
      <input
        className="mr-2"
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
