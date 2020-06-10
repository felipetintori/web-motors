import React, {Component} from 'react';
import Header from './../../component/Header';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
        marcas: [],
        versoes: [],
        modelos: [],
        
    }
    this.marcaSelect = this.marcaSelect.bind(this);
    this.modelo = this.modelo.bind(this);
    this.versao = this.versao.bind(this);
    
    
  }

  marcaSelect(e){
    let marcaSelect = e.target.value;
    
    this.versao(marcaSelect);
    this.modelo(marcaSelect);

    let form = document.getElementById("formHome")
    form.setAttribute("action", "/versao/" + marcaSelect)
    
    
  }

  modelo(e){
    
    let modeloWm = document.getElementById("modeloWm");

    modeloWm.removeAttribute("disabled")

    let urlModel = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=" + e;
    fetch(urlModel)
    .then((r) => r.json())
    .then((jsonModel) => {
        this.setState({modelos: jsonModel})
    })

   
    
  }

  versao(e){
    let vercaoWm = document.getElementById("vercaoWm");

    vercaoWm.removeAttribute("disabled")

    let urlVersao = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=" + e;
    fetch(urlVersao)
    .then((r) => r.json())
    .then((jsonVersao) => {
        this.setState({versoes: jsonVersao})
    })
    
  }

 

  

  componentDidMount(){
    let url = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make";
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
        this.setState({marcas: json})
    })
    
  }

  render(){
    return (
    
      <div className="home">
        <Header/>
        <div className="container"> 
          <div className="painel">
            <div className="form-search">
              <form id="formHome">
                <div className="row">
                  <div className="form-control-checked">
                    <input type="checkbox" />
                    <label>Novos</label>
                  </div> 
                  <div className="form-control-checked">
                    <input type="checkbox" />
                    <label>Usados</label>
                  </div> 
                  
                </div> 
                <div className="row">
                  
                  
                  {/* Marca */}
                  <div className="col-25-webmotors">
                    <div className="form-control">
                      <label className="label-form">Escolha uma Marca:</label>
                      <select id="marcaWm"   onChange={this.marcaSelect}  >
                        
                        {
                           
                          this.state.marcas.map((marca) => {
                            return(
                              <option key={marca.ID} value={marca.ID} > {marca.Name}</option>                           
                            )
                          })
                         
                        }
                        
                      </select>
                    </div>                  
                  </div>
                  {/* Fim Marca */}

                  <div className="col-25-webmotors">
                    <div className="form-control">
                    <label className="label-form">Escolha um Modelo:</label>
                      <select disabled id="modeloWm">
                      {
                           
                        this.state.modelos.map((modelo) => {
                          return(
                            <option key={modelo.ID} value={modelo.ID} > {modelo.Name}</option>                           
                          )
                        })
                          
                      }
                      </select>
                    </div>                  
                  </div>
                  <div className="col-6-webmotors">
                    
                    <div className="form-control">
                    <label className="label-form">Escolha uma Versão:</label>
                      <select disabled id="vercaoWm">
                      {
                           
                        this.state.versoes.map((versao) => {
                          return(
                            <option key={versao.ID} value={versao.ID} > {versao.Name}</option>                           
                          )
                        })
                          
                      }
                    
                      </select>
                    </div>                  
                  </div>
                </div>
  
               
                <div className="row">
                <div >
                    <div className="form-control">
                      <input type="submit" value="Enviar" />
                    </div>                  
                  </div>
                </div>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }
  
}

export default Home;