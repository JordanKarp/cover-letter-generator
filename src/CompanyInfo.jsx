/* eslint-disable react/prop-types */


function CompanyInfo ({
    updateCompanyName,
    updateHiringManager,
    updatePositionTitle,
}) {
    return (
        <>
            <h3>Position Info</h3>
            <div className="info">
                <input type='text' placeholder="Company Name" onChange={updateCompanyName} />
                <input type='text' placeholder="Hiring Manager Name" onChange={updateHiringManager} />
                <input type='text' placeholder="Open Position Title" onChange={updatePositionTitle} />
            </div>
        </>
    )
}

export default CompanyInfo;