import { TbTrashXFilled } from 'react-icons/tb'
import "./Colaborador.css"

const Colaborador = ({cor, nome, cargo, imagem, aoDeletar}) => {
    return (
        <div className="colaborador">
            
            
            <TbTrashXFilled className="deletar" onClick={() => aoDeletar(nome)}/>
            <div className="cabecalho" style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;