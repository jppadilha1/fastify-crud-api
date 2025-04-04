import {randomUUID} from 'node:crypto' // gera sempre um id aleatório

export class DatabaseMemory {
    #videos = new Map()  // são outros tipos de estruturas de dados, set e map ( do Javascript), set não duplica, Map possui indexação, tipo chave, valor, para passarmos o id

    list() {
        return Array.from(this.#videos.entries()).map((arrayKeyValue) => {
            const id = arrayKeyValue[0]
            const data = arrayKeyValue[1]

            return {
                id,
                ...data
            }
        }) //array.from, transforma uma estrutura em array // entries(), retorna um array com a chave e o valor

    }
    
    create(treino) {
        const idTreino = randomUUID()

        this.#videos.set(idTreino, treino)
    }

    update(id, newtreino) {
        this.#videos.set(id, newtreino)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}

