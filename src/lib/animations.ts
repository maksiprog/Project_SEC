export const floatingInput = {
  border: {
    initial: { borderColor: "grey" },
    animate: { borderColor: "grey" },
    error: { borderColor: "red" },
  },
  text: {
    initial: { fontSize: 17, top: 16, color: "#86868b" },
    animate: { fontSize: 13, top: 5, color: "black" },
    error: { fontSize: 13, top: 5, color: "red" },
  },
  label: {
    initial: {
      color: "#86868b",
      opacity: 0,
    },
    animate: {
      color: "black",
      opacity: 1,
    },
    error: { opacity: 1, color: "red" },
  },
};
