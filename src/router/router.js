import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main'
import AtividadeForm from '../components/AtividadeForm'
import AtividadeLista from '../components/AtividadeLista'
import Atividade from '../components/Atividade'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/atividade-form',
        name: 'atividade-form',
        component: AtividadeForm

    },
    {
        path: '/atividade-lista',
        name: 'atividade-lista',
        component: AtividadeLista
    },
    {
        path: '/atividade',
        name: 'atividade',
        component: Atividade
    }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router