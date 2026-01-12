import { useState } from "react";
import { userStore } from "../../store/RegisterStore";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  // Handle input change (like v-model)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the value
    setForm((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== "") {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate on submit
  const validate = () => {
    let isValid = true;

    if (!form.email.trim()) {
      setError((prev) => ({ ...prev, email: "Email is required!" }));
      isValid = false;
    }

    if (!form.password.trim()) {
      setError((prev) => ({ ...prev, password: "Password is required!" }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;



    try {
          // console.log("Login:", form.email, form.password);
      const data = await userStore.getUser();
      console.log(data);
      data.forEach(element => {
        console.log(element.name);
        if(element.email===form.email && element.password === form.password){
          localStorage.setItem("tokenPet",element.id);
          return;
        }
      });

      if(localStorage.getItem("tokenPet")){
        return navigate("/");
      }
      
      
    } catch (err) {
      console.error("Failed fetching users:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-blue-500">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 transition"
                placeholder="Enter your email"
              />
              {error.email && <div className="text-red-500 mt-1">{error.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 transition"
                placeholder="Enter your password"
              />
              {error.password && <div className="text-red-500 mt-1">{error.password}</div>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
