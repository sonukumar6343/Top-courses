import React from "react";
import { FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useState } from "react";



const Card = (props)=>{
    let course  = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha
            setLikedCourses( (prev) =>prev.filter((cid)=>(cid !==course.id)));
            toast.warning("like removed");
        }
        else{
            //pehle se like nhi hai ye course
            //insert karna h ye liked coursse h

            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }

            else{
                //non-empty pehle se
                setLikedCourses((prev) =>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }

    }

    return(
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>

        <div className='relative '>
            <img src={course.image.url} alt={course.title || "Course image"}/>

            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                {
                    !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75 rem"/>) : (<FcLike fontSize="1.75 rem"/>)

                }
                
                </button>
        </div>
        </div>
        

        <div className="p-4">
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className="mt-2  text-white">
            {
                course.description.length>100 ?
                (course.description.substr(0,100))+"...":(course.description)
            }
            </p>
        </div>
        </div>
    )
    
}

export default Card;