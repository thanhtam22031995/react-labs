import './App.scss';

function App() {
  const name = 'Easy Front-end';
  const age = 19;
  const isMale = true;
  const empty = '';

  const showStudent = true;
  const studentA = { name: 'Tam', age: 18, address: { city: 'hcm', street: 'pvt' } };

  const studentList = [
    { id: null, name: 'Tam', age: 18 },
    { id: 2, name: 'Hau', age: 18 },
    { id: 3, name: 'Hoang', age: 18 },
  ];

  const colorList = ['green', 'goldenrod', 'red'];

  return (
    <section className="app">
      <h1>Hello {name}</h1>
      <p>
        Age: {age + 12} {name}
      </p>
      <p>Is male: {isMale ? 'Yes' : 'No'} </p>
      <p>
        Reder null/underfined: {empty} {null} {undefined} {''};
      </p>

      {true && <p>Render................</p>}
      {false && <p>No Render</p>}
      {!!0 && <p>number: 0</p>}
      {!!123 && <p>number: 123</p>}
      {!!'Hello' && <p>hello string</p>}
      {!!'' && <p>empty string</p>}

      {showStudent && (
        <div>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </div>
      )}

      {showStudent && (
        <>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </>
      )}
      {!showStudent && <p>don&apos;t show student</p>}
      {/* nen dung kieu nay thay vi toan tu 3 ngoi, de nhin hon thoi */}

      {showStudent ? (
        <div>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </div>
      ) : null}

      <ul className="student-list">
        {studentList.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </li>
        ))}
      </ul>

      <h2>Color List</h2>
      <ul className="color-list">
        {colorList.map((color) => (
          <li key={color} style={{ color: 'black', background: color }}>
            {color}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
