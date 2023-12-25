# ProgressForm Class

The `ProgressForm` class manages the progress through form fieldsets, allowing navigation between fieldsets and updating progress indicators.

## Table of Contents

- [Introduction](#introduction)
- [Methods](#methods)
- [Properties](#properties)
- [Usage](#usage)
- [Example](#example)

## Introduction

The `ProgressForm` class handles the navigation between form fieldsets by providing methods to move to the next or previous fieldset, managing progress tracking, and applying default or custom CSS styles.

## Methods

### `run(params: ProgressFormType, styleOptions?: StyleOptions): void`

Runs the progress form with provided parameters and optional custom style options.

### `get progress(): number`

Calculates and returns the progress percentage based on the number of fieldsets.

## Properties

### `enableDefaultCssStyle: boolean`

Specifies whether to enable default CSS styles for the progress form.

## Usage

Instantiate a `ProgressForm` object and call the `run` method with necessary parameters to enable progress form functionality.

## Example

```typescript
import anime from "animejs";
import { ProgressForm, StyleOptions } from "@monorepo/progress-form";

// Instantiate ProgressForm
const progressForm = new ProgressForm();

// Define parameters
const params = {
    // Define your parameters here...
};

// Define style options
const styleOptions: StyleOptions = {
    // Define your style options here...
};

// Run the progress form
progressForm.run(params, styleOptions);
