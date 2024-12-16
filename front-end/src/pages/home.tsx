import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return (
        <div className="w-full h-screen  items-center justify-center flex flex-col">

            <div className="text-[30px] font-mono font-bold">
                Job Application Tracker
            </div>
            <div className="text-[60px] font-bold">
            Track & Organize Your Job Search
            </div>
            <div className="text-[20px] ">
            The leading tool for organizing, tracking, and managing all of your job applications in one place.
            </div>
            <div className="bg-primary text-[22px] font-semibold rounded-full p-3 w-[220px] text-center text-white mt-10 hover:bg-nav cursor-pointer" onClick={() =>navigate('/dashboard')}>
                Start Tracking
            </div>
        </div>
    )
}