const JsxPractise = () => {
  const firstName = "Himanshu";
  const lastName = "Kumar";
  return (
    <div>
      <h1>
        My name is {firstName} {lastName}
      </h1>
      <h3>{`My name is ${firstName} ${lastName}`}</h3>
      <h2>Two plus three is {2 + 3}</h2>
      <h1>Thapa Technical Netflix Pick</h1>
      <h2>List of 5 Best Series</h2>
      <ol>
        <li>Dark</li>
        <li>Extra curricolar</li>
        <li>My Holo Love</li>
        <li>Mr Robot</li>
      </ol>
    </div>
  );
};

export default JsxPractise;
