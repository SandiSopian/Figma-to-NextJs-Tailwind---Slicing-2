import TextFooter from "./TextFooter";

export default function Footer() {
  return (
    <section id="contact" className="bg-[#331F13] py-10">
      <div className="container mx-auto px-8 md:px-12 text-white flex flex-col sm:flex-row justify-center sm:justify-evenly">
        <div className="sm:w-4/12 lg:w-3/12 sm:my-16">
          <img src="/logo-white.png" alt="Logo Sarang Coffee" className="sm:mb-4" />
          <TextFooter>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corrupti aliquam doloribus, ducimus repellendus cupiditate.</TextFooter>
        </div>

        <div className="sm:w-4/12 lg:w-3/12 sm:my-16 sm:ml-5 md:ml-10">
          <p className="text-2xl font-bold text-white mt-10 sm:mt-0 sm:mb-4">Get In Touch</p>
          <TextFooter>Address: xxx Stokes Isle Apt.</TextFooter>
          <TextFooter> 778, Sarang Coffee, US</TextFooter>
          <TextFooter> E-mail:SarangCoffee@mail.com</TextFooter>
          <TextFooter> Phone:+&#40;21&#41;-220-890-8890</TextFooter>
        </div>

        <div className="sm:w-4/12 lg:w-3/12 sm:my-16 sm:ml-5">
          <p className="text-2xl font-bold text-white mt-10 sm:mt-0 sm:mb-4">Newsletter</p>
          <TextFooter>Enter your email and receive the latest newsfrom us. We&#39;ll never share your email address</TextFooter>

          <div className="mt-6">
            <input type="email" placeholder="Your Email Address" className="bg-inherit outline-inherit px-auto text-xs lg:text-base" />
            <button className="absolute z-2 p-1 lg:p-2.5 ml-[-32px] lg:-ml-10 bg-yellow-300 rounded-r">
              <img src="/send.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
