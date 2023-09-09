import { useEffect, useState } from "react";
import { useLanguage } from "../context/languageContext";
type RawDataType = {
  English:{},
  Español:{} 
}
const useJsonData = (rawData:RawDataType) => {
  const language = useLanguage();
  const [data, setData] = useState(rawData[language]);
  useEffect(() => {
    setData(rawData[language]);
  }, [language,rawData]);
  return data;
};

export default useJsonData;
