/* eslint-disable react/prop-types */


function FieldInfo ({
    updateField,
    updateCommitment,
    updateInterest,
    updateDepartment,
}) {
    return (
        <>
            <h3>Field Info</h3>
            <div className="info">
                <input type='text' placeholder="Field" onChange={updateField} />
                <input type='text' placeholder="Commitment" onChange={updateCommitment} />
                <input type='text' placeholder="Interest" onChange={updateInterest} />
                <input type='text' placeholder="Department" onChange={updateDepartment} />
            </div>
        </>
    )
}

export default FieldInfo;