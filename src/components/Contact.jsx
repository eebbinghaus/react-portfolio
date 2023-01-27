import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
    return <p>Message Sent!</p>;
};

const Contact = () => {
    const form = useRef();

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_uzgv95v",
                "template_16kx9sm",
                e.target,
                "H7DQCwB0-nTDKHjoz"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showResult(true);
    };

    return (
        <section className="text-white flex justify-center my-[100px] p-10">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-lg z-[5] bg-[#42666E] p-10 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2"
            >
                <h1 className="p-4 text-center text-[28px] font-racing mb-6 text-[#cbf83e]">
                    I would love to hear from you!{" "}
                </h1>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="required no-resize appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        />
                        <div>
                            <div className=" flex justify-center pt-8">
                                <button
                                    type="submit"
                                    value="Send"
                                    className="shadow bg-[#cbf83e] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-[#42666E] font-bold py-2 px-4 rounded"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                        <div className="p-4 text-center text-[28px] font-racing text-white">
                            {result ? <Result /> : null}
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
