// import PropTypes from 'prop-types'
// import React from 'react'



// // PRIMARY BUTTON
// const ButtonPrimary = ({
//     href,
//     target = '_self',
//     label,
//     icon,
//     classes
// }) => {
//     if (href) {
//         return (
//             <a href={href} target={target} className={"btn btn-primary" + classes}>{label}
//                 {icon ?
//                     <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
//                     : undefined}
//             </a>
//         )
//     } else {
//         return (
//             <button className={"btn btn-primary" + classes}>
//                 {label}
//                 {icon ?
//                     <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
//                     : undefined}
//             </button>
//         )
//     }
//     ButtonPrimary.propTypes = {
//         label: PropTypes.string.isRequired,
//         href: PropTypes.string,
//         target: PropTypes.string,
//         icon: PropTypes.string,
//         classes: PropTypes.string
//     }
// }






// export {
//     ButtonPrimary
// }



import PropTypes from "prop-types";


// Primary button
const ButtonPrimary = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-primary" }>
                {label}

                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                    : undefined}
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary"}>
                {label}

                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                    : undefined}
            </button>
        )
    }
}

ButtonPrimary.prototype = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


//  OUTLINE BUTTON
const ButtoonOutline = ({ href, target = '_self', label, icon, classes }) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-outline"}>
                {label}

                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                    : undefined}
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline"}>
                {label}

                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                    : undefined}
            </button>
        )
    }
}

ButtoonOutline.prototype = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}



export {
    ButtonPrimary,
    ButtoonOutline
}