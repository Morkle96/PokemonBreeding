import { Pokemon } from "@/constants/Data/pokemon";
import { Inventory, loadSaveData, saveSaveData } from "@/constants/Data/SaveLoadData";
import React, { createContext, useContext, useEffect, useState } from "react";

interface PokemonContextType {
    pokemonList: Pokemon[];
    inventory: Inventory;
    addPokemon: (pokemon: Pokemon) => void;
    deletePokemon: (uid: string) => void;
    setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
    setInventory: React.Dispatch<React.SetStateAction<Inventory>>;
    addItem: (item: keyof Inventory["items"], amount?: number) => void;
    removeItem: (item: keyof Inventory["items"], amount?: number) => void;
    addMoney: (amount: number) => void;
    spendMoney: (amount: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [inventory, setInventory] = useState<Inventory>({ money: 0, items: {} });

    // Startup load
    useEffect(() => {
        async function loadData() {
            const data = await loadSaveData();
            setPokemonList(data.pokemon);
            setInventory(data.inventory);
        }
        loadData();
    }, []);

    // Auto-save on change (with debounce)
    useEffect(() => {
        const timeout = setTimeout(() => {
            saveSaveData(pokemonList, inventory);
        }, 300);

        return () => clearTimeout(timeout);
    }, [pokemonList, inventory]);

    // --- Pokémon management ---
    const addPokemon = (pokemon: Pokemon) => {
        setPokemonList((prev) => [...prev, pokemon]);
    };

    const deletePokemon = (uid: string) => {
        setPokemonList((prev) => prev.filter((p) => p.uid !== uid));
    };

    // --- Inventory management ---
    const addItem = (item: keyof Inventory["items"], amount: number = 1) => {
        setInventory((prev) => ({
            ...prev,
            items: {
                ...prev.items,
                [item]: (prev.items[item] ?? 0) + amount,
            },
        }));
    };

    const removeItem = (item: keyof Inventory["items"], amount: number = 1) => {
        setInventory((prev) => {
            const current = prev.items[item] ?? 0;
            const newAmount = Math.max(0, current - amount);
            return {
                ...prev,
                items: {
                    ...prev.items,
                    [item]: newAmount,
                },
            };
        });
    };

    const addMoney = (amount: number) => {
        setInventory((prev) => ({ ...prev, money: prev.money + amount }));
    };

    const spendMoney = (amount: number) => {
        setInventory((prev) => ({
            ...prev,
            money: Math.max(0, prev.money - amount),
        }));
    };

    return (
        <PokemonContext.Provider
            value={{
                pokemonList,
                inventory,
                addPokemon,
                deletePokemon,
                setPokemonList,
                setInventory,
                addItem,
                removeItem,
                addMoney,
                spendMoney,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

// Hook to use context
export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemon must be used inside PokemonProvider");
    }
    return context;
};
