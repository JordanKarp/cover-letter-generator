/* eslint-disable react/prop-types */


function FieldInfo ({
    updatePassion,
    updateCommitment,
    updateInterest,
    updateDepartment,
}) {
    return (
        <>
            <h3>Field Info</h3>
            <div className="info">
                <input type='text' name="passion" placeholder="Passion" onChange={updatePassion} />
                <input type='text' name="commitment" placeholder="Commitment" onChange={updateCommitment} />
                <input type='text' name="interest" placeholder="Interest" onChange={updateInterest} />
                <input type='text' name="department" placeholder="Department" onChange={updateDepartment} />
            </div>
        </>
    )
}

export default FieldInfo;