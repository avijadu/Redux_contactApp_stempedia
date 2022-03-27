import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Add = () => {
    const [name, setname] = useState("");
    const contacts = useSelector(state => state);
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            return toast.warning("please enter any name here");
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name
        }
        dispatch({
            type: "ADD_CONTACT",
            payload: data
        })
        toast.success("student added successfully");
        history('/');
    }

    return (
        <div className='container'>
            <div className="row">
                <h1 className="display-3 text-center">Add Contact</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                onChange={e => setname(e.target.value)}
                                value={name} />
                        </div>
                        <div className="form-gro">
                            <input type="submit" value="add Student" className='btn btn-block btn-dark my-3' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
