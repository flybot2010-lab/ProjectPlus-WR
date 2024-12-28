// public/config.js

import { Core, MiniCore } from './packages.js';

// Locale configuration (neighborhood, oceaneast, urban, southwest)
const locale = "neighborhood";

const affiliateName = "Xfinity";

const apiKey = '';

// Define the enabled packages
const enabledPackages = [Core(locale)];

export { locale, affiliateName, enabledPackages, apiKey };
