import CoursesList from "./CoursesList";
import {useState, useEffect,useReducer} from 'react';
import Search from "./search";

const courses_data =[
  {
    id:1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id:2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    id:3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
]

const coursesReducer = (state,action) =>{
  switch(action.type) {
    case 'SET_COURSES':
      return action.payload;
    default:
      return new Error();
  }
};

const App = () => {

  const [courses, dispatchCourses] = useReducer(
    coursesReducer,
    []
  );
  const [isLoading, setIsLoading] =useState(false);

  const [searchText, setSearchText]=useState(
    localStorage.getItem('searchText') || ''
    );

  const handleSearch = event => {
    setSearchText(event.target.value);
  }

  const getCoursesAsync = () => new Promise( 
    resolve => 
       setTimeout(
         () => resolve({courses: courses_data}),
         2000
       )
    );

  useEffect(()=>{
    setIsLoading(true);
    getCoursesAsync().then(result => {
      dispatchCourses({
        type: 'SET_COURSES',
        payload: result.courses
      });
      setIsLoading(false);
    })
  },[]);

  useEffect(()=>{
    localStorage.setItem('searchText',searchText);
  },[searchText]);

  const filteredCourses = courses.filter( course => {
    return course.title.includes(searchText) || course.author.includes(searchText);
  });

  return (
    <div>
      <h1>List of Courses</h1>
      <hr />

      <Search value={searchText} onSearch={handleSearch}/>
      {isLoading ?(
        <p>Loading Courses...</p>
      ):(
        <CoursesList courses={filteredCourses}/>
      )}
      
    </div>
  );
}

export default App;
