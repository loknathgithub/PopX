import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import '../index.css';

const SignIn = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector((state) => state.user.user);

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({});


    const validateForm = () => {
        const newErrors = {};
        if(!data.email.trim()) newErrors.email = "Email is required";
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) newErrors.email = "Invalid email address";
        if(!data.password.trim()) newErrors.password = "Password is required";
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        setIsSubmitting(true);
    }

    const handleClick = () => {
        navigate("/profile");
    }

    useEffect(() => {
        if(isAuthenticated){
            navigate("/")
        }
    }, [isAuthenticated])

    return (
        <div className="min-h-screen flex items-center justify-center p-6 m-4">
          <div className="w-93 max-w-md p-6 rounded-lg bg-[#F7F8F9] flex h-200 flex-col shadow-lg">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Signin to your <br/> PopX account</h2>
            <p className="text-gray-500 mt-2 mb-6 p-text">
              Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
            </p>
    
            <form className="space-y-5">

              <div class="w-80 h-16 my-2 relative py-1.5">
                <label class="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                    Email address 
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email address" 
                    className="w-80 h-12 border border-[#bebebe] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                </div>
    
                <div class="my-2 relative py-1.5">
                <label class="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                    Password 
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password" 
                    className="w-80 h-12 border border-[#bebebe] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                </div>
    
              <button
                type="submit"
                className="w-80 h-12 my-3 py-3 bg-gray-300 text-white font-medium rounded-md"
                onClick={handleClick}
              >
                Login
              </button>
            </form>
          </div>
        </div>
    );
}

export default SignIn;