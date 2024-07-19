import React from 'react'
import ProjectCard from '../cards/ProjectCard'

const Projects = () => {
  const projectsList = [
    {
      imgURL: '/projects/threads.png',
      title: 'Threads Clone',
      description: 'Modelo red social, postear, intereactuar y más',
      codeURL: '',
      liveURL: '',
      tools: [
        {
          iconURL: '/tools/nextjs.png',
          tooltip: 'NextJs'
        }, 
        {
          iconURL: '/tools/react.webp',
          tooltip: 'React'
        },
        {
          iconURL: '/tools/typescript.png',
          tooltip: 'TypeScript'
        },
        {
          iconURL: '/tools/sass.png',
          tooltip: 'SASS'
        },
        {
          iconURL: '/tools/mongodb.png',
          tooltip: 'MongoDB'
        },
      ]
    }
  ]

  return (
    <section className='pt-28' id='projects'>
      <h1 className='text-center text-3xl font-bold'>Proyectos</h1>
      <div className='mt-8'>
        {projectsList.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects