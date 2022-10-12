![GitHub-Mark-Light](https://raw.githubusercontent.com/dev-xo/dev-xo/main/playwright-stack/assets/light-logo.png#gh-light-mode-only)
![GitHub-Mark-Dark ](https://raw.githubusercontent.com/dev-xo/dev-xo/main/playwright-stack/assets/dark-logo.png#gh-dark-mode-only)

<p align="center">
  A testing-ready template, that that integrates E2E and Unit testing with Playwright, Vitest and Testing Library.
</p>

## Features

- End-to-End testing with [Playwright.](https://playwright.dev)
- Unit Testing with [Vitest](https://vitest.dev) and [Testing Library.](https://testing-library.com)
- Local third party request mocking with [MSW.](https://mswjs.io)
- [GitHub Actions](https://github.com/features/actions) for Deploy on merge to Production and Staging environments.
- Styling with [Tailwind.css](https://tailwindcss.com/) + [Tailwind Prettier-Plugin.](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- Linting with [ESLint.](https://eslint.org/)
- Code formatting with [Prettier.](https://prettier.io/)
- Static Types with [TypeScript.](https://www.typescriptlang.org/)
- Support for Javascript developers with continuous updates over time based on `remix.init`.

Learn more about [Remix Stacks](https://remix.run/stacks).

## Quickstart

To get started, run the following commands in your console:

```sh
# Initializes template in your workspace:
npx create-remix@latest --template remix-stacks/playwright

# Starts dev server:
npm run dev
```

> Notes: Cloning the repository instead of initializing it with the above commands, will result in a inappropriate experience. This template uses `remix.init` to configure itself and prepare your environment.

## GitHub Actions

We use GitHub Actions for continuous integration and deployment.<br/><br/>
Anything that gets into the `main` branch will be deployed to production after running tests, build, etc.<br/>
Anything in the `dev` branch will be deployed to staging.

## Testing

### Playwright

We use Playwright for End-to-End tests. You'll find those in the `tests/e2e` directory. As you make changes, add to an existing file or create a new file in the `tests/e2e` directory to test your changes.

To run these tests in development, run `npm run test:e2e:dev`.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.

This template has pre-configured prettier settings on `.package-json`. Feel free to update each value with your preferred work style.

## Support

If you found the template useful, support it with a [Star ⭐](https://github.com/dev-xo/stripe-stack)<br />
It helps the repository grow and gives me motivation to keep working on it. Thanks you!
