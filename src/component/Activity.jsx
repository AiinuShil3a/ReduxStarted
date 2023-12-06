import { useDispatch } from 'react-redux'

const Activity = ({id , name , duration}) => {
    const dispatch = useDispatch()
    const deleteActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload:{
                id:id
            },
        });
    }
    return (
<div className='section'>
    <b>Activity:</b>&nbsp;{name}&nbsp;&nbsp;&nbsp;&nbsp;
    <b>Duration:</b>&nbsp;{duration}&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={deleteActivity}>DELETE_ACTIVITY</button>
</div>

    )
}

export default Activity;