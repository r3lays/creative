'use client';
import * as React from 'react';

export type Cards = 'work' | 'thoughts' | 'about';

type CardContext = {
  selectedCard: Cards | null;
  setSelectedCard: (card: Cards | null) => void;
};

const CardContext = React.createContext<CardContext | null>(null);


export function useCardContext() {
  const context = React.useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardContextProvider');
  }
  return context;
}

export default function CardContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedCard, setSelectedCard] = React.useState<Cards | null>(null);


  const handleSetSelectedCard = React.useCallback((card: Cards | null) => {
    setSelectedCard(card === selectedCard ? null : card);
  }, [selectedCard]);

  const value = React.useMemo(() => ({ selectedCard, setSelectedCard: handleSetSelectedCard }), [selectedCard, handleSetSelectedCard]);

  return (
    <CardContext.Provider value={value}>
      {children}
    </CardContext.Provider>
  );
}
