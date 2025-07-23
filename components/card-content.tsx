"use client";
import { useCardContext } from "@/contexts/CardContext";
import Activity from "./activity";

export default function CardContent() {
  const { selectedCard } = useCardContext();

  if (!selectedCard) {
    return <Activity />;
  }

  return <div className="card-content min-h-60">{selectedCard}</div>;
}
