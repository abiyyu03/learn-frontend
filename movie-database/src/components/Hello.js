/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
const Hello = props => {
  // Melakukan destructing props (object)
  const { name, role } = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - {role}</p>
    </div>
  );
}

export default Hello;
