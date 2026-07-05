import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import GlassCard from "../../../shared/components/GlassCard";
import { RootStackParamList } from "../../../app/navigation/AppNavigator";
import { useAppSelector } from "../../../core/hooks/reduxHooks";
import AttachmentPreview from "../components/AttachmentPreview";

type Props = NativeStackScreenProps<RootStackParamList, "RecordDetail">;

export default function RecordDetailScreen({ route }: Props) {
  const { recordId } = route.params;

  const record = useAppSelector((state) => state.records.records.find((r) => r.id === recordId));

  if (!record) {
    return <Text>Record not found</Text>;
  }

  return (
    <AnimatedScreen>
      <GradientBackground>
        <ScrollView style={{ padding: 20 }}>
        <GlassCard>
          <Text style={{ fontSize: 26, fontWeight: "700" }}>{record.title}</Text>
          <Text style={{ marginTop: 10 }}>{record.type}</Text>
          <Text style={{ marginTop: 20, color: "#666" }}>{record.description}</Text>
          <Text style={{ marginTop: 18 }}>Tags: {record.tags.join(", ")}</Text>
        </GlassCard>

        {(record.attachments ?? []).map((attachment) => (
          <AttachmentPreview key={attachment.id} type={attachment.type} />
        ))}
        </ScrollView>
      </GradientBackground>
    </AnimatedScreen>
  );
}
