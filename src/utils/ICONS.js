const ICONS = import.meta.glob("../assets/icons/*.svg", {
  as: "raw",
  eager: true,
});

console.log(ICONS);

export default ICONS