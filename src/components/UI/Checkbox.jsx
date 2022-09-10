export const Checkbox = ({ name, id, checked, label, onCheck }) => {
  return (
    <div>
      <input
        className="mr-2"
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onCheck}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
