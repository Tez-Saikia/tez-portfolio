import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Name Validation (at least 3 letters, no numbers)
    if (!/^[A-Za-z]{3,}$/.test(formData.name)) {
      newErrors.name =
        "Name must be at least 3 letters and contain no numbers.";
    }

    // Email Validation (must end with @gmail.com)
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Email must be a valid @gmail.com address.";
    }

    // Message Validation (at least 10 characters)
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formSubmitData = new FormData();
    formSubmitData.append("access_key", import.meta.env.VITE_API_KEY);
    formSubmitData.append("name", formData.name);
    formSubmitData.append("email", formData.email);
    formSubmitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formSubmitData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success",
          text: "Message sent successfully!",
          icon: "success",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setErrors({}); // Clear errors
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong!",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error! Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-[#0B0B0B] h-[125vh] sm:h-[50rem] md:h-[150vh] 2xl:h-[63rem]">
      <Nav />
      <div className="flex flex-col items-center justify-center px-6 pt-20 pb-8 md:pb-4">
        <h2 className="text-white text-3xl mb-10 md:text-6xl font-medium 2xl:text-7xl">
          Contact Me
        </h2>

        <form
          onSubmit={onSubmit}
          className="p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl border border-gray-600 2xl:max-w-[40rem] 2xl:"
        >
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1 text-center sm:max-lg:text-left md:text-xl 2xl:text-left">
              Your Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white text-black border rounded-md focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-black md:h-16 md:placeholder:text-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1 text-center sm:max-lg:text-left md:text-xl 2xl:text-left">
              Your Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white text-black border rounded-md focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-black md:h-16 md:placeholder:text-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1 text-center sm:max-lg:text-left md:text-xl 2xl:text-left">
              Message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your message..."
              className="w-full px-4 py-2 bg-white text-black border rounded-md focus:outline-none focus:ring-0 h-28 placeholder:text-sm placeholder:text-black resize-none select-none md:placeholder:text-lg md:h-40"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center sm:items-start sm:justify-start">
            <button
              type="submit"
              className="w-44  hover-cursor bg-white hover:bg-gray-200 text-black font-semibold py-2 rounded-sm transition-all md:w-60 md:h-14 md:text-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
