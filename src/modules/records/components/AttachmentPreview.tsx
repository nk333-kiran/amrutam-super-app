import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AttachmentModal from "./AttachmentModal";

type Props = {
  type: "IMAGE" | "PDF";
};

function AttachmentPreview({ type }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginTop: 10, padding: 14, backgroundColor: "rgba(255,255,255,0.35)", borderRadius: 12 }}>
        <Text>{type === "PDF" ? "📄 PDF Attachment" : "🖼 Image Attachment"}</Text>
      </TouchableOpacity>
      <AttachmentModal visible={modalVisible} type={type} onClose={() => setModalVisible(false)} />
    </>
  );
}

export default React.memo(AttachmentPreview);
