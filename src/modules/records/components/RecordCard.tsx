import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import GlassCard from "../../../shared/components/GlassCard";
import { HealthRecord } from "../types";
import AttachmentPreview from "./AttachmentPreview";

type Props = {
  record: HealthRecord;
  onPress: () => void;
};

function RecordCard({ record, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} accessible accessibilityRole="button" accessibilityLabel={`Open record ${record.title}`}>
      <GlassCard style={{ marginBottom: 16 }}>
        <Text style={{ fontWeight: "700", fontSize: 17, marginBottom: 4 }}>{record.title}</Text>
        <Text>{record.type}</Text>
        <Text style={{ marginTop: 6, color: "#4B5563" }}>{record.description}</Text>
        <Text style={{ marginTop: 8 }}>Tags: {record.tags.join(", ")}</Text>

        {(record.attachments ?? []).map((file) => (
          <AttachmentPreview key={file.id} type={file.type} />
        ))}
      </GlassCard>
    </TouchableOpacity>
  );
}

export default React.memo(RecordCard);
