import Spline from "@splinetool/react-spline";

export function Keyboard3D() {
  return (
    <div className="lg:-z-1 relative bottom-0 left-0 right-0 top-0 lg:absolute lg:left-1/2">
      <div className="h-[300px] w-full overflow-hidden lg:h-full">
        <Spline
          scene="https://prod.spline.design/jozoXynJhBlLEIaV/scene.splinecode"
          className="block h-full w-full"
        />
      </div>
    </div>
  );
}
