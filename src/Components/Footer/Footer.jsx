

const Footer = () => {

    const aboutUs = <>
        <li><a href="">About Us</a></li>
        <li><a href="">Order Tracking</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Press Coverage</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Complain / Advice</a></li>
        <li><a href="">Contact Us</a></li>
    </>



    return (
        <div className=" bg-secondary text-white">
            <div className="flex justify-between container mx-auto">
                <div>
                    <h2>Support</h2>
                </div>
                <div>
                    <h2>About Us</h2>
                    <ul>
                        {aboutUs}
                    </ul>
                </div>
                <div>
                    <h2>Policy</h2>
                </div>
                <div>
                    <h2>Stay Connected</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;