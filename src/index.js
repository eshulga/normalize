import axios from 'axios';
import {normalize, schema } from 'normalizr';

const instructor = new schema.Entity('instructors');

const course = new schema.Entity('courses', {
  instructors: [instructor]
});

const students = new schema.Entity('students', {
  courses: [course]
})


const logOut = (result) => {
  const normalized = normalize(result, [students])
  console.log(result);
  console.log(normalized);
}

axios.get('https://api.myjson.com/bins/y355u')
  .then(response => logOut(response.data));