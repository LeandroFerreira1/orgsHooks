import green from '../assets/produtores/green.png'
import grow from '../assets/produtores/grow.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'
import salad from '../assets/produtores/salad.png'

const gerarNumeroEleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroEleatorio(1,500)}m`,
            estrelas: `${gerarNumeroEleatorio(1,5)}`
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroEleatorio(1,500)}m`,
            estrelas: `${gerarNumeroEleatorio(1,5)}`
        },
        {
            nome: "Jenny Jack",
            imagem: jennyJack,
            distancia: `${gerarNumeroEleatorio(1,500)}m`,
            estrelas: `${gerarNumeroEleatorio(1,5)}`
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroEleatorio(1,500)}m`,
            estrelas: `${gerarNumeroEleatorio(1,5)}`
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroEleatorio(1,500)}m`,
            estrelas: `${gerarNumeroEleatorio(1,5)}`
        }
    ]
}

export default produtores;

