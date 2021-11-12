import React from 'react';

const Footer = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,192L48,213.3C96,235,192,277,288,261.3C384,245,480,171,576,160C672,149,768,203,864,234.7C960,267,1056,277,1152,266.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div style={{backgroundColor: '#00cba9', textAlign:'center', marginTop: '-50px', height: '200px'}}>
                <p style={{paddingTop: '100px', fontSize: '20px'}}>Copyrights &copy; 2021-2025. All rights reserved by Nima</p>

            </div>
        </div>
    );
};

export default Footer;