import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { forEach } from "lodash";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { lang } = useContext(LangContext);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            if ((result.status = 200)) {
              setSuccess(true);
            }
          },
          (error) => {
            if (error.status !== 200) {
              setError(true);
            }
          }
        )
        .then(() => {
          forEach(form.current!, (el: HTMLInputElement) => {
            el.value = "";
          });
          setTimeout(() => {
            setError(false);
            setSuccess(false);
          }, 6000);
        });
    }
  };
  return (
    <section id="contact" className="w-full overflow-x-hidden">
      <div className="rotate-[177deg] scale-105 transform-gpu pb-44 bg-gradient-to-tr from-violet-500 to-violet-600 my-14"></div>
      <h2 className="heading my-10">{lang === "pl" ? "Kontakt" : "Contact"}</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="container relative flex flex-col max-w-4xl mx-auto p-10 gap-5 mb-10"
      >
        <input
          required
          type="text"
          id="name"
          name="user_name"
          placeholder={`${lang === "pl" ? "Imię" : "Name"}`}
          className="input"
        />

        <input
          id="email"
          required
          type="email"
          name="user_email"
          placeholder="Email"
          className="input"
        />

        <textarea
          id="message"
          required
          placeholder={`${lang === "pl" ? "Wiadomość" : "Message"}`}
          name="message"
          rows={5}
          className="input resize-none"
        ></textarea>
        <button
          disabled={error || success}
          className="bg-violet-600 text-white p-3 rounded-lg font-semibold hover:bg-violet-700 transition duration-300  tracking-wide md:text-lg"
        >
          {lang === "pl" ? "Wyślij" : "Send"}
        </button>
        <AnimatePresence>
          {success && (
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-lg absolute -bottom-3 sm:bottom-0 text-green-600"
            >
              {lang === "pl"
                ? "Twoja wiadomość została wysłana!"
                : "Your message has been sent!"}
            </motion.p>
          )}
          {error && (
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-lg absolute -bottom-3 sm:bottom-0 text-red-600"
            >
              {lang === "pl"
                ? "Nie udało wysłać się wiadomości."
                : "Something went wrong."}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
};

export default Contact;
