import Image from 'next/image';

function Contact() {
  return (

    <div className="flex h-screen">
    <div className="relative w-full">
      <Image
        src="/contactbg.jpeg"
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="mx-auto text-white w-11/12 lg:w-2/5 relative z-10 py-10">
        <h1 className="text-4xl font-semibold text-center">Заявка на послугу</h1>
        <p className="text-center my-10">Контакти</p>

        <form>
          <div className="mt-4">
            <label className="block mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-4 text-black" 
              type="text"
              placeholder="name@gmail.com"
              id="firstName"
              name="firstName"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-4 text-black"
              type="text"
              placeholder="(999) 999-999"
              id="lastName"
              name="lastName"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-4 text-black"
              type="email"
              placeholder="Max"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-4 text-black"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF7300] text-white font-semibold py-5 mt-4 rounded-lg"
          >
            Подати заявку
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;