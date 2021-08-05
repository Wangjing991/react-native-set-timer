import TimerAndroid  from "./index.android";
import TimerIos  from "./index.ios";

let TimerBg
if (Platform.OS === 'ios') {
	TimerBg =  TimerIos
} else {
	TimerBg = TimerAndroid
}
export default TimerBg


