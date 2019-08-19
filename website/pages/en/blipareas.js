const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"Áreas do BLiP",
  "subtitle":"Conheça mais sobre o BLiP",
  "img":"/img/illustrations/ilustracao-categorias.svg",
  "from":"BLiP Help Center >",
  "here":"Áreas do BLiP",
  "intro":"Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards":[  
     {  
        "title":"Atendimento Humano",
        "url": "/ai", 
        "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
        "text":"ver mais!"
     },
     {  
      "title":"Builder",
      "url": "/builder", 
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"ver mais!"
   },
   {  
    "title":"Canais",
    "url": "/channels", 
    "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
    "text":"ver mais!"
    },
    {  
      "title":"Integrações",
      "url": "/integrations", 
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"ver mais!"
    },
    {  
        "title":"Inteligência Artificial",
        "url": "/ai", 
        "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
        "text":"ver mais!"
    },
    {  
        "title":"Métricas e Analytics",
        "url": "/analytics", 
        "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
        "text":"ver mais!"
    },
    {  
        "title":"Retenção e Engajamento",
        "url": "/growth", 
        "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
        "text":"ver mais!"
    }
  ]
};
//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class BlipIcon extends React.Component {
  render() {
    const className = 'blip-icon' + (this.props.className ? (' ' + this.props.className) : '')
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      width="1em" height="1em"
    >
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class BlipAreas extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
           
            <div>

            {/* Topo */}
            <div>
                <div className="pages-top-category">
                  <div className="main-category">
                    <p className="title-category">{data.title}</p>
                    <p className="subtitle-category">{data.subtitle}</p>
                  </div>
                  <div className="image-category">
                    <img className="img" src={data.img} />
                  </div>
                </div>
              </div>

              {/* Conteudo */}
              <div className="pages-content">
                <div className="navigation">
                  <p className="from">{data.from}</p>
                  <p className="here">{data.here}</p>
                </div>
                <div className="info">
                  <p className="intro">{data.intro}</p>
                </div>


                {/* Cards */}
                <div className="cards">
                  {data.cards.map((c, index) => ( 
                  <a href={c.url} className={`card-${index}`} key={index}>
                      <div className="title-with-icon">
                        <p className="title-area">{c.title}</p>
                      </div>
                   
                    <p className="abstract-area">{c.abstract}</p>
                    <div className="seeMore">
                      <p className="text-area">{c.text}</p>
                      <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-white"></BlipIcon>
                    </div>
                  </a>
                  ))}

                </div>
              </div>
          </div>
        );
    }
}

BlipAreas.title = 'Áreas do BLiP';
module.exports = BlipAreas; 