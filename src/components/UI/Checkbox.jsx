export const Checkbox = ({ id, label, name, onCheck }) => {
  return (
    <div>
      <input
        className="mr-2"
        type="checkbox"
        name={name}
        id={id}
        onChange={onCheck}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
