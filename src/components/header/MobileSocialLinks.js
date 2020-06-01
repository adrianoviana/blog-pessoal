import React from "react";
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaTwitterSquare,
    FaYoutubeSquare
} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-1">

            <a className="text-info"
                href="https://www.youtube.com/channel/UCPl-Y1ypgzViQQDxeI26fMQ?view_as=subscriber">
                <span title="Youtube">
                    <FaYoutubeSquare size={26} style={{ color: "red" }} />
                </span>
            </a>
            <a className=" text-primary"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-light"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={26} style={{ color: "light" }} />
                </span>
            </a>
            <a className="text-warning"
                href={contacts.stackoverflow}>
                <span title="Stack Overflow">
                    <FaStackOverflow size={26} style={{ color: "warning" }} />
                </span>
            </a>
            <a className="text-info"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={26} style={{ color: "info" }} />
                </span>
            </a>
        </div>
    )
}

export default MobileSocialLinks;