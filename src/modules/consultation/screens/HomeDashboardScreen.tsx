import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../../../shared/components/GradientBackground";
import GlassCard from "../../../shared/components/GlassCard";
import FloatingTab from "../../../shared/components/FloatingTab";
import { COLORS, RADIUS, SHADOW } from "../../../shared/design/tokens";

export default function HomeDashboardScreen() {
  const navigation = useNavigation<any>();

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <GlassCard style={styles.heroCard}>
          <Text style={styles.eyebrow}>Good morning</Text>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Your wellness journey starts here.</Text>

          <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate("DoctorList")}>
            <Text style={styles.ctaText}>Book a consultation</Text>
          </TouchableOpacity>
        </GlassCard>

        <View style={styles.row}>
          <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate("DoctorList")}>
            <GlassCard style={styles.quickCard}>
              <Text style={styles.quickTitle}>Doctors</Text>
              <Text style={styles.quickText}>Find experts</Text>
            </GlassCard>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate("ProductList")}>
            <GlassCard style={styles.quickCard}>
              <Text style={styles.quickTitle}>Shop</Text>
              <Text style={styles.quickText}>Ayurvedic care</Text>
            </GlassCard>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate("RecordsTimeline")}>
            <GlassCard style={styles.quickCard}>
              <Text style={styles.quickTitle}>Records</Text>
              <Text style={styles.quickText}>Timeline view</Text>
            </GlassCard>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate("Cart")}>
            <GlassCard style={styles.quickCard}>
              <Text style={styles.quickTitle}>Cart</Text>
              <Text style={styles.quickText}>Your picks</Text>
            </GlassCard>
          </TouchableOpacity>
        </View>

        <GlassCard style={styles.upcomingCard}>
          <Text style={styles.sectionTitle}>Upcoming consultation</Text>
          <Text style={styles.cardText}>No appointments yet. Tap to book your next consultation.</Text>
        </GlassCard>
      </ScrollView>

      <FloatingTab />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 120,
  },
  heroCard: {
    marginBottom: 18,
    borderRadius: RADIUS.lg,
    ...SHADOW.neumorph,
  },
  eyebrow: {
    color: COLORS.muted,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
  },
  subtitle: {
    marginTop: 8,
    color: COLORS.muted,
  },
  cta: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
    alignSelf: "flex-start",
  },
  ctaText: {
    color: COLORS.white,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  quickAction: {
    flex: 1,
  },
  quickCard: {
    borderRadius: RADIUS.md,
    minHeight: 100,
    justifyContent: "center",
  },
  quickTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  quickText: {
    marginTop: 4,
    color: COLORS.muted,
  },
  upcomingCard: {
    borderRadius: RADIUS.md,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  cardText: {
    marginTop: 8,
    color: COLORS.muted,
  },
});
