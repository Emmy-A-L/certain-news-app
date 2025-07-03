import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    if (!isSubmitting) return;
    const sendForm = async () => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.status === 200 || res.status === 201) {
          setResponseMsg(
            "Thank you for reaching out! We'll get back to you soon."
          );
          setFormData({ fullName: "", email: "", message: "" });
        } else {
          setResponseMsg(
            "There was an error submitting the form. Please try again later."
          );
        }
      } catch (error) {
        setResponseMsg(`Error: ${error}`);
      } finally {
        setIsSubmitting(false);
      }
    };
    sendForm();
    // eslint-disable-next-line
  }, [isSubmitting]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center py-8 px-4 md:px-0">
      <div className="flex w-full md:w-1/2">
        <h1 className="text-[12vw] font-black text-center font-mono">
          Get In Touch
        </h1>
      </div>

      <div className="flex w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="space-y-6 w-full md:w-[80%] h-fit mx-auto bg-white/80 p-8 rounded-xl shadow-lg"
        >
          <div>
            <input
              type="text"
              className="w-full border-b border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black focus:placeholder:text-gray-400 focus:rounded-md duration-200 ease-in-out"
              value={formData.fullName}
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full border-b border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black focus:placeholder:text-gray-400 focus:rounded-md duration-200 ease-in-out"
              value={formData.email}
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <textarea
              className="w-full border-b border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black focus:placeholder:text-gray-400 focus:rounded-md duration-200 ease-in-out"
              rows={5}
              value={formData.message}
              placeholder="Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-3 w-full cursor-pointer bg-purple-500 text-purple-200 font-bold py-3 rounded-lg shadow hover:bg-purple-700 transition"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>{" "}
            <span>{isSubmitting ? "" : <IoIosSend className="text-3xl" />}</span>
          </button>
          {responseMsg && (
            <p className="text-center text-red-700 font-medium mt-4">
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
