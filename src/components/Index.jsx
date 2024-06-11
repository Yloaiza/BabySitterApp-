
export const Index = () => {
  return (

    <>
      <main>
        <section id="hero" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to BabySitter</h1>
            <p className="text-gray-400 mb-8">Reliable and trusted babysitting services for your little ones.</p>
            <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Get in Touch</a>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-white mb-4">Babysitting</h3>
                <p className="text-gray-400">Professional babysitting services to ensure your child's safety and happiness.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-white mb-4">Tutoring</h3>
                <p className="text-gray-400">Educational tutoring services to help your child excel in their studies.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-white mb-4">Activities</h3>
                <p className="text-gray-400">Engaging activities to keep your child entertained and active.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">About Us</h2>
            <p className="text-gray-400">We are dedicated to providing the best babysitting services with a team of experienced and caring professionals.</p>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
            <form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2023 BabySitter. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}


