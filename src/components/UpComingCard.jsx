import PropTypes from 'prop-types'
import React from 'react'

const ProjectCard = ({title, tags, classes, projectLink }) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60  ring-1 ring-inset ring-zinc-50/5 transition-colors" + classes}>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">{title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span key={key} className="h-8 text-sm to-zinc-400 bg-zinc-50/5 grid items-center px-3
                         rounded-lg">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
            <div className="w-11 h-11 rounded-lg grid place-items-center bg-blue-200 text-zinc-950 shrink-0 mt-7">
            <span className="material-symbols-rounded" aria-hidden='true' >
                    arrow_outward
                </span>
            </div>

            <a href={projectLink} target='_blank' className="absolute inset-0"></a>
        </div>
    )
}


ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}



export default ProjectCard