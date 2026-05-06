import React from "react";

const innerLogos = [
  { img: "/mcd2.png", angle: 170 },
  { img: "/starbucks.png", angle: 50 },
  { img: "/dominos.png", angle: 300 },
];

const outerLogos = [
  { img: "/burger.png", angle: 0 },
  { img: "/chipotle.png", angle: 200 },
  { img: "/kfc.png", angle: 102 },
];
const outerMostLogos = [
  { img: "/kfc.png", angle: 380 },
  { img: "/dog.png", angle: 450 },
  { img: "/dominos.png", angle: 250 },
  { img: "/pizza-hut.png", angle: 150 },
  { img: "/Swiggy.png", angle: 200 },
  { img: "/Subway.png", angle: 300 },
];

function OrbitTrack({ logos, radius, duration, reverse }) {
  const size = 40;
  const trackAnim = reverse ? "spinRev" : "spinFwd";
  const counterAnim = reverse ? "spinFwd" : "spinRev";

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: radius * 2,
        height: radius * 2,
        marginTop: -radius,
        marginLeft: -radius,
        borderRadius: "50%",
        animation: `${trackAnim} ${duration}s linear infinite`,
      }}
    >
      {logos.map((logo, i) => {
        const rad = (logo.angle * Math.PI) / 180;

        const r = radius - size / 2; // ✅ FIX

        const cx = r + r * Math.cos(rad);
        const cy = r + r * Math.sin(rad);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx,
              top: cy,
              transform: "translate(-50%, -50%)",
              width: size,
              height: size,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: `${counterAnim} ${duration}s linear infinite`,
            }}
          >
            <img
              src={logo.img}
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
          </div>
        );
      })}
    </div>
  );
}

function OrbitDots({ radius, duration, reverse }) {
  const angles = [0, 72, 144, 216, 288];

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: radius * 2,
        height: radius * 2,
        marginTop: -radius,
        marginLeft: -radius,
        animation: `${reverse ? "spinRev" : "spinFwd"} ${duration}s linear infinite`,
      }}
    >
      {angles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;

        const r = radius - 17;
        const x = radius + r * Math.cos(rad);
        const y = radius + r * Math.sin(rad);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "white",
              border: "2px solid gray",
            }}
          />
        );
      })}
    </div>
  );
}

export default function LeftPanel() {
  const size = 34;

  return (
    <div className="flex-1 bg-white rounded-3xl p-5 shadow-sm hidden lg:flex flex-col justify-between">
      <style>{`
        @keyframes spinFwd { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>

      <div>
        <p className="text-green-500 text-sm font-semibold mb-2">
          #FranchiseEats
        </p>

        <h2 className="text-base mb-5 font-bold">
          Scaling Restaurants,{" "}
          <span className="text-gray-400">Simplifying Operations.</span>
        </h2>

        <div
          style={{
            position: "relative",
            width: 260,
            height: 260,
            margin: "0 auto",
          }}
        >
          {/* ✅ FIXED CIRCLES (aligned with logos) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: (75 - size / 2) * 2,
              height: (75 - size / 2) * 2,
              marginTop: -(75 - size / 2),
              marginLeft: -(75 - size / 2),
              borderRadius: "50%",
              border: "1px solid gray",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: (110 - size / 2) * 2,
              height: (110 - size / 2) * 2,
              marginTop: -(110 - size / 2),
              marginLeft: -(110 - size / 2),
              borderRadius: "50%",
              border: "1px solid gray",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: (145 - size / 2) * 2, // 👈 new bigger radius
              height: (145 - size / 2) * 2,
              marginTop: -(145 - size / 2),
              marginLeft: -(145 - size / 2),
              borderRadius: "50%",
              border: "1px solid gray",
            }}
          />

          {/* DOTS */}
          <OrbitDots radius={75} duration={4} />
          <OrbitDots radius={110} duration={6} reverse />
          <OrbitDots radius={145} duration={8} />
          {/* LOGOS */}
          <OrbitTrack logos={innerLogos} radius={75} duration={20} />
          <OrbitTrack logos={outerLogos} radius={110} duration={20} reverse />
          <OrbitTrack logos={outerMostLogos} radius={145} duration={25} />

          {/* CENTER */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 54,
              height: 54,
              borderRadius: "50%",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 900 }}>F</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-black">Manage</span> your
          <br />
          <span className=" font-bold text-black">Franchise Business</span> with
          us.
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Born in{" "}
          <img
            src="flag.png"
            alt="India"
            style={{
              display: "inline-block",
              width: 24,
              height: 16,
              borderRadius: 2,
              verticalAlign: "middle",
              margin: "0 2px",
              transform: "rotate(-20deg)",
            }}
          />{" "}
          · Shaped By Global Inspiration.
        </p>
      </div>
    </div>
  );
}
