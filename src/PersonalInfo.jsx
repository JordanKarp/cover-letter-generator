/* eslint-disable react/prop-types */

function PersonalInfo ({
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePhoneNumber,
}) {
    return (
        <>
            <h3>Personal Info</h3>
            <div className="info">
                <input type='text' placeholder="First Name" onChange={updateFirstName} />
                <input type='text' placeholder="Last Name" onChange={updateLastName} />
                <input type='text' placeholder="Email" onChange={updateEmail} />
                <input type='text' placeholder="Phone Number" onChange={updatePhoneNumber} />
            </div>
        </>
    )
}

export default PersonalInfo;

