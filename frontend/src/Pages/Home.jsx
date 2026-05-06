import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyApp</h1>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/post" className="hover:text-indigo-600">Post</Link>
            <Link to="/event" className="hover:text-indigo-600">Event</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </div>
          {
            localStorage.getItem('token') ? (
              <>
                <Link to="/home" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Dashboard
                </Link>


                <Link to="/user/logout" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">

                Login
              </Link>
            )
          }

        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">


        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Build Better Products
            <span className="text-indigo-600">Faster</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A modern platform to manage your projects, collaborate with your team,
            and ship high-quality products on time.
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>


        <div className="flex justify-center">
          <div className="w-full h-72 md:h-96 bg-indigo-100 rounded-2xl flex items-center justify-center">
            <span className="text-indigo-600 text-xl font-semibold">
              Illustration / Image
            </span>
          </div>
        </div>

      </section>


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md">
              <h4 className="text-xl font-semibold mb-4">Fast Performance</h4>
              <p className="text-gray-600">
                Optimized tools that help your team work faster and smarter.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md">
              <h4 className="text-xl font-semibold mb-4">Secure Platform</h4>
              <p className="text-gray-600">
                Industry-grade security to keep your data safe and protected.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md">
              <h4 className="text-xl font-semibold mb-4">Easy Collaboration</h4>
              <p className="text-gray-600">
                Work together seamlessly with real-time collaboration tools.
              </p>
            </div>

          </div>
        </div>
      </section>


      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <p>© 2026 MyApp. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </>
  )
}
