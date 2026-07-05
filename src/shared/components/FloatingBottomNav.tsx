import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const items = [
  { label: "Home", icon: "🏠", route: "HomeDashboard" },
  { label: "Doctors", icon: "🩺", route: "DoctorList" },
  { label: "Shop", icon: "🛒", route: "ProductList" },
  { label: "Records", icon: "📁", route: "RecordsTimeline" },
];

export default function FloatingBottomNav() {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 20,
        height: 75,
        borderRadius: 40,
        backgroundColor: "rgba(255,255,255,0.25)",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <TouchableOpacity key={item.label} onPress={() => navigation.navigate(item.route)}>
          <Text style={{ fontSize: 20 }}>{item.icon}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
