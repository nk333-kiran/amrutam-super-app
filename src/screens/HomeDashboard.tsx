import React from "react";
import { ScrollView } from "react-native";

import GradientBackground from "../shared/components/GradientBackground";
import AnimatedScreen from "../shared/components/AnimatedScreen";
import Header from "../shared/components/Header";
import HeroCard from "../shared/components/HeroCard";
import QuickActions from "../shared/components/QuickActions";
import UpcomingCard from "../shared/components/UpcomingCard";
import FloatingBottomNav from "../shared/components/FloatingBottomNav";

export default function HomeDashboard() {
  return (
    <AnimatedScreen>
      <GradientBackground>
        <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 120
        }}
      >
        <Header />
        <HeroCard />
        <QuickActions />
        <UpcomingCard />
      </ScrollView>

        <FloatingBottomNav />
      </GradientBackground>
    </AnimatedScreen>
  );
}
