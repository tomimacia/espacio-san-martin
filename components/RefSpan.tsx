import { RefSpanType } from "@/types/types";

const RefSpan = ({ id, height }: RefSpanType) => (
  <span
    id={id}
    style={{
      display: "block",
      height: height,
      marginTop: 0,
      visibility: "hidden",
    }}
  />
);
export default RefSpan;
