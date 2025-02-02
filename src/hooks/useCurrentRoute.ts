import { useNavigationState } from "@react-navigation/native";

export const useCurrentRoute = () => {
  return (
    useNavigationState((state) => {
      if (!state) {
        return "";
      }

      const currentTab = state.routes[state.index];
      if (!currentTab) {
        return "";
      }

      // Get nested stack route if exists
      if (currentTab.state?.routes) {
        const stackIndex = currentTab.state.index || 0;
        const stackRoute = currentTab.state.routes[stackIndex]?.name;
        return stackRoute || currentTab.name;
      }

      // Fallback to tab route
      return currentTab.name || "";
    }) || ""
  );
};
