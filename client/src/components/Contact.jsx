import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 2));

  
  return (
    <section className="text-white flex justify-center mt-[100px] p-10">
      <form class="w-full max-w-lg z-[5] bg-[#42666E] p-10 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="p-4 text-center text-[28px] font-racing mb-6 text-[#cbf83e]">I would love to hear from you!</h1>
        <div class="flex flex-wrap -mx-3 mb-6">
        
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            
            <label
              class="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
            required
              class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            {/* <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              required
              class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
            />
            {errors.email && <span className="text-[#cbf83e]">Invalid email!</span>}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-[#d8dfee] text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
            required
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div class="">
          <div class=" flex justify-center">
            <button
              class="shadow bg-[#cbf83e] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-[#42666E] font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>

      {/* <div className="absolute z-[0] w-[10%] h-[35%] top-0 pink__gradient" /> 
        <div className="absolute z-[1] w-[30%] h-[10%] rounded-full bottom-40 white__gradient" />
         <div className="absolute z-[0] w-[50%] h-[50%] left-20  blue__gradient" /> */}
    </section>
  );
};

export default Contact;
