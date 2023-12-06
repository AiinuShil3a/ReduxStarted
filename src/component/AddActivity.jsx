import {useState} from 'react'
import { useDispatch } from 'react-redux'

const AddActivity = () => {
    const dispatch = useDispatch();
    const [data , setData] = useState({
        name:"",
        duration:"",
    })
    const keyChange = (e) => {
        e.persist();
        setData((prev) => ({...prev , [e.target.name]: e.target.value}));
    }

    const addActivity = () => {
        dispatch({
            type:"CREATE_ACTIVITY",
            payload: {
                name:data.name,
                duration:data.duration
            }
        })
    }
  return (
    <div>
        <div className='input-section'>
            <p>Activity name</p>
            <input type="text" name="name" placeholder='ActivityName' onChange={(e) => keyChange(e)} />
        </div>
        <div className='input-section'>
            <p>Activity duration</p>
            <input type="text" name="duration" placeholder='ActivityName' onChange={(e) => keyChange(e)} />
        </div>
        <button onClick={addActivity}>CREATE_ACTIVITY</button>

    </div>  
  )
}

export default AddActivity