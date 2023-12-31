import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

    const css = {backgroundColor: hexToRgba(props.cor, '0.6')}
    return (
        (props.colaboradores.length > 0) &&
        <section className="time" style={css}>
            <input className="input-cor" type="color" value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nome)}/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        cor={props.cor}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={props.aoDeletar}
                    
                        />)}    
            </div>
            
        </section>
    )
}

export default Time;