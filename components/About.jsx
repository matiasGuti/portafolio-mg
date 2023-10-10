import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className='flex_center flex-col pt-20 mx-5'>
      <div className='flex_center flex-col gap-8'>
        <Image
          src='/me.jpg'
          alt='Foto Matias'
          width={250}
          height={250}
          className='object-contain rounded-full animate-fade-down animate-once animate-ease-in-out animate-duration-1000 '
        />
        <div className='flex flex-col gap-3 font-quicksand'>
          <p className='text-4xl font-semibold animate-fade-down animate-once animate-ease-in-out animate-duration-500 animate-delay-1000'>
            Matías Gutiérrez
          </p>
          <p className='text-2xl animate-fade-down animate-once animate-ease-in-out animate-duration-500 animate-delay-[1500ms]'>
            Full-Stack developer
          </p>
        </div>
      </div>
      <div className='my-5 flex gap-5'>
        <a
          href='mailto:m.ignacio.guti@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/mail.svg' alt='Icono mail' width={30} height={30} />
        </a>
        <a
          href='https://www.linkedin.com/in/gutimatias/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/linkedin.svg'
            alt='Icono Linkedin'
            width={25}
            height={25}
          />
        </a>
        <a
          href='https://github.com/matiasGuti'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/github.svg' alt='Icono Github' width={30} height={30} />
        </a>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        iure ab, dolorum asperiores nulla incidunt quae iusto itaque sint
        commodi facilis animi quo vel similique reiciendis! Officia accusamus
        odio officiis?
      </div>
    </section>
  );
};

export default About;
