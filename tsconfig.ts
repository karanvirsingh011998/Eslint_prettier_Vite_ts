{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "allowSyntheticDefaultImports": true,
      /* Bundler mode */
      // "moduleResolution": "bundler",
      "moduleResolution": "node",
      // "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
  
      /* Linting */
      "strict": true,
      "noUnusedLocals": false,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": "./src"
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
  