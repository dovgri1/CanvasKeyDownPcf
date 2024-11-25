# CanvasKeyDownPcf

CanvasKeyDownPcf is a Power Apps Component Framework (PCF) control designed to capture and handle keyboard events within Canvas apps. This control enables developers to implement custom keyboard interactions, enhancing the user experience in Power Apps applications.

## Features

- **Keyboard Event Handling**: Detects and responds to key presses, allowing for customized behavior based on user input.
- **Seamless Integration**: Easily integrates into existing Canvas apps, providing additional functionality without extensive modifications.
- **Customizable**: Offers flexibility to define specific actions for different key events, tailored to application requirements.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Power Apps CLI](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/powerapps-cli)
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dovgri1/CanvasKeyDownPcf.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd CanvasKeyDownPcf/CanvasKeyDownPcf/CanvasKeyDownPcf
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## Building the Control

To build the PCF control, run:

```bash
npm run build
```

This command compiles the TypeScript code and prepares the control for deployment.

## Deployment

1. **Authenticate with Power Platform Environment**:

   ```bash
   pac auth create --url https://your-environment-url
   ```

   Replace `https://your-environment-url` with the URL of your Power Platform environment.

2. **Push the Control to Your Environment**:

   ```bash
   pac pcf push --publisher-prefix yourprefix
   ```

   Replace `yourprefix` with your publisher prefix.

## Usage

After deployment, you can add the CanvasKeyDownPcf control to your Canvas app:

1. Open your Canvas app in Power Apps Studio.
2. Navigate to the **Insert** tab, select **Get more components**, and import the CanvasKeyDownPcf control.
3. Add the control to your app and configure its properties as needed.

## Contributing

Contributions are welcome! If you encounter issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the Power Apps community for their continuous support and contributions.

For more information on building PCF controls, refer to the [Power Apps component framework documentation](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/overview).
