import React, { useMemo } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import GradientBackground from "../../../shared/components/GradientBackground";
import AnimatedScreen from "../../../shared/components/AnimatedScreen";
import PremiumSearchBar from "../components/PremiumSearchBar";
import PremiumFilterChips from "../components/PremiumFilterChips";
import DoctorCard from "../components/DoctorCard";

import { RootStackParamList } from "../../../app/navigation/AppNavigator";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/reduxHooks";
import { setSearch, setFilter } from "../consultationSlice";
import { filterDoctors } from "../filterDoctors";

type Props = NativeStackScreenProps<RootStackParamList, "DoctorList">;

export default function DoctorListScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();

  const doctors = useAppSelector((state) => state.consultation.doctors);
  const search = useAppSelector((state) => state.consultation.search);
  const filter = useAppSelector((state) => state.consultation.filter);

  const filteredDoctors = useMemo(() => filterDoctors(doctors, search, filter), [doctors, search, filter]);

  return (
    <AnimatedScreen>
      <GradientBackground>
        <View style={{ flex: 1, padding: 16 }}>
        <PremiumSearchBar value={search} onChange={(text) => dispatch(setSearch(text))} />

        <PremiumFilterChips selected={filter ?? undefined} onSelect={(value) => dispatch(setFilter(value))} />

        <FlashList
          data={filteredDoctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DoctorCard
              doctor={item}
              onPress={() => navigation.navigate("DoctorDetail", { doctorId: item.id })}
            />
          )}
        />
        </View>
      </GradientBackground>
    </AnimatedScreen>
  );
}
