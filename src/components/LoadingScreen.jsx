import { mergeProps } from "solid-js";
import Spinner from "./ui/Spinner";

function LoadingScreen(props) {
  
  // Create a interval that loads random message every 200ms and then a function that cancels it if props.text is not defined
  
    
  return (
    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
      <Spinner />
      <p class="text-center">{merged.text}</p>
    </div>
  );
}

export default LoadingScreen;
