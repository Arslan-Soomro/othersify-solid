import { createSignal, onCleanup } from "solid-js";
import Spinner from "./ui/Spinner";
import { getRandomLoadingMessage } from "../utils/loadingMessage";

function LoadingScreen(props) {
  // const merged = mergeProps({ text: "Loading..." }, props);
  const [text, setText] = createSignal(props.text || getRandomLoadingMessage());
  const waitTime = 2500;
  
  // Generate random loading messages only if a message is not provided
  const timer = props.text
    ? null
    : setInterval(() => setText(getRandomLoadingMessage()), waitTime);
  onCleanup(() => {
    if (!props.text) clearInterval(timer);
  });

  return (
    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
      <Spinner />
      <p class="text-center">{text()}</p>
    </div>
  );
}

export default LoadingScreen;
