import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";

const useWarmUpBrowser = () => {
  return (
useEffect(() => {
    void WebBrowser.warmUpAsync()
    return  () => {
        void WebBrowser.coolDownAsync()
    }
})
    
  );
};

export default useWarmUpBrowser;


