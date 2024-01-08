import React, { useState } from 'react';

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    // For example, you could send the data to a server or display a confirmation message
    console.log(contactInfo);
    alert('Your message has been sent! We will get back to you soon.');
    setContactInfo({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <div className="contact-page  border border-gray-600 w-96 h-96 shadow-lg px-9 my-4 ml-96 rounded-3xl bg-gray-100">
       <h1 className="font-bold p-4 ml-28 text-lg">Contact Us</h1>
    
       <form className=" " onSubmit={handleSubmit}>
        <div className="form-group p-2 w-96">
          <label className="p-0" htmlFor="name">Name: </label>
          <input  className="border border-gray-600 rounded-lg w-60 p-1 "
            type="text"
            placeholder="Abc...."
            id="name"
            name="name"
            required
            value={contactInfo.name}
            onChange={handleInputChange}
          />
        </div>
       
        <div className="form-group p-0 m-2 ">
          <label className="p-1" htmlFor="email">Email: </label>
          <input className="border border-gray-400 rounded-lg w-60 p-1"
            type="email"
            placeholder="abc@gmail.com"
            id="email"
            name="email"
            required
            value={contactInfo.email}
            onChange={handleInputChange}
          />
        </div>
       
        <div className="form-group p-1 -ml-4  w-auto flex ">
          <label  className="p-1" htmlFor="message">Message: </label>
          <textarea   required className="border border-gray-400 rounded-lg h-32 w-60 p-1"
            id="message"
            name="message"
            value={contactInfo.message}
            onChange={handleInputChange}
          />
        </div>
                
                <button className="border border-black ml-28 p-2 rounded-lg m-1 bg-slate-200" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
