// 'use client'
import React from "react";
import ButtonMain from "./ButtonMain";

const Subcribe = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  // });

  // const handleChange = (e:any) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const submitFormData = async (data:any) => {
  //   try {
  //     const response = await fetch('https://formsubmit.co/sameersultan1001@gmail.com', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     // Handle the response as needed
  //     if (response.ok) {
  //       console.log('Form data submitted successfully!');
  //     } else {
  //       console.error('Error submitting form data');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form data', error);
  //   }
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   // Call your API here to submit the form data
  //   submitFormData(formData);
  // };
  return (
    <section
      id="subcribe"
      className=" py-10 grid place-items-center max-sm:px-4 px-20        text-black font-work-sans "
    >
      <div className=" leading-[60px] max-lg:leading-10 uppercase font-extrabold max-xl:text-[40px] text-[50px] text-center lg:w-1/2">
        subscribe to our newsletter
      </div>
      <form
        // action="https://formsubmit.co/sameersultan1001@email.com"
        // method="POST"
        className="grid grid-cols-3 max-md:grid-cols-2 max-xmd:grid-cols-1 gap-10 justify-center items-center font-poppins  mt-5"
      >
        <input
          name="name"
          //  value={formData.name} onChange={handleChange}
          type="text"
          placeholder="Your Name"
          className="bg-gainsboro-200 focus:outline-lightseagreen-100 rounded-full p-3"
        />
        <input
          name="email"
          // value={formData.email} onChange={handleChange}
          type="email"
          placeholder="Email Address"
          className="bg-gainsboro-200 focus:outline-lightseagreen-100 rounded-full p-3 "
        />

        <div className="max-md:col-span-2 max-xmd:col-span-1 grid place-items-center">
          <ButtonMain Btntext="Subcribe" path="#subcribe" />
        </div>
      </form>
    </section>
  );
};

export default Subcribe;
