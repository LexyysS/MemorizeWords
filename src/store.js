import { create } from "zustand"

export const useStore = create((set) => ({
    showFormCard:false,
    words: JSON.parse(localStorage.getItem("words")) || [],
    selectedWord:null,
    warning:{ type:"", boolean: false},
    playMemory:false,
    showcard:false,
    showMoreDetails:"",
    setShowFormCard: () => set((state) => ({
        showFormCard: !state.showFormCard
    })),

    addClickWord: (newWord) => set((state) => ({
        words: [...state.words, newWord]
    })),
    showDetailCard: (word,translate) => set(() => ({
        selectedWord: {word,translate},
        showcard: true
        
    })),

    
    setWarning: (type, boolean) => set(() => ({
        warning: {type,boolean}
    })),
    

    closeCard: () => set(() => ({
        showcard: false,
        mounted: false,
        
    })),

    closeMoreDetails: () => set(() => ({
        showMoreDetails: ""
    })),

    deleteWord: () => set((state) => {
        const newWords = state.words.filter((item)=> item.word !== state.selectedWord.word)
        return {
            words: newWords,
            showcard: !state.showcard,
            mounted: !state.mounted
        }
        
    }),
    setShowMoreDetails: () => set((state) => ({
        showMoreDetails: state.selectedWord.word
    })),

    setPlayMemory: () => set((state) => ({
        playMemory: !state.playMemory
    }))

    
    
    


}))

