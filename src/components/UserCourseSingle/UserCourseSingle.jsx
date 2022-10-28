/* import React from 'react';
import ('./UserCourseSingle.styles.scss')

let res = {
  classOfCourse:"63594b98bf6d34f55f2726a8",
  classTitle :"SCRUM  2",
  classDescription: "Artefactos de SCRUM",
  classIsActive: true,
  classVideo: "https://makeitreal.s3.amazonaws.com/videos/89300933755/2022-08-23/JMzCyQQt1.mp4",
  classVideoImage: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Scrumm.PNG",
}
 let singleCourse = [
  title: "scrum",
subtitle: "",
description: {
  type: String,
  required: true
},
language: {
  type: String,
  enum: ['English(US)', 'Spanish(CO)'],
  default: 'English(US)'
},
level: {
  type: String,
  enum: ['Beginner level', 'Intermediate level', 'Expert level', 'All levels'],
  default: "All levels"
},
category: {
  type: String,
  enum: [
    "Development",
    "IT & Software",
    "Design",
    "Marketing",
    "Teaching & Academics",
  ]
},
primaryTaught: {
  type: String,
  required: true
},
image: {
  type: String,
  required: false
},
video: {
  type: String,
  required: false
},
learningObjectives: [{}],
requirements: [{}],
intendedLearners: [{}],
classes: [
  {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
],
price: {
  type: Number,
},
currency: {
  type: String,
  default: 'USD'
},
 ]

export default function UserCourseSingle() {
  return (
    <div className='UserCourseSingle'>
        <div className='UserCourseSingle__container'>
          <img className='UserCourseSingle__image' src={`${res.classVideoImage}`} alt='UserCourseSingle__image' />
          <h2 className='UserCourseSingle__title'>{res.classTitle}</h2>
          <p className='UserCourseSingle__description'>{res.classDescription}</p>
        </div>
    </div>
  )
}
 */
