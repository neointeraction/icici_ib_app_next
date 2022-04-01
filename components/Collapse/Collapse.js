import React, { useState } from "react";

import CollapsePlus from "../../assets/images/icons/collapse+.svg";
import CollapseMinus from "../../assets/images/icons/collapse-.svg";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const Collapse = ({ title, body}) => {
  const [open, setOpen] = useState();

  const handleCollapse = () => {
    setOpen(!open);
  };


  return (
    <div className={`collapse-container ${open ? "open " : "closed"}`} >
      <div className="collpase-header-flex" onClick={handleCollapse}>
        <h1 className="collapse-title">{title}</h1>
        <button onClick={handleCollapse}>
          <img src={open ? CollapseMinus : CollapsePlus} alt="CollapsePlus" />
        </button>
      </div>

      <div className={`collapse-body ${open ? "open" : "closed"}`}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} className="collapse-body-text"  children={body} />
      </div>
    </div>
  );
};

export default Collapse;
