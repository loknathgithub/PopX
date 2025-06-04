import { useState, useEffect } from 'react';
import { useNavigate } from'react-router-dom';
import { useDispatch, useSelector } from'react-redux';

const SignUp = () => {
    const [isAgency, setIsAgency] = useState('');
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector((state) => state.user.user);

    const [data, setData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency: "",
      });
  
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        if (!data.username.trim()) newErrors.username = 'Username is required';
        if (!data.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!data.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email is invalid';
        if (!data.password) newErrors.password = 'Password is required';
        else if (data.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const inputChange = (e) => {
        const { name, value } = e.target;
        setData({ 
          ...data,
          [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
          setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    useEffect(() => {
        if(isAuthenticated) {      
          navigate('/dashboard');
        }
        else      
          navigate('/sign-up');
      },[isAuthenticated])
    
    //Have to configure backend
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;
        
    //     setIsSubmitting(true);
    //     try {
    //       const formData = new FormData();
    //       formData.append('fullName', data.fullName);
    //       formData.append('phoneNumber', data.phoneNumber);
    //       formData.append('email', data.email);
    //       formData.append('password', data.password);
    //       formData.append('companyName', data.companyName);
    //       formData.append('isAgency', isAgency === 'yes' ? 'true' : 'false')
          
    //       const response = await axios.post('Backend URL', formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data'
    //         }
    //       });
          
    //       if (response.status === 201) {
    //         navigate('/login');
    //       }
    //     } catch (error) {
    //       console.error('Registration error:', error);
    //       setErrors(prev => ({
    //         ...prev,
    //         submit: error.response?.data?.message || 'Registration failed. Please try again.'
    //       }));
    //     } finally {
    //       setIsSubmitting(false);
    //     }
    // };

    const handleClick = () => {
        navigate("/profile");
    }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md p-6 rounded-lg bg-[#F7F8F9] h-screen flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your<br/> PopX account</h2>
        <div className='w-[335px] flex flex-col justify-between h-full'>
        <form className="space-y-4">
          {/* Full Name */}
          <div className="my-2 relative">
            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
              Full Name<span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Phone Number */}
          <div className="my-2 relative">
            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
              Phone number<span className='text-red-500'>*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              
            />
          </div>

          {/* Email Address */}
          <div className="my-2 relative">
            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
              Email address<span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              
            />
          </div>

          {/* Password */}
          <div className="my-2 relative">
            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
              Password<span className='text-red-500'>*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
             
            />
          </div>

          {/* Company Name */}
          <div className="my-2 relative">
            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
              Company name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              
            />
          </div>

          {/* Are you an Agency? */}
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={() => setIsAgency('yes')}
                  className="accent-violet-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={() => setIsAgency('no')}
                  className="accent-violet-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </form>

        {/* Submit Button */}
        <button
            type="submit"
            className="mt-6 w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold py-3 rounded-md transition"
            onClick={handleClick}
          >
            Create Account
        </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;