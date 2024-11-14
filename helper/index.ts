import { axiosPrayTime } from "@/libs/axios";
import { format } from "date-fns";

export const getTime = async () => {
    const latitude = 3.589718;
    const longitude = 98.645;
    const today = format(new Date(), "dd-MM-yyyy");
  
    const box = [];
  
    const {
      data: { data },
    } = await axiosPrayTime(
      `/timings/${today}?latitude=${latitude}&longitude=${longitude}`
    );
  
    for (const d in data.timings) {
      box.push({
        name: d,
        time: data.timings[d],
      });
    }
  
    return box;
  };
  