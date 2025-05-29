

console.log("Início do sistema de entregas");


const entregasIniciais = [
    { id: 1, cliente: "João", endereco: "Rua A, 123", status: "Pendente" },
    { id: 2, cliente: "Maria", endereco: "Rua B, 456", status: "Pendente" },
    { id: 3, cliente: "Pedro", endereco: "Rua C, 789", status: "Pendente" }
];


localStorage.setItem("entregas", JSON.stringify(entregasIniciais));


function buscarEntregas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = localStorage.getItem("entregas");
            if (dados) {
                resolve(JSON.parse(dados));
            } else {
                reject("Nenhuma entrega encontrada no banco de dados.");
            }
        }, 2000); 
    });
}


function atualizarStatus(idEntrega) {
    setTimeout(() => {
        const dados = JSON.parse(localStorage.getItem("entregas"));
        const entrega = dados.find(e => e.id === idEntrega);
        if (entrega) {
            entrega.status = "Entregue";

            
            localStorage.setItem("entregas", JSON.stringify(dados));

            console.log(`\nStatus atualizado para entrega ID ${entrega.id}:`);
            console.log(entrega);
        }
    }, 3000);
}


buscarEntregas()
    .then(entregas => {
        console.log("\nEntregas encontradas:");
        entregas.forEach(e => {
            console.log(`ID: ${e.id}, Cliente: ${e.cliente}, Endereço: ${e.endereco}, Status: ${e.status}`);
        });

        
        atualizarStatus(1);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });

console.log("Buscando entregas...");
