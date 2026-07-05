import React from "react";
import { Modal, View, Text } from "react-native";
import PrimaryButton from "../../../shared/components/PrimaryButton";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function BookingSuccessModal({ visible, onClose }: Props) {
  React.useEffect(() => {
    if (!visible && typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      try {
        document.activeElement.blur();
      } catch (e) {
        // ignore
      }
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 24,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 30,
            borderRadius: 28,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 16 }}>
            Booking Confirmed 🎉
          </Text>
          <Text style={{ fontSize: 15, color: "#6B7280", marginBottom: 20 }}>
            Your consultation slot has been reserved successfully.
          </Text>
          <PrimaryButton title="Done" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
