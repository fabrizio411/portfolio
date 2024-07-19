import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdLink } from 'react-icons/io';
import { SiNextdotjs } from 'react-icons/si';
import Tooltip from '../Tooltip';
import { RiTriangleFill } from 'react-icons/ri';

interface ProjectCardProps {
  project: {
    imgURL: string;
    title: string;
    description: string;
    codeURL: string;
    liveURL: string;
    tools: {
        iconURL: string;
        tooltip: string;
    }[];
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className='flex flex-col md:flex-row gap-3 md:gap-6'>
      <Link href={project.liveURL} target='_blank' className='group relative w-full md:w-1/2 aspect-video rounded-xl bg-zinc-300 dark:bg-zinc-700 overflow-hidden'>
        <div className='relative top-6 left-6 group-hover:top-5 group-hover:left-5 transition-all w-full h-full'>
          <Image className='rounded-xl' alt='imagen del proyecto' src={project.imgURL} fill />
        </div>
      </Link>
      <div className='flex flex-col justify-center gap-4'>
        <h3 className='text-2xl font-semibold '>{project.title}</h3>
        <p className='text-text-2 dark:text-dark-text-2 text-lg w-11/12'>{project.description}</p>
        <div className='flex items-center gap-2'>
          {project.tools.map(tool => (
            <ToolCard key={tool.tooltip} tool={tool} />
          ))}
        </div>
        <div className='flex gap-2'>
          <Link className='link-btn' href={project.codeURL} target='_blank'>Repo</Link>
          <Link className='link-btn flex items-center gap-3' href={project.liveURL} target='_blank'>
            <p>Live</p>
            <IoMdLink className='w-6 h-6 fill-text-1 dark:fill-dark-text-1' /> 
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard


interface ToolCardProps {
  tool: {
    iconURL: string
    tooltip: string
  }
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {


  return (
    <Tooltip label={tool.tooltip}>
      <div className='w-8 h-8'>
        {tool.tooltip === 'NextJs' ? (
          <SiNextdotjs className='fill-black dark:fill-dark-text-1 w-full h-full' />
        ) : (
          <Image alt='tool imagen w-full h-full' src={tool.iconURL} fill />
        )}
      </div>
    </Tooltip>
  )
}