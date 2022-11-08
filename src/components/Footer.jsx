import "../App.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="useCasesFooter">
                <img src={require("../images/teamLogo.png")} alt="teamLogo.png" />
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Twitter</span>
            </div>
            <div className="useCasesFooter">
                <strong>Use Cases</strong>
                <span>UI design</span>
                <span>UX design</span>
                <span>Prototyping</span>
                <span>UI design</span>
                <span>UX design</span>
                <span>Prototyping</span>
            </div>
            <div className="useCasesFooter">
                <strong>Explore</strong>
                <span>Figma</span>
                <span>Customers</span>
                <span>Figma</span>
                <span>Customers</span>
                <span>WhyILoveFigma</span>
                <span>WhyILoveFigma</span>
            </div>
            <div className="useCasesFooter">
                <strong>Resources</strong>
                <span>Community Resources Hub</span>
                <span>Supports</span>
                <span>Education</span>
                <span>Community Resources Hub</span>
                <span>Supports</span>
                <span>Education</span>
            </div>
            <div className="srchEmail">
                <h3>Subscribe to our newsletter</h3>
                <input type="text" id="srchFooter" placeholder="Email" />
            </div>
        </div>
    )
}

export default Footer;