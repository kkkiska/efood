export default [
  {
    // Основные настройки
    languageOptions: {
      ecmaVersion: 'latest', // Использовать последнюю версию ECMAScript
      sourceType: 'module', // Модульная структура
      ecmaFeatures: {
        jsx: true, // Включить поддержку JSX
      },
    },
    env: {
      browser: true, // Поддержка браузерного окружения
      es2021: true, // Поддержка ES2021+
      node: true, // Поддержка Node.js
    },
    plugins: ['react', 'prettier'], // Используемые плагины
    settings: {
      react: {
        version: 'detect', // Автоматически определять версию React
      },
    },
    rules: {
      // Отключаем ненужные правила
      'react/react-in-jsx-scope': 'off', // Не нужно в React 17+
      'no-unused-vars': 'warn', // Предупреждение при наличии неиспользуемых переменных
      'no-console': 'warn', // Предупреждение при использовании console.log

      // Правила для Prettier
      'prettier/prettier': 'error', // Применять правила Prettier как ошибки
      'react/jsx-quotes': ['error', 'single'], // Использовать одинарные кавычки в JSX
      'jsx-quotes': ['error', 'prefer-single'], // Использовать одинарные кавычки в JS
    },
  },
  {
    // Настройки для конфигурационных файлов
    files: ['.eslintrc.*'], // Применяется к файлам .eslintrc.*
    languageOptions: {
      sourceType: 'script', // Использовать script для конфигурационных файлов
    },
  },
];
