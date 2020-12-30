import { useEffect, useState } from 'react';
import postApi from './api/postApi';
import studentApi from './api/studentApi';
import './App.scss';
import Button from './components/Button';
import Counter from './components/Counter';
import ColorBox from './features/MagicBox/components/ColorBox';
import MagicBoxFeature from './features/MagicBox';

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  const [fetchingStudent, setfetchingStudent] = useState(true);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await postApi.getAll({ _page: 1, _limit: 10 });

        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll({ _page: 1, _limit: 10 });

        setStudentList(data);
      } catch (error) {
        console.log('Failed to fetch student list', error);
      }
      setfetchingStudent(false);
    })();
  }, []);

  return (
    <div>
      {loading && <p>loading ....</p>}

      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            {post.title}
            {/* <img src={post.imageUrl} alt="" /> */}
          </li>
        ))}
      </ul>

      {fetchingStudent && <p>Loading ...</p>}
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.age}</li>
        ))}
      </ul>
      <Counter />

      <Button>Hello</Button>
      <Button
        onClick={() => {
          alert('haha');
        }}
      >
        Click To Show Alert
      </Button>

      <MagicBoxFeature />
      <ColorBox />
    </div>
  );
}

export default App;
