import { comanda } from "../bd/comanda";
import { pedido } from "./pedido";

export const tablaPedido = {
    template: `
    <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg ">
        <div class="row">
            <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
            <h3>Pedidos</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Grupo</th>
                        <th>Mesa</th>
                        <th>Cerveza</th>
                        <th>Cantidad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody id="pedidos"></tbody>
            </table>
        </div>
    </div>`,
    script: () => {
        document.querySelector('#enviar').addEventListener('click', (event) => {
            event.preventDefault()
            const form = document.getElementById('form');
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return; 
            }
            const nuevaComanda = {
                numeroMesa: document.querySelector('#mesa').value,
                grupo: document.querySelector('#grupo').value,
                cerveza: document.querySelector('#cervezas').options[document.querySelector('#cervezas').selectedIndex].text,
                cantidad: document.querySelector('#cantidad').value,
                estado: 'pendiente'
            };
           

            comanda.push(nuevaComanda);
            pintarTabla(comanda);
        });

        function pintarTabla(pedidos) {
            let html = '';
            pedidos.forEach((pedido, index) => {
                html += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${pedido.grupo}</td>
                    <td>${pedido.numeroMesa}</td>
                    <td>${pedido.cerveza}</td>
                    <td>${pedido.cantidad}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>
                            <button  class=" eliminar btn btn-outline-danger w-100 btn-sm" data-index="${index}"> 🗑 Borrar pedido</button>
                        </div>
                    </td>
                </tr>`;
            });

            document.querySelector('#pedidos').innerHTML = html;
        }
        function Eliminar(array, index) {
            array.splice(index, 1);
            pintarTabla(array);
        }

        document.querySelector('body').addEventListener('click', (e) => {
            
        
            if (e.target.classList.contains('eliminar')) {
                let index = e.target.dataset.index;
                Eliminar(comanda, index);
            }
        });


        
    }
};
