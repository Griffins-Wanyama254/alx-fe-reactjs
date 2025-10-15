// src/components/UserProfile.jsx
export default function UserProfile() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden transform">
      <div className="flex flex-col items-center p-6">
        <img
          src="https://via.placeholder.com/150"
          alt="User profile"
          className="w-32 h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
          Jane Doe
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Front-End Developer passionate about creating interactive and inclusive digital experiences.
        </p>
      </div>
    </div>
  )
}
