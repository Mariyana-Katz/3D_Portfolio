import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="class-load"></span>
      {/* shows loading progress in percentage */}
      <p
        style={{ fontSize: 14, color: "white", fontWeight: 800, marginTop: 40 }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
