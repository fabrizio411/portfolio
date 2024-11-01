import { getYearsDelta } from '@/utils/libs'

const About = () => {
  const birthdate = new Date('11-4-2002')
  const age = getYearsDelta(birthdate, new Date())

  const skills = ['Inglés', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node', 'Git', 'Responsive Design', 'MongoDB', 'SQL']
  return (
    <section className='pt-24 flex flex-col gap-12 md:flex-row' id='about'>
      <div className='md:w-1/2'>
        <h2 className='text-3xl font-bold text-center'>Sobre mi</h2>
        <div className='mt-6 text-text-2 dark:text-dark-text-2'>
          <p className='mb-3'>Soy <strong className='text-text-1 dark:text-dark-text-1'>Fabrizio Mourglia</strong>, tengo {age} años y vivo en Montevideo, Uruguay.</p>
          <p className='mb-3'>Me gusta el desarrollo web por todo lo que hay para aprender y por la sensación de resolver problemas que llevan a la construcción de algo nuevo. De forma autodidacta me focalicé en el <strong className='text-text-1 dark:text-dark-text-1'>Desarrollo Fullstack</strong>, especializandome un poco mas en Frontend.</p>
          <p className='mb-3'>Cuento con el First Certificate de Inglés, y actualmente estoy cursando la tecnicatura Analista en Tecnologías de la Información en la ORT.</p>
          <p className='mb-3'>Estoy abierto a <strong className='text-text-1 dark:text-dark-text-1'>Oportunidades Laborales</strong>, para poder seguir aprendiendo y creciendo.</p>
        </div>
      </div>

      <div className='md:w-1/2'>
        <h2 className='text-3xl font-bold text-center'>Habilidades</h2>
        <div className='flex gap-4 flex-wrap mt-6'>
          {skills.map(skill => (
            <p key={skill} className='bg-secondary dark:bg-accent font-semibold dark:text-dark-text-1 px-4 py-2 rounded-md'>{skill}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About