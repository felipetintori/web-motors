import React, { Component } from 'react';
import HeaderInternas from './../../component/HeaderInternas';
import Footer from './../../component/Footer';


class HomeInterna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veiculos: []
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    let url = `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ veiculos: json })
      })

  }
  render() {
    return (

      <div className="homeInterna">
        <HeaderInternas />
        <div className="row">
          <div className="banner">
            <div className="container">

            </div>
          </div>
          <div className="conteudo container">
            <div className="row">
              <div className="veiculos" >
                <h1>Carros encontrados</h1>
                {

                  this.state.veiculos.map((veiculo) => {
                    return (
                      <div key={veiculo.ID} className="col-3-webmotors" >
                        <div className="panel">
                          <div className="img">
                            <img src={veiculo.Image} />
                          </div>
                          <div className="text">
                            <h2>{veiculo.Model}</h2>
                            <p>{veiculo.Version}</p>
                            <p className="price">R$ {veiculo.Price}</p>
                            
                          </div>


                        </div>
                      </div>
                    )
                  })

                }

              </div>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    );

  }

}

export default HomeInterna;