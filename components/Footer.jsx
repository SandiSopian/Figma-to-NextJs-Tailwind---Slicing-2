export default function Footer() {
  return (
    <section className="bg-[#331F13]">
      <div className="container mx-auto px-12 text-white flex justify-evenly">
        <div className="w-3/12 my-16">
          <img src="/logo-white.png" alt="Logo Sarang Coffee" />
          <p className="mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corrupti aliquam doloribus, ducimus repellendus cupiditate.</p>
        </div>

        <div className="w-3/12  my-16">
          <p className="text-2xl font-bold text-white">Get In Touch</p>
          <div className="mt-10 leading-loose">
            <p>Address: xxx Stokes Isle Apt.</p>
            <p> 778, Sarang Coffee, US</p>
            <p> E-mail:SarangCoffee@mail.com</p>
            <p> Phone:+&#40;21&#41;-220-890-8890</p>
          </div>
        </div>

        <div className="w-3/12  my-16">
          <p className="text-2xl font-bold text-white">Newsletter</p>
          <div className="mt-10 leading-loose">
            <p>Enter your email and receive the latest news</p>
            <p>from us. We&#39;ll never share your email address </p>
          </div>

          <div className="mt-6">
            <input type="email" placeholder="Your Email Address" className="bg-inherit outline-inherit" />
            <button className="absolute z-2 p-2 -ml-10 bg-yellow-300 rounded-r">
              <img src="/send.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
