import React from "react";


function BreadCrumb(props) {
  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav>
      <ol className="breadcrumbs">
        {props.crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "brd-disabled" : "";
          return (
            <li key={ci}>
              <a href={props.selected} className={`brdcrmb-item ${disabled}`}>
                {crumb}
              </a>  
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>        
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
