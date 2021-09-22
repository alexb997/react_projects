const Joi = require('joi');
const express = require ('express');
const app = express();

app.use(express.json());

// app.get()
// app.post()
// app.put()
// app.delete()

const courses =[
    {id: 1,name: 'course1'},
    {id: 2,name: 'course2'},
    {id: 3,name: 'course3'}
]

app.get('/',(req,res) =>{
    res.send('Hello World!!!!');
});

app.get('/api/courses', (req,res) =>{
    res.send(courses);
});

// /api/courses/1
// app.get('/api/posts/:year/:month', (req,res)=>{
//     res.send(req.query);
//     //query - contains the objects after '?' #state_pic
// });

app.get('/api/courses/:id', (req,res) =>{
   let course = courses.find(
       c => c.id=== parseInt(req.params.id)
       );
   if(!course){
        return res.status(404).send('Error 404'); 
   }
   res.send(course);
});

app.post('/api/courses',(req,res) => {
    // joi validation - to return, version differences
    // const schema = {
    //     name: Joi.string().min(3).required()
    // }
    // const result = Joi.validate(req.body,schema);
    // if(result.error){
    //     res.status(400).send(result.error);
    //     return;
    // }

    //validation logic
    if(!req.body.name || req.body.name.length < 3){
        return res.status(400).send('Name is required and of minimum 3 characters');
    }    

    let course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
    //Look up the course, if !exists => 404
    let course = courses.find(
        c => c.id=== parseInt(req.params.id)
        );
    if(!course){
        return res.status(404).send('Error 404'); 
    }
    //Validate, if not valid => 400-Bad request 
    
    // const { error } = validateCourse(req.body); //result.error
    // if(error){
    //     res.status(400).send(result.error);
    //     return;
    // }

    if(!req.body.name || req.body.name.length < 3){
        return res.status(400).send('Name is required and of minimum 3 characters')
    }
    // this is just for now to continue working

    //Update Course
    course.name = req.body.name;

    //return updated course
    res.send(course);
})

app.delete('/api/courses/:id',(req,res)=>{
   // Look up the course, if !exists =>404
   let course = courses.find(
    c => c.id=== parseInt(req.params.id)
    );
    if(!course){
        return res.status(404).send('Can\'t find what you wanna delete'); 
    }
   //Delete
   const index = courses.indexOf(course);
   courses.splice(index,1);

   //Return the deleted course
   res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course,schema);
   
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
