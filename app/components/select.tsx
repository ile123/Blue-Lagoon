export default function Select({ name, action, styling, array }) {
  return (
    <select
      name={name}
      onChange={(e) => action(e.target.value)}
      className={styling}
    >
      {array.map((collection: any, key: number) => (
        <option key={key} value={collection}>
          {collection}
        </option>
      ))}
    </select>
  );
}
