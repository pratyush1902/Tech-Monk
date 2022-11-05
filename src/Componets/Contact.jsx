 import React from 'react'
 
 const Contact = () => {
   return (
     <div>
       <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Abc'/>
                </div>
                <div>
                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder='Abc@zyz.com'/>
                </div>
                <div>
                    <label htmlFor="">Messages</label>
                    <textarea type="text" placeholder='Wr'/>
                </div>
                <button>Contact</button>
            </form>
        </main>
       </div>
     </div>
   )
 }
 
 export default Contact
 