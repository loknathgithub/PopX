import '../index.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/sign-in");
    }
    const handleSignUp = () => {
        navigate("/sign-up");
    }    

    return (
        <div className="min-h-screen flex items-end justify-center p-6">
          <div className="h-screen flex flex-cols items-end bg-[#F7F8F9] p-[20px] pb-8">
            <div className="w-full">
            <h1 className="text-[28px] font-medium font-semibold text-[#1D2226]">Welcome to PopX</h1>
            <p className="text-[#1D2226] opacity-60 mt-2 p-text font-regular text-[18px]">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
    
            <div className="mt-6 space-y-3">
              <button className="w-[335px] py-3 bg-[#6C25FF] text-[#FFFFFF] text-[16px] font-medium  rounded-md font-semibold hover:bg-violet-700 transition" onClick={handleSignUp} >
                Create Account
              </button>
              <button className="w-[335px] py-3 bg-[#6C25FF4B] text-[#1D2226] text-[16px] font-medium rounded-md font-semibold hover:bg-violet-200 transition" onClick={handleSignIn}>
                Already Registered? Login
              </button>
            </div>
            </div>
          </div>
        </div>
    );
}

export default Landing;