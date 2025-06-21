import React from "react";

const Footer = () =>{

    const currentYear = new Date().getFullYear();
    return(
            <footer className="fixed left-0 bottom-0 w-full bg-charcoal text-orange text-center py-4">
            <p className="">&copy; {currentYear} Misan Toghanro</p>
            </footer>

    )
}
export default Footer