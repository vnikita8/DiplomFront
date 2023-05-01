import React from "react";
import TextBlock from "./TextBlock";
import "./Footer.css";
import textUI from "../../Data/TextUI";


const elementsOne = textUI.Footer.Block_1.texts;
const elementsTwo = textUI.Footer.Block_2.texts;

const Footer = () => (
    <div className="Footer">
        <TextBlock header={textUI.Footer.Block_1.Title} elements = {elementsOne}/>
        <TextBlock header={textUI.Footer.Block_2.Title} elements = {elementsTwo}/>
    </div>
);


export default Footer;