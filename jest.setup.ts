import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock";
// Common test setup and mocks

// Mock the translation hook with real translations
/*jest.mock("@/hooks/use-typed-translation", () => ({
    useCommonTranslation: () => ({
        t: (key: string) => {
            // Import translations inside the mock to avoid Jest scope issues
            const enTranslations = require("./locales/en/common.json");
            return enTranslations[key] || key;
        },
    }),
}));
*/
jest.mock("@react-native-async-storage/async-storage", () =>
    require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);
/*jest.mock('@react-native-community/netinfo', () => ({
  ...jest.requireActual('@react-native-community/netinfo'),
  useNetInfo: jest.fn(),
  fetch: jest.fn(),
  addEventListener: jest.fn(),
}));
*/