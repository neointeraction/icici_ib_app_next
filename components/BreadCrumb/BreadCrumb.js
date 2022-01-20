import React from "react";
import ChevRight from "../../assets/images/icons/chevron-compact-right.png"

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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>            
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
