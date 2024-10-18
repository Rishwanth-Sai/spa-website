import Head from 'next/head';
import './globals.css'; 

export default function Home() {
  return (
    <main>
      <Head>
        <title>Your Spa Website</title>
        <meta name="description" content="Experience beauty and relaxation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="absolute w-full h-32 bg-[#023A15]">
        <div className="flex justify-between items-center h-full px-8">
          <div className="logo">
            {/* Insert your logo here */}
          </div>
          <nav className="flex space-x-8 text-white">
            <a href="#home" className="font-semibold text-lg">Home</a>
            <a href="#about" className="font-semibold text-lg">About</a>
            <a href="#services" className="font-semibold text-lg">Services</a>
            <a href="#pages" className="font-semibold text-lg">Pages</a>
            <a href="#contact" className="font-semibold text-lg">Contact</a>
          </nav>
        </div>
      </header>

      {/* Home Hero Section */}
      <section className="relative h-screen bg-[#023A15]">
        <div className="absolute w-full h-full">
          {/* Hero Heading */}
          <div className="absolute left-[200px] top-[249px]">
            <h1 className="font-cormorant text-[95px] leading-[106px] text-white">
              A whole new world, a whole new look
            </h1>
          </div>

          {/* Description */}
          <div className="absolute left-[211px] top-[597px]">
            <p className="font-montserrat text-[18px] leading-[31px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum.
            </p>
          </div>

          {/* Button */}
          <div className="absolute left-[209px] top-[766px]">
            <div className="bg-white rounded-[60px] h-[66px] flex items-center justify-center">
              <a href="#" className="font-montserrat text-[16px] font-semibold text-[#023A15]">
                DISCOVER MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Special Service Section */}
      <section className="relative flex flex-col items-center p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-4">Special Service from Chloro</h1>
        <p className="text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.</p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Service 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-gray-300 h-32 w-32 mb-2 rounded"></div>
            <div className="desc-box text-center">
              <h2 className="text-lg font-semibold">Face Scrub</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="learn-more-button mt-2">
                <div className="bg-green-500 h-1 w-10 mx-auto mb-1"></div>
                <span className="font-semibold text-green-500">LEARN MORE</span>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-gray-300 h-32 w-32 mb-2 rounded"></div>
            <div className="desc-box text-center">
              <h2 className="text-lg font-semibold">Face Massage</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="learn-more-button mt-2">
                <div className="bg-green-500 h-1 w-10 mx-auto mb-1"></div>
                <span className="font-semibold text-green-500">LEARN MORE</span>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-gray-300 h-32 w-32 mb-2 rounded"></div>
            <div className="desc-box text-center">
              <h2 className="text-lg font-semibold">Relaxing Facial</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="learn-more-button mt-2">
                <div className="bg-green-500 h-1 w-10 mx-auto mb-1"></div>
                <span className="font-semibold text-green-500">LEARN MORE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Skincare Section */}
      <section className="relative bg-[#FDF5F3] p-8">
        <h1 className="font-cormorant text-[76px] leading-[126.52%] text-[#023A15] text-center">
          Expert Skincare for Your Beautiful Skin
        </h1>
        
        <p className="font-montserrat text-[18px] leading-[170.02%] text-[#567C49] text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae.
        </p>

        <div className="flex flex-col items-center">
          {/* Icon List */}
          <div className="flex items-center">
            <div className="bg-[#319E48] w-3 h-3 rounded-full mr-2"></div>
            <p className="font-montserrat text-[18px] text-[#567C49]">Cnsectetur adipiscing elit.</p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#319E48] w-3 h-3 rounded-full mr-2"></div>
            <p className="font-montserrat text-[18px] text-[#567C49]">Donec tincidunt, quam.</p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#319E48] w-3 h-3 rounded-full mr-2"></div>
            <p className="font-montserrat text-[18px] text-[#567C49]">Proin lobortis sed sapien.</p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#319E48] w-3 h-3 rounded-full mr-2"></div>
            <p className="font-montserrat text-[18px] text-[#567C49]">Dolor sem laoreet orci, quis.</p>
          </div>
          <div className="flex items-center">
            <div className="bg-[#319E48] w-3 h-3 rounded-full mr-2"></div>
            <p className="font-montserrat text-[18px] text-[#567C49]">Vestibulum ipsum tortor.</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="bg-[#023A15] rounded-[60px] h-[66px] flex items-center justify-center mt-6">
          <span className="font-montserrat text-[16px] font-semibold text-white">LEARN MORE</span>
        </div>
      </section>

      {/* Our Products Also Available At Section */}
      <section className="relative bg-[#023A15] p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-4">Our Products Also Available At</h1>
        
        <div className="flex justify-center space-x-6 mb-6">
          <div className="bg-[#C4C4C4] rounded-full h-16 w-16"></div>
          <div className="bg-[#C4C4C4] rounded-full h-16 w-16"></div>
          <div className="bg-[#C4C4C4] rounded-full h-16 w-16"></div>
          <div className="bg-[#C4C4C4] rounded-full h-16 w-16"></div>
        </div>
        
        <p className="text-center text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="bg-white rounded-[60px] h-[66px] flex items-center justify-center mx-auto w-1/4">
          <span className="font-montserrat text-[16px] font-semibold text-[#023A15]">VIEW ALL</span>
        </div>
      </section>

      {/* Blog and News Section */}
      <section className="relative p-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-4">Blog and News</h1>
        
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Blog Post 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold">Latest News Article</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.</p>
            <a href="#" className="mt-auto text-green-500">READ MORE</a>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold">Tips for Healthy Skin</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.</p>
            <a href="#" className="mt-auto text-green-500">READ MORE</a>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-lg font-semibold">New Products Launch</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.</p>
            <a href="#" className="mt-auto text-green-500">READ MORE</a>
          </div>
        </div>
      </section>

      {/* Visit Our Store Section */}
      <section className="relative bg-[#023A15] p-8">
        <div className="bg-[#C4C4C4] absolute top-0 left-0 w-full h-full opacity-70"></div>
        
        <h1 className="font-cormorant text-[76px] leading-[126.52%] text-white text-center">
          Visit Our Store and Get Our Product
        </h1>
        
        <p className="font-montserrat text-[18px] leading-[170.02%] text-white text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum.
        </p>

        <div className="bg-white rounded-[60px] h-[66px] flex items-center justify-center mx-auto w-1/4 mb-6">
          <span className="font-montserrat text-[16px] font-semibold text-[#023A15]">SHOP NOW</span>
        </div>

        {/* Gallery */}
        <div className="flex justify-center space-x-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-[#EAEAEA] rounded-[250px] h-[173px] w-[172px]"></div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-[#C4C4C4] h-[569px]">
        <div className="absolute w-full h-full bg-[#023A15] bg-opacity-70"></div>

        <h1 className="absolute text-4xl font-cormorant text-white text-center left-0 right-0 top-1/4">
          Get the Latest Update About Our Products and Services
        </h1>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="border-2 border-white rounded-full h-10 px-4 text-gray-700 placeholder-gray-400"
            />
            <button className="bg-white text-[#023A15] rounded-full h-10 px-6 ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full h-[590px] bg-[#023A15] flex flex-col">
        <div className="flex justify-between px-8 pt-10">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="w-[476px] h-[240.3px]">
              {/* Logo and Vectors */}
              <div className="relative">
                <div className="absolute left-[11.15%] top-[95.94%] bg-white w-1/6 h-1"></div>
                <div className="absolute left-[13.86%] top-[95.94%] bg-white w-1/6 h-1"></div>
                <div className="absolute left-[16.03%] top-[95.94%] bg-white w-1/6 h-1"></div>
                <div className="absolute left-[17.2%] top-[96.17%] bg-white w-1/6 h-1"></div>
                <div className="absolute left-[19.12%] top-[96.17%] bg-white w-1/6 h-1"></div>
                <div className="absolute left-[20.72%] top-[96.17%] bg-white w-1/6 h-1"></div>
                <div className="absolute left-[20.3%] top-[96.02%] bg-[#567C49] w-1/6 h-1 transform rotate-[135deg]"></div>
                <div className="absolute left-[22.08%] top-[96.02%] bg-[#567C49] w-1/6 h-1 transform rotate-[135deg]"></div>
              </div>
            </div>
            <p className="font-montserrat text-[18px] text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.
            </p>
            <div className="flex mt-4 space-x-4">
              {/* Social Media Icons */}
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                {/* Insert WhatsApp icon here */}
              </div>
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                {/* Insert YouTube icon here */}
              </div>
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                {/* Insert Facebook icon here */}
              </div>
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                {/* Insert Instagram icon here */}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col text-white">
            <h2 className="font-cormorant text-3xl">Products</h2>
            <p className="font-montserrat text-[18px]">Skincare</p>
            <p className="font-montserrat text-[18px]">Make Up</p>
            <p className="font-montserrat text-[18px]">Shampoo</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col text-white">
            <h2 className="font-cormorant text-3xl">About Us</h2>
            <p className="font-montserrat text-[18px]">Our Shop</p>
            <p className="font-montserrat text-[18px]">Career</p>
            <p className="font-montserrat text-[18px]">Specialist</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col text-white">
            <h2 className="font-cormorant text-3xl">Support</h2>
            <p className="font-montserrat text-[18px]">Blog</p>
            <p className="font-montserrat text-[18px]">Help</p>
            <p className="font-montserrat text-[18px]">FAQs</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white mt-4 px-8 py-4 text-center">
          <p className="font-montserrat text-[18px] text-white">
            Copyright © 2024 Your Spa Website. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
