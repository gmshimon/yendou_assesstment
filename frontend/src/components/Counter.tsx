import { Box, Text } from "@chakra-ui/react";
import { useCounter } from "../hooks/useCounter";
import { toaster } from "./Toaster";
import ToastContent from "./ToastContent";


const Counter = () => {
  const { count, increment } = useCounter();
  const handleIncrement = () => {
    increment();
    const newCount = count + 1;
    toaster.create({
        title: <ToastContent count={newCount} />,
    //   title: `Count incremented to ${newCount}`,
      duration: 3000,
      type: "info",
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", gap: "48px", padding: "0 24px" }}
    >
      {/* Heading */}
      <Box textAlign="center">
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "12px",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Yendou · SWE Task
        </p>
        <Text
          style={{
            fontSize: "clamp(48px, 10vw, 80px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Counter
        </Text>
      </Box>
      {/* Count display */}
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(116, 200, 152, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <span
          key={count}
          style={{
            fontSize: "clamp(96px, 18vw, 160px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            fontFamily: "'Syne', sans-serif",
            background:
              "linear-gradient(135deg, #FFFFFF 40%, rgba(116, 200, 152, 0.9) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}
        </span>
      </Box>
      {/* +1 button */}
      <button
        onClick={handleIncrement}
        style={{
          padding: "16px 40px",
          borderRadius: "100px",
          background: "linear-gradient(135deg, #74C898 0%, #4aad75 100%)",
          color: "#0D0D0F",
          fontSize: "17px",
          fontWeight: 700,
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.01em",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.18s ease, box-shadow 0.18s ease",
        }}
      >
        +1
      </button>

      <p
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.05em",
          margin: 0,
        }}
      >
        Click to increment · Toast appears bottom-right
      </p>
    </Box>
  );
};

export default Counter;
