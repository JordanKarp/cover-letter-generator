import { useState } from "react"
import PersonalInfo from "./PersonalInfo";
import CompanyInfo from "./CompanyInfo";
import CoverPreview from "./CoverPreview"

export default function Content() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [hiringManager, setHiringManager] = useState(null);
    const [positionTitle, setPositionTitle] = useState(null);

    const updateFirstName = (event) => setFirstName(event.target.value)
    const updateLastName = (event) => setLastName(event.target.value)
    const updateEmail = (event) => setEmail(event.target.value)
    const updatePhoneNumber = (event) => setPhoneNumber(event.target.value)
    const updateCompanyName = (event) => setCompanyName(event.target.value)
    const updateHiringManager = (event) => setHiringManager(event.target.value)
    const updatePositionTitle = (event) => setPositionTitle(event.target.value)

    return (
        <div className="content">
            <div className="area">
                <PersonalInfo
                    updateFirstName={updateFirstName}
                    updateLastName={updateLastName}
                    updateEmail={updateEmail}
                    updatePhoneNumber={updatePhoneNumber}
                />
                <CompanyInfo
                    updateCompanyName={updateCompanyName}
                    updateHiringManager={updateHiringManager}
                    updatePositionTitle={updatePositionTitle}
                />
            </div>
            <div className="area">
                <CoverPreview
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phoneNumber={phoneNumber}
                    companyName={companyName}
                    hiringManager={hiringManager}
                    positionTitle={positionTitle}
                />
            </div>
        </div>
    )
}