import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
   <section class="flex flex-col items-center my-12">
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div className='flex justify-center'>
      <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">Create an
        account
      </h1>
      </div>
      <form class="space-y-4 md:space-y-6" method="POST">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium ">Your full name</label>
          <input type="text" name="name" id="name" class="bg-gray-50 border sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" required="" />
        </div>
        <div>
          <label for="username" class="block mb-2 text-sm font-medium ">Email Address</label>
          <input type="email" name="email" id="email" class="bg-gray-50 border sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@example.com" required="" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        </div>
        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link to={'/login'}
            class="font-medium text-blue-600 hover:underline dark:text-blue-500" >Login here</Link>
        </p>
      </form>
    </div>
  </div>
</section>
    </>
  )
}

export default Signup