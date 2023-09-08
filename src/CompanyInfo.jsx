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
                <input type='text' name="companyName" placeholder="Company Name" onChange={updateCompanyName} />
                <input type='text' name="hiringManager" placeholder="Hiring Manager Name" onChange={updateHiringManager} />
                <input type='text' name="positionTitle" placeholder="Open Position Title" onChange={updatePositionTitle} />
            </div>
        </>
    )
}

export default CompanyInfo;