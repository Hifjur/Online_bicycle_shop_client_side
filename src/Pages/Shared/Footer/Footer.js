import React from 'react';

const Footer = () => {
    const style = {
        backgroundColor:'rgb(35, 34, 34)',
        
        textAlign: "center",
        padding: "20px",
        position: "static",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
        marginTop: '50px'
    }
    return (
        <div style={style}>
            <footer>footer</footer>
        </div>
    );
};

export default Footer;