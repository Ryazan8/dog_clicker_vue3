import {defineStore} from 'pinia'

const baseLevelScore = 25

const levels = new Array(15).fill(0).map((_, i) => baseLevelScore * Math.pow(2, i))

const levelSores = levels.map((_, level) => {
    let sum = 0

    for (let [index, value] of levels.entries()) {
        if (index >= level) {
            return sum + value
        }
        sum += value
    }
    return sum
})

function computeLevelByScore(score) {
    for (let [index, value] of levelSores.entries()) {
        if (score <= value) {
            return {
                level: index,
                value: levels[index]
            }
        }
    }
}

export const useScoreStore = defineStore('score', {
    state: () => ({
        score: 0,
    }),
    getters: {
        level: (state) => computeLevelByScore(state.score),
        currentScore(state) {
            if (this.level.level === 0) {
                return state.score
            }
            return state.score - levelSores[this.level.level - 1]
        }
    },
    actions: {
        add(score = 1){
            this.score += score
        },
        setScore(score) {
            this.score = score
        }
    }
})
