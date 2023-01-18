

const Resume = () => {
  return (
    <div className="min-h-screen">
       <div class="grid  justify-center">
            <button
              class="shadow bg-cyan-400 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded max-w-[180px] grid mb-10"
              type="button"
            >
             Download Resume
            </button>
            
            <section className="grid text-center">
              <h1 className="text-white text-[30px]">Skills</h1>
              <ul className="text-white">
                <p className="underline text-[24px]">Languages</p>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <ul className="text-white pt-4">
                <p className="underline text-[24px]">Tools</p>
                <li>React</li>
                <li>GraphQL</li>
                <li>MongoDB/Mongoose</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>SQL/mySQL</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
              </ul>
              <ul className="text-white pt-4">
                <p className="underline text-[24px]">Applications</p>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Apollo Sandbox</li>
                <li>Insomnia</li>
                <li>MySQL Workbench</li>
                <li>Mongo Compass</li>
              </ul>
            </section>
          </div>
    </div>
  )
}

export default Resume