import {React, useEffect, useState} from 'react';
import '../../App.css';

let date = new Date();
let ano = date.getFullYear();
let mes = date.getMonth() + 1;
// console.log(ano, mes)

export const Home = () =>{
  const [dataView, setDateView] = useState({
    ano, 
    mes
  });
  const [data, setData] = useState([]);
  
  const anterior = async () =>{
    if(dataView.mes === 1){
      setDateView({
        ano: dataView.ano - 1,
        mes: 12
      });
    }else
    {
      setDateView({
        ano: dataView.ano,
        mes: dataView.mes - 1
      })
    }
  };
  const proximo = async () =>{
    if(dataView.mes === 12){
      setDateView({
        ano: dataView.ano + 1,
        mes: 1
      });
    }else{
      setDateView({
        ano: dataView.ano,
        mes: dataView.mes + 1
      })
    }
  };
const listarExtrato = async e =>{
    let valores = [
      {
        "id": "3",
        "nome": "Água",
        "tipo": 1,
        "Situacao": "Liquidada",
        "valor": 347 
      },
      {
        "id": "2",
        "nome": "Luz",
        "tipo": 1,
        "Situacao": "Pendente",
        "valor": 400 
      },
      {
        "id": "1",
        "nome": "Salário",
        "tipo": 2,
        "Situacao": "Isolada",
        "valor": 1100 
      }
    ]
    setData(valores);
}
  useEffect(() =>{
    listarExtrato();
  }, []);
  return(
    <div>
      <p>Mes actual: {dataView.mes}</p>
      <p>Ano actual: {dataView.ano}</p>
      <button type="button" onClick={()=> anterior()}>Anterior</button>
      <button type="button" onClick={()=> proximo()}>Próximo</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Situação</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => (
             <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.tipo === 1? <p>Pagamento</p> : <p>Recebido</p>}</td>
              <td>{item.Situacao}</td>
              <td>{item.valor}</td>
             </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>1315</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}