import React, { useMemo, useState } from "react";
import { View, Text, RefreshControl } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import GlassCard from "../../../shared/components/GlassCard";
import RecordSearchBar from "../components/RecordSearchBar";
import RecordFilterBar from "../components/RecordFilterBar";
import RecordCard from "../components/RecordCard";
import YearSelector from "../components/YearSelector";

import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import { setSearch, setFilter } from "../recordsSlice";
import { filterRecords } from "../filterRecords";
import { groupRecordsByMonth } from "../groupRecords";
import { flattenTimeline } from "../flattenTimeline";

export default function RecordsTimelineScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const records = useAppSelector((state) => state.records.records);
  const search = useAppSelector((state) => state.records.search);
  const filter = useAppSelector((state) => state.records.filter);
  const [selectedYear, setSelectedYear] = useState("2026");
  const [refreshing, setRefreshing] = useState(false);

  const timelineData = useMemo(() => {
    const filtered = filterRecords(records, search, filter);
    const filteredByYear = filtered.filter((record) => record.date.includes(selectedYear));
    const grouped = groupRecordsByMonth(filteredByYear);
    return flattenTimeline(grouped);
  }, [records, search, filter, selectedYear]);

  return (
    <AnimatedScreen>
      <GradientBackground>
        <View style={{ flex: 1, padding: 16 }}>
        <RecordSearchBar value={search} onChange={(value) => dispatch(setSearch(value))} />
        <RecordFilterBar selected={filter} onSelect={(value) => dispatch(setFilter(value))} />
        <YearSelector selected={selectedYear} onSelect={setSelectedYear} />

        <FlashList
          data={timelineData}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(false)} />}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => {
            if (item.type === "HEADER") {
              return (
                <GlassCard style={{ marginVertical: 16, paddingVertical: 14 }}>
                  <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>{item.title}</Text>
                </GlassCard>
              );
            }

            return (
              <View style={{ flexDirection: "row" }}>
                <View style={{ alignItems: "center", width: 35 }}>
                  <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#2FD6A3", marginTop: 20 }} />
                  <View style={{ flex: 1, width: 2, backgroundColor: "rgba(47,214,163,0.25)", marginTop: 6 }} />
                </View>

                <View style={{ flex: 1 }}>
                  <RecordCard
                    record={item.record}
                    onPress={() => navigation.navigate("RecordDetail", { recordId: item.record.id })}
                  />
                </View>
              </View>
            );
          }}
        />
        </View>
      </GradientBackground>
    </AnimatedScreen>
  );
}
