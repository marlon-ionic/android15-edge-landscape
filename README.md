# Android 15 Landscape Overlapping Issue

This repository contains a simple example that demonstrates an issue observed on Android 15 devices in landscape mode. The issue involves content overlapping the camera area when the device is rotated to landscape orientation.

## Problem Description

On Android 15 devices, when the screen is rotated to landscape mode, certain UI elements or content appear to be clipped or cut off. This behavior is inconsistent with expected rendering and may affect the user experience.

## Steps to Reproduce

1. Clone this repository:
  ```bash
  git clone https://github.com/your-username/marlon-ionic.git
  ```
2. Navigate to the project directory:
  ```bash
  cd marlon-ionic/android15-edge
  ```
3. Open the project in your preferred IDE or editor.
4. Build and run the application on an Android 15 device or emulator.
5. Rotate the device to landscape mode.
6. Observe the clipping issue in the UI.

## Expected Behavior

The content should resize or adjust properly to fit the screen in landscape mode without any clipping.

## Actual Behavior

The content appears to be clipped or partially hidden when the device is in landscape orientation.

## Environment

- **Android Version:** 15
- **Device/Emulator:** Any Android 15-compatible device or emulator
- **Framework:** Ionic 8.5.5

## Possible Causes

- Incorrect handling of layout constraints in landscape mode.
- Issues with view resizing or scaling.
- Potential changes in Android 15 rendering behavior.

## Solution/Workaround

Currently, this repository serves as a demonstration of the issue. A potential fix may involve:

- Verifying layout constraints and ensuring they are responsive to orientation changes.
- Testing with different layout configurations (e.g., `ConstraintLayout`, `LinearLayout`).
- Investigating Android 15-specific changes in rendering or layout behavior.

## Contributing

If you have a solution or workaround for this issue, feel free to submit a pull request or open an issue in this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
