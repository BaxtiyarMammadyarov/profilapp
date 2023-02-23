import React from 'react'
import "./style.css"
import foto from "../../img/baxa.jpg"
import ContactInfo from '../contact-info/ContactInfo'
function Rinfo() {
    let list = [
        {
            label: "Name",
            val: "Bəxtiyar"
        },
        {
            label: "Surname",
            val: "Məmmədyarov"
        }, {
            label: "Work",
            val: "Developer"
        }]
    return (
        <>
            <div className='name-surname'>
                <div name-surname-img><img src={foto} alt="" /></div>
                <div>
                    {
                        list.map((item) =>
                            <ContactInfo lab={item.label} val={item.val} />
                        )

                    }
                </div>


            </div>

        </>
    )
}

export default Rinfo