import React from 'react'
import Skillscom from './skills_sm/Skillscom'
import "./style.css"

function Skills() {
    let list = [
        {
            val: "Java SE"
        },
        {
            val: "SQL / PLSQL"
        },
        {
            val: "MSSQL"
        },
        {
            val: "Springboot"
        },
        {
            val: "Spring Security"
        },
        {
            val: "Python"
        },
        {
            val: "Power BI"
        }
        ,
        {
            val: "Git"
        }

    ]
    return (
        <div className='Skills-p'>

{
      list.map((item) => 
        <Skillscom val = {item.val }  />
        )
    }
        </div>
    )
}

export default Skills