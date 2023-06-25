import Image from 'next/image';

function Contact() {
  return (
    <div className="flex">
      <div className="flex flex-col lg:flex-row lg:gap-x-48 mx-auto text-white w-11/12 z-2 py-10">
        <h1 className="text-6xl font-semibold text-center self-center">Заявка на послугу</h1>

        <form className="w-full self-center">
          <div className="mt-4">
            <label className="mb-6 flex flex-row" htmlFor="firstName">
              <p className='text-sky-500'>*</p> First Name
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="text"
              id="firstName"
              name="firstName"
              required
            />
          </div>

          <div className="mt-4">
            <label className="mb-6 flex flex-row" htmlFor="lastName">
              <p className='text-sky-500'>*</p>Last Name
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </div>

          <div className="mt-4">
            <label className="mb-6 flex flex-row" htmlFor="email">
              <p className='text-sky-500'>*</p> Email
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mt-4">
            <label className="mb-6 flex flex-row" htmlFor="message">
              <p className='text-sky-500'>*</p> Message
            </label>
            <input
              className="w-full border-b border-gray-300 border-opacity-50 px-3 py-2 bg-transparent text-white focus:focus:outline-none focus:border-white"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className='w-full flex justify-end'>
          <button
              type="submit"
              className="w-2/6 	bg-sky-500 text-white font-semibold py-4 mt-4 rounded-lg"
            >
              Подати заявку
          </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;