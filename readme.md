
# react-native-set-timer
This library provides `setTimeout` and `setInterval` implementations that keep working even if the app is running in the background or the screen is locked.

## Features
- Clear and simple API

## Install
	yarn add react-native-set-timer

## Usage
```typescript
import Timer from "react-native-set-timer";

// Start a timer 
const intervalId = Timer.setInterval(() => console.log(""), 500);

// Cancel the timer 
Timer.clearInterval(intervalId);

// Start a timer t
const timeoutId = Timer.setTimeout(() => console.log("tic"), 500);

// Cancel the timer 
Timer.clearTimeout(timeoutId);
```


