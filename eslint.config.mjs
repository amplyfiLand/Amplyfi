import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: ["eslint.config.mjs", "next-env.d.ts", ".next/**", "node_modules/**"]
  },
  ...nextVitals.map((config) => ({
    ...config,
    rules: {
      ...config.rules,
      "react/display-name": "off",
      "react/no-direct-mutation-state": "off"
    }
  }))
];

export default eslintConfig;
