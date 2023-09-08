
function CoverPreview ({
    firstName,
    lastName,
    email,
    phoneNumber,
    companyName,
    hiringManager,
    positionTitle,
    field,
    commitment,
    interest,
    department
}) {

    return (
        <div id="preview">
            <div id='letterHead'>
                <h1>{firstName} {lastName}</h1>
                <p>{email} - {phoneNumber}</p>
            </div>
            <hr></hr>
            <div> </div>
            <div id="letter">
                <br />
                <br />
                <div id="date">{new Date().toLocaleDateString()}</div>
                <br />
                <p>Dear {hiringManager},</p>
                <p>I am excited to be applying for the {positionTitle} position at {companyName}. When I saw this job posting, I knew I had to apply.</p>
                <p>I believe that my passion for {field}, strong commitment to {commitment}, and interest in {interest} make me an ideal candidate to join the {department} staff at {companyName}.</p>
                <p>Please find my resume and some examples of my work attached.</p>
                <p>I look forward to contributing my skills and experiences to the {positionTitle} position at {companyName} and hope to have the opportunity to speak with you further about how I can be an asset to your team.</p>
                <br />
                <p>Sincerely,</p>
                <p>{firstName} {lastName}</p>
            </div>
        </div>
    )
}
export default CoverPreview;