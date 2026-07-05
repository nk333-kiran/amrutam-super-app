import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlassCard from "./GlassCard";

const actions = [
  { label: "Doctors", route: "DoctorList", icon: "🩺" },
  { label: "Bookings", route: "UpcomingConsultations", icon: "📅" },
  { label: "Shop", route: "ProductList", icon: "🛒" },
];

export default function QuickActions() {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      {actions.map((action) => (
        <TouchableOpacity
          key={action.label}
          onPress={() => navigation.navigate(action.route)}
          style={{ width: "30%" }}
        >
          <GlassCard
            style={{
              width: "100%",
              alignItems: "center",
              paddingVertical: 16,
            }}
          >
            <Text style={{ fontSize: 20 }}>{action.icon}</Text>
            <Text style={{ marginTop: 6, fontWeight: "600" }}>{action.label}</Text>
          </GlassCard>
        </TouchableOpacity>
      ))}
    </View>
  );
}
