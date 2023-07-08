import React from 'react'
import style from './Education.module.css'
const Education = () => {

  const educationData = [
    {
      id: 1,
      year: '2023-present',
      title: 'Frontend Web Developer',
      university: 'FunctionUp',
      from:'Bangalore, India',
    },
    {
      id: 2,
      year: '2018-2022',
      title: 'B.tech in Computer Science and Engineering',
      university: 'IIMT Engineering College',
      from:'Meerut, Uttar-pradesh',
    },
    {
      id: 3,
      year: '2017-2018',
      title: 'Higher Secondary',
      university:'L.p Shahi Intermediate College',
      from:'Muzaffarpur, Bihar',
    },

    {
      id: 4,
      year: '2015-2016',
      title: ' Secondary',
      university:'Indraprastha International School',
      from:'Muzaffarpur, Bihar',
    },
  ]

  return (
    <div  className={style.container}>
      <div className={style.top_heading}>
        <h2>EDUCATION</h2>
          </div>
      <div className={style.education}>
        {educationData.map((data) => (
          <div className={style.education_card} key={data.id}>
            <div className={style.details}>
              <h5><span>.</span>{data.year}</h5>
              <h3>{data.title}</h3>
              <p>{data.university}</p>
              <p>{data.from}</p>
              </div>
            </div>                                                                
        ))}
        </div>
    </div>
  )
}
export default Education