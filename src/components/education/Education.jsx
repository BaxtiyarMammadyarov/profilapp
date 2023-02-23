import React from 'react'
import Eduinfo from '../eduinfo/Eduinfo'
import "./style.css"

function Education() {
  let list = [
    {
      title: "Kompüter Elmleri",
      subtitle: "Bakı Dövlət Universiteti",
      year: "09/2010-12/2014",
    },
    {
      title: "SQL / PlSQL təlimi",
      subtitle: "ORİENT İTM",
      year: "09/2019-12/2019",
    },
    {
      title: "Java proqramlaşdırma",
      subtitle: "İKTLAB tətbiq və tədris mərkəzi",
      year: "10/2020-06/2021",
    },
    {
      title: "Java proqramlaşdırma",
      subtitle: "Sənaye və İnnovasiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzinin Crocusoft Academy ilə birgə əməkdaşlıq",
      year: "04/2021-11/2021"
    },
    {
      title: "Data analitaka təlimi",
      subtitle: "Headway LLC & Gadimlie studio",
      year: "02/2022-06/2022",
    },
    {
      title: "Sql Developer",
      subtitle: "Sənaye və İnnovasiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi",
      year: "06/2022-08/2022",
    }
  ]
  return (
    <div className='education'>
    {
      list.map((item) => 
        <Eduinfo title = {item.title }  subtitle ={item.subtitle} year = {item.year} />
        )
    }
   

    </div>
  )
}

export default Education