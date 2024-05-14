const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
       Your one-stop destination for premium furniture, meticulously crafted with React, Redux Toolkit, Tailwind CSS, and DaisyUI. Dive into a world where comfort meets cutting-edge technology, offering seamless navigation and dynamic filtering options. With Tailwind CSS and DaisyUI's sleek designs, every click immerses you in a visual feast of style and functionality. Easily browse our curated collection of chairs, lamps, coffee tables, and beds, effortlessly adding your favorites to the cart. Say goodbye to clunky interfaces and hello to a smooth, intuitive shopping experience.
      </p>
    </>
  );
};
export default About;
