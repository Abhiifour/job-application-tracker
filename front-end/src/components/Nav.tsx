import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addId } from "../features/applicationSlice"

export default function Nav(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function updateState(){
        dispatch(addId({id:0}))
        navigate('/application')

    }
    return (
        <div className=" p-4  text-center border-b shadow-sm shadow-primary rounded-lg   mb-4 flex justify-between items-center">
            <div className="text-[24px] uppercase font-rubik text-primary">
            Application Tracker
            </div>
            <div className="flex justify-center gap-4 font-poppins text-white">
            <div className="text-[18px] px-4 py-2 rounded-full bg-primary cursor-pointer" onClick={updateState}>
                Add Application
            </div>
            {/* <div className="text-[18px] px-4 py-2 rounded-full bg-primary cursor-pointer">
                Analysis
            </div> */}
            </div>
        </div>
    )
}