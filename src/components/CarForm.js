import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store/store";

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    }

        return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" className="input is-expanded border-2 border-rose-500" value={name} onChange={handleNameChange} />

                    </div>
                    <div className="field">
                        <label>Cost</label>
                        <input className="input is-expanded border-2 border-rose-500" value={cost || ''} onChange={handleCostChange} type="number" />

                    </div>

                    <div className="field">
                            <button className="border-4 border-indigo-500/100" type="submit">Add</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CarForm;