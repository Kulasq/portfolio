import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel
      beatae. Asperiores alias omnis quo rem. Rerum tenetur, dolores officiis
      autem unde, impedit laboriosam nulla magni minima, dignissimos nesciunt!
      Itaque!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Kulasq&show_icons=true&theme=dark" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kulasq&layout=compact&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre
