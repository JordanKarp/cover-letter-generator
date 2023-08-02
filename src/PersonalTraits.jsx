/* eslint-disable react/prop-types */


function PersonalTraits ({
    firstName,
    lastName,
    email,
    phoneNumber,
}) {
    return (
        <>
            <div id="info">
                <input type='text' placeholder="First Name" onChange={firstName} />
                <input type='text' placeholder="Last Name" onChange={lastName} />
                <input type='text' placeholder="Email" onChange={email} />
                <input type='text' placeholder="Phone Number" onChange={phoneNumber} />
            </div>
        </>
    )
}

export default PersonalInfo;