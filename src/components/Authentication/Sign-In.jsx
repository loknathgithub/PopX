import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import '../index.css';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((state) => state.user.user);

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLoginSuccess = (data) => {
        const {user, accessToken, refreshToken} = data;
        const userData = {
            user,
            accessToken,
            refreshToken
        };
        dispatch(setUserData(userData));
    };

    const validateForm = () => {
        const newErrors = {};
        if(!data.email.trim()) newErrors.email = "Email is required";
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) newErrors.email = "Invalid email address";
        if(!data.password.trim()) newErrors.password = "Password is required";
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const inputChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
        
        if(error[name]) {
            setError(prev => ({...prev, [name]: ""}));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()) return;

        setIsSubmitting(true);
        // try {
        //     const response = await axios.post("Backend Url", data, {
        //       headers: {
        //         'Content-Type': 'application/json'
        //       }
        //     });
      
        //     if (response.status === 200) {
        //       handleLoginSuccess(response.data.data);
        //     }
        //   } catch (error) {
        //     console.error('Login error:', error);
        //     setErrors(prev => ({
        //       ...prev,
        //       submit: error.response?.data?.message || 'Invalid email or password'
        //     }));
        //   } finally {
        //     setIsSubmitting(false);
        // }
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
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-sm p-6 rounded-lg bg-[#F7F8F9] h-screen">
            <h2 className="text-[28px] font-semibold text-[#1D2226] font-medium">Signin to your <br/> PopX account</h2>
            <p className="text-gray-500 mt-2 mb-6 p-text">
              Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
            </p>
    
            <form className="space-y-5">

              <div class="my-2 relative">
                <label class="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                    Email address 
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email address" 
                    className="w-[335px] h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                </div>
    
                <div class="my-2 relative">
                <label class="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                    Password 
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password" 
                    className="w-[335px] h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                </div>
    
              <button
                type="submit"
                className="w-full my-3 py-3 bg-gray-300 text-white font-semibold rounded-md"
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