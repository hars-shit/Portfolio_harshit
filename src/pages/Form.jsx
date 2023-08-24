import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';


const Main=styled('form')({
  zIndex:11111,
})

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwehe62', 'template_9ov3i7a', form.current, 'ZrX4X_IoPovPpwQo7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
const handleChange=(e)=>{
  console.log(e.target.value)
}
  return (
    <Main ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" onChange={handleChange}/>
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </Main>
  );
};
export default Form