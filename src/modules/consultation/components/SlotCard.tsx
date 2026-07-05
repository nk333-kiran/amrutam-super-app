import React from "react";
import PremiumSlotCard from "./PremiumSlotCard";

type Props = {
  time: string;
  selected?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

export default function SlotCard({ time, selected, disabled, onPress }: Props) {
  return <PremiumSlotCard time={time} selected={selected} disabled={disabled} onPress={onPress} />;
}
