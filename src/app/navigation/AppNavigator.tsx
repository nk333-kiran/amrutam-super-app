import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeDashboard from "../../screens/HomeDashboard";
import DoctorListScreen from "../../modules/consultation/screens/DoctorListScreen";
import DoctorDetailScreen from "../../modules/consultation/screens/DoctorDetailScreen";
import UpcomingConsultationScreen from "../../modules/consultation/screens/UpcomingConsultationScreen";
import ProductListScreen from "../../modules/shop/screens/ProductListScreen";
import ProductDetailScreen from "../../modules/shop/screens/ProductDetailScreen";
import CartScreen from "../../modules/shop/screens/CartScreen";
import RecordsTimelineScreen from "../../modules/records/screens/RecordsTimelineScreen";
import RecordDetailScreen from "../../modules/records/screens/RecordDetailScreen";

export type RootStackParamList = {
  HomeDashboard: undefined;
  DoctorList: undefined;
  DoctorDetail: { doctorId: string };
  UpcomingConsultations: undefined;
  ProductList: undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  RecordsTimeline: undefined;
  RecordDetail: { recordId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeDashboard"
          component={HomeDashboard}
          options={{ title: "Amrutam" }}
        />
        <Stack.Screen
          name="DoctorList"
          component={DoctorListScreen}
          options={{ title: "Consult Doctors" }}
        />
        <Stack.Screen
          name="DoctorDetail"
          component={DoctorDetailScreen}
          options={{ title: "Doctor Details" }}
        />
        <Stack.Screen
          name="UpcomingConsultations"
          component={UpcomingConsultationScreen}
          options={{ title: "Upcoming Consultations" }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: "Shop" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: "Product Details" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Cart" }}
        />
        <Stack.Screen
          name="RecordsTimeline"
          component={RecordsTimelineScreen}
          options={{ title: "Health Records" }}
        />
        <Stack.Screen
          name="RecordDetail"
          component={RecordDetailScreen}
          options={{ title: "Record Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
