/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Layout from "./components/Layout";
import Onboarding from "./components/screens/Onboarding";
import ScanMode from "./components/screens/ScanMode";
import AnalyzingProgress from "./components/screens/AnalyzingProgress";
import Dashboard from "./components/screens/Dashboard";
import ProductDetail from "./components/screens/ProductDetail";
import SizeComparison from "./components/screens/SizeComparison";
import UserProfile from "./components/screens/UserProfile";

enum AppState {
  ONBOARDING,
  SCAN_START,
  SCAN_ANALYZING,
  SCAN_COMPLETE,
}

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.ONBOARDING);
  const [activeTab, setActiveTab] = useState("scan");

  if (appState === AppState.ONBOARDING) {
    return <Onboarding onNext={() => setAppState(AppState.SCAN_START)} />;
  }

  const renderContent = () => {
    // If we are in the middle of a scan, override tab content
    if (activeTab === "scan") {
      switch (appState) {
        case AppState.SCAN_START:
          return <ScanMode onCapture={() => setAppState(AppState.SCAN_ANALYZING)} />;
        case AppState.SCAN_ANALYZING:
          return <AnalyzingProgress onComplete={() => setAppState(AppState.SCAN_COMPLETE)} />;
        case AppState.SCAN_COMPLETE:
          return <Dashboard onRetake={() => setAppState(AppState.SCAN_START)} />;
        default:
          return <Dashboard onRetake={() => setAppState(AppState.SCAN_START)} />;
      }
    }

    switch (activeTab) {
      case "discover":
        return <ProductDetail />;
      case "wardrobe":
        return <SizeComparison />;
      case "profile":
        return <UserProfile />;
      default:
        return <Dashboard onRetake={() => setAppState(AppState.SCAN_START)} />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      showNav={appState === AppState.SCAN_COMPLETE || activeTab !== "scan"}
    >
      {renderContent()}
    </Layout>
  );
}
