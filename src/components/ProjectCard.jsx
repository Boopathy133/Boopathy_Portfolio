import PropTypes from 'prop-types'
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ id, imgSrc, title, tags, projectLink, classes }) => {
    const navigate = useNavigate();
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60  ring-1 ring-inset ring-zinc-50/5 transition-colors" + classes}>
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img src={imgSrc} alt={title} loading='lazy' className="img-cover" />
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">{title}</h3>


                    <div className="flex flex-wrap items-center gap-2">
                        {tags.slice(0, 3).map((label, key) => (
                            <span
                                key={key}
                                className="h-8 text-sm to-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                            >
                                {label}
                            </span>
                        ))}

                        {tags.length > 3 && (
                            <span
                                className="h-8 text-sm text-zinc-400 bg-zinc-50/10 border border-zinc-500/20 grid items-center px-3 rounded-lg cursor-pointer hover:bg-zinc-50/20 transition-all"
                            >
                                +{tags.length - 3} more
                            </span>
                        )}
                    </div>

                </div>

                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 cursor-pointer" onClick={() => navigate(`/projects/${id}`)}>

                    <span className="material-symbols-rounded" aria-hidden='true' >
                        arrow_outward
                    </span>

                </div>

            </div>

            {/* <a href={projectLink} target='_blank' className="absolute inset-0"></a> */}
            {/* <Link to={`/project/${id}`} className="absolute inset-0"></Link> */}
        </div>
    )
}


ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}



export default ProjectCard