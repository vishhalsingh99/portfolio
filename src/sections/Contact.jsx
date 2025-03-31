
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Contact = () => {


  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://formsubmit.co/vsr89541@gmail.com", data);
      
      if (response.status === 200) {
        alert("Message sent successfully!");
        reset(); // Clears form fields
      }
  
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  

  

  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center p-20"
    >
      <div className="px-4 w-full">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Name..."
              {...register("name", { required: "Name is required" })}
              className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              {...register("email", { 
                required: "Email is required",
                pattern: { 
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                  message: "Invalid email format"
                }
              })}
              className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              rows={6}
              placeholder="Type your message..."
              {...register("message", { required: "Message is required" })}
              className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 to-indigo-600 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

