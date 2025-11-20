import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import styles from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motions";




const Contact = () => {
  // Form state and ref for emailjs
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading state for form submission
  const [loading, setLoading] = useState(false);

  // Handle input changes and update form state.
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);



    //JQgphMBkvUHYICTJk
//template_aalym9p
//service_1mds78r

// Send email using emailjs
    emailjs.send(
  "service_1mds78r",
  "template_aalym9p",
  {
    from_name: form.name,
    to_name: "Mariyana",
    from_email: form.email,
    to_email: "marinqnak80@gmail.com",
    message: form.message,
  },
  "JQgphMBkvUHYICTJk"
)
// Handle success and error responses
.then((response) => {
  setLoading(false);
  console.log("SUCCESS!", response.status, response.text); // 👈 inspect fields
  alert("Thank you. I will get back to you as soon as possible.");
  setForm({ name: "", email: "", message: "" });
})
.catch((error) => {
  setLoading(false);
  console.error("FAILED...", error);
  alert("Something went wrong. Please try again.");
});

  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Contact form section with motion animation. The slideIn function is used to define the animation. The variants are passed to the motion.div component. */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          //ref is used to access the form<form DOM element for emailjs
          ref={formRef}
          onSubmit={handleSubmit}
          className=" mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>

            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>

            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 3D Earth canvas section with motion animation. The slideIn function is used to define the animation. The variants are passed to the motion.div component. */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
