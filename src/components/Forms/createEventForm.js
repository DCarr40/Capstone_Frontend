import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createEventAction } from '../Redux/actions/eventActions';
import "./style.css";


export const CreateEventForm = () => {
    const [eventData, setEventData] = useState({title: '', details: '', creator: '', tags: '',});
    const history = useHistory("/");
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Create Event - Runner's Inertia";
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEventAction(eventData));
        history.push("/");
    }

    return(
        <div>
            <form className="form-horizontal"  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Event Title</label>
                    <input type="text" id="title" value={eventData.title} onChange={(e) => setEventData({...eventData, title: e.target.value })}/> 
                </div>
                <div>
                    <label htmlFor="title">Event Creator</label>
                    <input type="text" id="title" value={eventData.title} onChange={(e) => setEventData({...eventData, title: e.target.value })}/> 
                </div>
                <div>
                    <label htmlFor="title">Event Tags</label>
                    <input type="text" id="title" value={eventData.title} onChange={(e) => setEventData({...eventData, title: e.target.value })}/> 
                </div>
                <div>
                    <label htmlFor="title">Event Details</label>
                    <input type="text" id="title" value={eventData.title} onChange={(e) => setEventData({...eventData, title: e.target.value })}/> 
                </div>
                <div>
                    <button type="btn">Submit</button>
                </div>
            </form>
        </div>
    )

};
