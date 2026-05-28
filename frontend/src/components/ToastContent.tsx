import { Box } from '@chakra-ui/react';

const ToastContent = ({ count }: { count: number }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      style={{
        padding: '12px 20px 12px 16px',
        gap: '8px',
        background: 'radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F',
        boxShadow: '0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)',
        borderRadius: '8px',
        border: '1px solid rgba(116, 200, 152, 0.4)',
      }}
    >
      {/* Green circle checkmark */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <circle cx="12" cy="12" r="11" stroke="#74C898" strokeWidth="1.5" />
        <path
          d="M7 12.5l3.5 3.5 6.5-7"
          stroke="#74C898"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <Box display="flex" flexDirection="column" style={{ gap: '2px' }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '16px',
          color: '#FFFFFF',
        }}>
          Incremented
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '16px',
          color: 'rgba(255,255,255,0.75)',
        }}>
          Counter is now {count}
        </span>
      </Box>
    </Box>
  );
}

export default ToastContent;