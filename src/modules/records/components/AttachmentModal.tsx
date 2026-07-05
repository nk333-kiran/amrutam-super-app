import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

type Props = {
  visible: boolean;
  type: "IMAGE" | "PDF";
  onClose: () => void;
};

export default function AttachmentModal({ visible, type, onClose }: Props) {
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(17,17,17,0.88)" }}>
        <View style={{ padding: 24, borderRadius: 24, backgroundColor: "rgba(255,255,255,0.12)", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 48 }}>{type === "PDF" ? "📄" : "🖼️"}</Text>
          <Text style={{ color: "white", marginTop: 16, fontSize: 18, fontWeight: "700" }}>Full Preview</Text>
          <Text style={{ color: "#D1D5DB", marginTop: 8 }}>Tap outside to close</Text>
          <TouchableOpacity onPress={onClose} style={{ marginTop: 18, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 999, backgroundColor: "white" }}>
            <Text style={{ color: "#111827", fontWeight: "700" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
