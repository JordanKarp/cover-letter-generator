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
                <input type='text' name="firstName" placeholder="First Name" onChange={updateFirstName} />
                <input type='text' name="lastName" placeholder="Last Name" onChange={updateLastName} />
                <input type='text' name="email" placeholder="Email" onChange={updateEmail} />
                <input type='text' name="phoneNumber" placeholder="Phone Number" onChange={updatePhoneNumber} />
            </div>
        </>
    )
}

export default PersonalInfo;

