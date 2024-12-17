import Nav from "../components/Nav";
import back from '../assets/back.png'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function New(){

    const editId = useSelector((state : any) => state.application)


    const [position , setPosition] = useState( "");
    const [company , setCompany] = useState("");
    const [compensation , setCompensation] = useState(0);
    const [location , setLocation] = useState("");
    const [status , setStatus] = useState("");
    const navigate = useNavigate()
    

    useEffect( ()=>{
      try {
        if(editId.id !== 0){
           
            async function getData(){
                const response = await axios.post('https://job-application-tracker-4yti.onrender.com/find',{id :editId.id})
                setPosition(response.data.position)
                setCompany(response.data.company)
                setCompensation(response.data.compensation)
                setLocation(response.data.location)
                setStatus(response.data.status)
            }
            getData()
           }
      } catch (error) {
        console.log(error)
      }
    },[editId])


    async function handleDelete(){
        try {

            async function deleteData(){
                await axios.post('https://job-application-tracker-4yti.onrender.com/delete',{id :editId.id})
              
            }

            deleteData()
           

        } catch (error) {
            console.log(error)
        }
    }
    

    async function handleSubmit (e : React.FormEvent){
        e.preventDefault()
        try {
            if(editId.id === 0)
            await axios.post('https://job-application-tracker-4yti.onrender.com/create',{
                position,
                company,
                compensation,
                location,
                status
            })
            else{
                await axios.put('https://job-application-tracker-4yti.onrender.com/update',{
                    id: editId.id,
                    position,
                    company,
                    compensation,
                    location,
                    status
                })
            }
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className="w-full  p-4 font-poppins">
            <Nav/>
            
            <div className="text-primary font-medium text-[26px] w-[700px] m-auto p-4 font-poppins" >
                Add an Application
            </div>
            <div className="w-[700px] p-4 m-auto">
            <div className="rounded-lg hover:bg-nav w-[100px] text-[18px] p-2 text-center mb-4 cursor-pointer flex items-center justify-center" onClick={() => navigate('/dashboard')}>
            <div className='w-[15px] h-[15px]  cursor-pointer'>
                <img src={back} alt="full-screen" className='w-[15px] h-[15px]' />
            </div>
                Back
            </div>
           <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <label htmlFor="postion" className="text-[16px]">Job Postion</label>
                    <input type="text" id="position" placeholder="eg. SDE" className="p-3 text-[16px] rounded-lg bg-white border"value={position} onChange={(e)=>setPosition(e.target.value)} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="company" className="text-[16px]">Company</label>
                    <input type="text" id="company" placeholder="eg. Microsoft" className="p-3 text-[16px] rounded-lg bg-white border"value={company} onChange={(e)=>setCompany(e.target.value)}  />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="salary" className="text-[16px]">Salary</label>
                    <input type="text" id="salary" placeholder="$20000" className="p-3 text-[16px] rounded-lg bg-white border"value={compensation} onChange={(e)=>setCompensation(parseInt(e.target.value))} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="location" className="text-[16px]">Location</label>
                    <input type="text" id="location" placeholder="eg. Delhi" className="p-3 text-[16px] rounded-lg bg-white border" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                </div>
                <div className="flex  gap-4 items-center">
                    <label htmlFor="status" className="text-[16px]">Status</label>
                    <select name="status" id="status" className="p-2 text-[14px]" onChange={(e)=>setStatus(e.target.value)} value={status}>
                    <option value="Applied">Applied</option>
                    <option value="Offered">Offered</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className="flex gap-6">
                <button className="p-2 w-[120px] text-[16px] border rounded-lg bg-primary text-white cursor-pointer" onClick={handleSubmit}>{editId !== 0 ?"UPDATE":"SAVE"}</button>
                 {
                    editId.id !== 0 ?
                    <button className="p-2 w-[120px] text-[16px] border rounded-lg bg-primary text-white cursor-pointer" onClick={handleDelete}>DELETE</button> : <div></div>
                }
                </div>
            </form>
           </div>
        </div>
    )
}