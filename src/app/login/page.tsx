'use client'
import AuthLayout from "./layout"
import { Button, TextInput } from 'flowbite-react';

const Login = () => {
  return (
    <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white"> Accede a tu cuenta</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <TextInput
            id="email"
            name="email"
            placeholder="Email@text.com"
            type="email"
            className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            required 
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <TextInput
            id="password"
            name="password"
            placeholder="********"
            type="password"
            className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            required 
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

Login.Layout = AuthLayout;

export default Login