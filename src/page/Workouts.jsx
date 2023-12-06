import { useState } from 'react';
import Activity from '../component/Activity';
import AddActivity from '../component/AddActivity';
import { useSelector } from 'react-redux';

const Workouts = () => {
    const [add, setAdd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState('ADD_ACTIVITY');
    const allActivity = useSelector((state) => state);

    const handleClick = () => {
        setLoading(true);
        setAdd(!add);

        setTimeout(() => {
            setLoading(false);
            if (buttonText === 'ADD_ACTIVITY') {
                setButtonText('CLOSE_ACTIVITY');
            } else {
                setButtonText('ADD_ACTIVITY');
            }
        }, 2000);
    };

    return (
        <div className="workouts-wrapper">
            <h2>Workouts Tracking</h2>
            <div className="button-container">
                {loading ? (
                    <p>กำลังประมวณผล...</p>
                ) : (
                    <button onClick={handleClick}>
                        {buttonText}
                    </button>
                )}
                {add && <AddActivity />}
            </div>
            {allActivity.map((activity) => (
                <Activity
                    key={activity.id}
                    id={activity.id}
                    name={activity.name}
                    duration={activity.duration}
                />
            ))}
        </div>
    );
};

export default Workouts;
