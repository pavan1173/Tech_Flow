import React from 'react';

interface CompanyLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, className = '', size = 28 }) => {
  const normalized = name.toLowerCase().trim();

  // 1. Google
  if (normalized.includes('google')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        />
      </svg>
    );
  }

  // 2. Meta
  if (normalized.includes('meta') || normalized.includes('facebook')) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-[#0081FB] ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.75} height={size * 0.75} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 16.5C9.8 16.5 8.2 14.8 8.2 12.5C8.2 10.2 9.8 8.5 12 8.5C14.2 8.5 15.8 10.2 15.8 12.5C15.8 14.8 14.2 16.5 12 16.5ZM17.6 7C15.7 7 14.1 8 13.2 9.5C12.3 8 10.7 7 8.8 7C5.6 7 3 9.7 3 13C3 16.3 5.6 19 8.8 19C10.7 19 12.3 18 13.2 16.5C14.1 18 15.7 19 17.6 19C20.8 19 23.4 16.3 23.4 13C23.4 9.7 20.8 7 17.6 7Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  // 3. Microsoft
  if (normalized.includes('microsoft')) {
    return (
      <svg width={size} height={size} viewBox="0 0 23 23" className={className}>
        <rect x="1" y="1" width="10" height="10" fill="#F25022" rx="1" />
        <rect x="12" y="1" width="10" height="10" fill="#7FBA00" rx="1" />
        <rect x="1" y="12" width="10" height="10" fill="#00A4EF" rx="1" />
        <rect x="12" y="12" width="10" height="10" fill="#FFB900" rx="1" />
      </svg>
    );
  }

  // 4. Netflix
  if (normalized.includes('netflix')) {
    return (
      <div className={`flex items-center justify-center bg-black rounded-lg border border-zinc-800 ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.75} viewBox="0 0 16 24" fill="none">
          <path d="M0 0H4.5L11.5 24H7L0 0Z" fill="#B81D24" />
          <path d="M11.5 0H16V24H11.5V0Z" fill="#E50914" />
          <path d="M0 0H4.5V24H0V0Z" fill="#E50914" />
        </svg>
      </div>
    );
  }

  // 5. Amazon
  if (normalized.includes('amazon') || normalized.includes('aws')) {
    return (
      <div className={`flex items-center justify-center bg-[#FF9900] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.75} height={size * 0.75} viewBox="0 0 24 24" fill="none">
          <path
            d="M13.9 14.8C10.7 17.1 6.3 17.2 2.8 15.1C2.3 14.8 2.8 14.2 3.3 14.4C6.1 16 9.8 16.4 13.1 14.3C13.6 13.9 14.3 14.4 13.9 14.8ZM15.1 13.5C14.7 13.3 14 13.6 14.2 14.2C14.5 15.3 15.6 16.4 16.8 16.2C17.2 16.1 17.5 15.6 17.2 15.2C16.8 14.6 16 13.9 15.1 13.5ZM9.2 10.7C9.2 8.7 8.3 7.8 6.5 7.8C5.2 7.8 4.2 8.5 3.8 9.3C3.6 9.7 3.9 10 4.3 9.9C4.8 9.8 5.7 9.4 6.5 9.4C7.4 9.4 7.8 9.8 7.8 10.7V11.2C5.3 11.3 3.5 12.3 3.5 14C3.5 15.3 4.6 16.1 6 16.1C7.2 16.1 8.2 15.3 8.6 14.2H8.8V14.8C8.8 15.2 9.1 15.4 9.5 15.4H10.5C10.8 15.4 11.1 15.1 11.1 14.8V11.5C11.1 9.4 9.7 7.8 7.2 7.8"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  // 6. Apple
  if (normalized.includes('apple')) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 rounded-lg border border-zinc-800 ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 170 170" fill="white">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.66-8.71-10.15-18.49-13.48-29.35-3.32-10.87-4.99-21.32-4.99-31.35 0-14.14 3.58-25.78 10.74-34.92 7.17-9.14 16.09-13.79 26.78-13.96 4.35 0 9.28 1.14 14.78 3.42 5.51 2.29 9.3 3.48 11.39 3.58 1.63-.1 5.61-1.33 11.96-3.69 6.34-2.36 11.59-3.36 15.75-3 11.75.98 21.05 5.6 27.91 13.86-10.45 6.32-15.57 15.13-15.35 26.43.22 8.71 3.58 16.03 10.08 21.97 6.5 5.94 14.18 9.33 23.06 10.19-2.07 6.1-4.63 12.04-7.69 17.82zM119.22 33.15c0-6.97 2.53-13.48 7.59-19.53 5.06-6.04 11.45-9.88 19.18-11.51.22 1.3.33 2.5.33 3.6 0 6.86-2.67 13.51-8.01 19.95-5.34 6.44-11.7 10.19-19.09 11.25-.33-1.2-.0-2.45-.0-3.76z" />
        </svg>
      </div>
    );
  }

  // 7. LinkedIn
  if (normalized.includes('linkedin')) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-[#0A66C2] ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.86 18.5v-8.37H5.07v8.37h2.79z" />
        </svg>
      </div>
    );
  }

  // 8. Atlassian
  if (normalized.includes('atlassian')) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-[#0052CC] ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M11.4 3.2c-.3-.5-.9-.5-1.2 0L3.3 17.5c-.3.6.1 1.3.8 1.3h5.7c.4 0 .7-.2.9-.6l2.1-5.1c.3-.6.1-1.3-.5-1.7l-.9-.6 1.6-3.8c.2-.5.7-.9 1.3-.9.7 0 1.2.4 1.4.9l4.5 10.9c.2.4.6.6 1 .6h3.1c.7 0 1.1-.7.8-1.3L11.4 3.2z" />
        </svg>
      </div>
    );
  }

  // 9. Uber
  if (normalized.includes('uber')) {
    return (
      <div className={`flex items-center justify-center bg-black border border-zinc-800 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-bold tracking-tight text-[11px] font-sans">
          Uber
        </span>
      </div>
    );
  }

  // 10. D.E. Shaw
  if (normalized.includes('de shaw') || normalized.includes('d.e. shaw') || normalized.includes('deshaw')) {
    return (
      <div className={`flex items-center justify-center bg-white rounded-lg px-1 shadow-xs border border-zinc-300 ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#002B49] font-serif font-bold text-[9px] tracking-tight leading-none text-center">
          DE Shaw & Co
        </span>
      </div>
    );
  }

  // 11. Bloomberg
  if (normalized.includes('bloomberg')) {
    return (
      <div className={`flex items-center justify-center bg-[#5400FF] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black text-xs font-mono">
          B
        </span>
      </div>
    );
  }

  // 12. Tower Research Capital
  if (normalized.includes('tower research')) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </div>
    );
  }

  // 13. Stripe
  if (normalized.includes('stripe')) {
    return (
      <div className={`flex items-center justify-center bg-[#635BFF] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black text-sm font-sans">
          S
        </span>
      </div>
    );
  }

  // 14. PayPal
  if (normalized.includes('paypal')) {
    return (
      <div className={`flex items-center justify-center bg-[#003087] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.013.4 5.445 0 5.96 0h7.408c3.27 0 5.794.887 6.45 4.37.33 1.745-.045 3.326-1.116 4.7-1.127 1.446-2.87 2.29-5.176 2.51l-.744.07-.94 5.96a.64.64 0 0 1-.634.54l-4.132.186zm10.74-13.88c-.534-2.825-2.583-3.54-5.234-3.54H7.202L4.697 19.42h2.52l1.09-6.924a.641.641 0 0 1 .633-.541h1.564c3.486 0 6.23-1.416 7.028-5.074.084-.393.14-.77.17-1.122l-.196-.3z" />
        </svg>
      </div>
    );
  }

  // 15. Salesforce
  if (normalized.includes('salesforce')) {
    return (
      <div className={`flex items-center justify-center bg-[#00A1E0] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.75} height={size * 0.75} viewBox="0 0 24 24" fill="white">
          <path d="M19.3 9.4c-.6-2.2-2.6-3.8-5-3.8-1.5 0-2.8.6-3.8 1.6C9.8 6.4 8.7 6 7.5 6 5 6 3 8 3 10.5c0 .3 0 .6.1.9C1.3 12.1 0 13.9 0 16c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5 0-2.5-1.8-4.6-4.2-4.9-.2-.9-.7-1.7-1.5-2.2.6-.9 1-2 1-3.2 0-2.5-2-4.5-4.5-4.5-.6 0-1.2.1-1.7.4.4.8.7 1.7.7 2.8z" />
        </svg>
      </div>
    );
  }

  // 16. Adobe
  if (normalized.includes('adobe')) {
    return (
      <div className={`flex items-center justify-center bg-[#FA0F00] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M13.96 4H24v16.14H18.7l-4.74-11.45V4zm-3.92 0H0v16.14h5.3L10.04 4zm1.96 7.15l3.29 8.99h-3.32l-1.39-3.85h-2.93l2.35-5.14z" />
        </svg>
      </div>
    );
  }

  // 17. Flipkart
  if (normalized.includes('flipkart') || normalized.includes('flipcart')) {
    return (
      <div className={`flex items-center justify-center bg-[#2874F0] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <div className="w-5 h-5 bg-[#FFE11B] rounded-xs flex items-center justify-center">
          <span className="text-[#2874F0] font-black text-xs italic leading-none">f</span>
        </div>
      </div>
    );
  }

  // 18. PhonePe
  if (normalized.includes('phonepe') || normalized.includes('phone pe')) {
    return (
      <div className={`flex items-center justify-center bg-[#5f259f] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-bold text-sm leading-none">पे</span>
      </div>
    );
  }

  // 19. Meesho
  if (normalized.includes('meesho')) {
    return (
      <div className={`flex items-center justify-center bg-[#F43397] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black text-xs font-sans">m</span>
      </div>
    );
  }

  // 20. CRED
  if (normalized.includes('cred')) {
    return (
      <div className={`flex items-center justify-center bg-black border border-zinc-700 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <div className="w-4 h-5 border-2 border-white rounded-t-xs rounded-b-lg flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    );
  }

  // 21. Razorpay
  if (normalized.includes('razorpay')) {
    return (
      <div className={`flex items-center justify-center bg-[#0C2340] border border-[#3395FF]/40 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="#3395FF">
          <polygon points="12 2 2 22 12 18 22 22 12 2" />
        </svg>
      </div>
    );
  }

  // 22. Zomato
  if (normalized.includes('zomato')) {
    return (
      <div className={`flex items-center justify-center bg-[#E23744] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black italic text-[11px] tracking-tighter">zomato</span>
      </div>
    );
  }

  // 23. Swiggy
  if (normalized.includes('swiggy')) {
    return (
      <div className={`flex items-center justify-center bg-[#FC8019] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      </div>
    );
  }

  // 24. Zepto
  if (normalized.includes('zepto')) {
    return (
      <div className={`flex items-center justify-center bg-[#7B2CBF] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#FFB703] font-black text-xs italic">Z</span>
      </div>
    );
  }

  // 25. Paytm
  if (normalized.includes('paytm')) {
    return (
      <div className={`flex items-center justify-center bg-[#002E6E] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#00BAF2] font-black text-[10px]">Paytm</span>
      </div>
    );
  }

  // 26. ServiceNow
  if (normalized.includes('servicenow')) {
    return (
      <div className={`flex items-center justify-center bg-[#81B5A1] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#032D42] font-bold text-xs">now</span>
      </div>
    );
  }

  // 27. Intuit
  if (normalized.includes('intuit')) {
    return (
      <div className={`flex items-center justify-center bg-[#D52B1E] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-bold text-[10px]">intuit</span>
      </div>
    );
  }

  // 28. Walmart
  if (normalized.includes('walmart')) {
    return (
      <div className={`flex items-center justify-center bg-[#0071DC] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 24 24" fill="#FFC220">
          <path d="M12 2v6m0 8v6M2 12h6m8 0h6m-3.07-7.07l-4.24 4.24m-5.38 5.38l-4.24 4.24m0-13.86l4.24 4.24m5.38 5.38l4.24 4.24" stroke="#FFC220" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // 29. Goldman Sachs
  if (normalized.includes('goldman')) {
    return (
      <div className={`flex items-center justify-center bg-[#729FCF] rounded-lg px-0.5 ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#0B2341] font-bold text-[8px] leading-tight text-center font-sans">
          Goldman Sachs
        </span>
      </div>
    );
  }

  // 30. J.P. Morgan Chase
  if (normalized.includes('jpmorgan') || normalized.includes('j.p. morgan') || normalized.includes('chase')) {
    return (
      <div className={`flex items-center justify-center bg-[#117ACA] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <polygon points="12 2 2 12 12 22 22 12" />
        </svg>
      </div>
    );
  }

  // 31. Morgan Stanley
  if (normalized.includes('morgan stanley')) {
    return (
      <div className={`flex items-center justify-center bg-black border border-zinc-700 rounded-lg px-0.5 ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-serif font-bold text-[9px] tracking-tighter text-center">
          Morgan Stanley
        </span>
      </div>
    );
  }

  // 32. Oracle
  if (normalized.includes('oracle')) {
    return (
      <div className={`flex items-center justify-center bg-[#C74634] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <div className="w-5 h-3 rounded-full border-2 border-white" />
      </div>
    );
  }

  // 33. Cisco
  if (normalized.includes('cisco')) {
    return (
      <div className={`flex items-center justify-center bg-[#049FD9] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <div className="flex items-end gap-0.5 h-3.5">
          <div className="w-0.5 h-1.5 bg-white rounded-full" />
          <div className="w-0.5 h-2.5 bg-white rounded-full" />
          <div className="w-0.5 h-3.5 bg-white rounded-full" />
          <div className="w-0.5 h-2.5 bg-white rounded-full" />
          <div className="w-0.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    );
  }

  // 34. Visa
  if (normalized.includes('visa')) {
    return (
      <div className={`flex items-center justify-center bg-white rounded-lg border border-zinc-300 ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#1A1F71] font-black italic text-xs tracking-tighter">VISA</span>
      </div>
    );
  }

  // 35. Mastercard
  if (normalized.includes('mastercard') || normalized.includes('master card')) {
    return (
      <div className={`flex items-center justify-center bg-black border border-zinc-800 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <div className="relative flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] -ml-1.5 opacity-90" />
        </div>
      </div>
    );
  }

  // 36. Barclays
  if (normalized.includes('barclays')) {
    return (
      <div className={`flex items-center justify-center bg-[#00AEEF] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M12 2L4 9l8 13 8-13-8-7zm0 5.5l4.5 4-4.5 7.5-4.5-7.5 4.5-4z" />
        </svg>
      </div>
    );
  }

  // 37. HSBC
  if (normalized.includes('hsbc')) {
    return (
      <div className={`flex items-center justify-center bg-white rounded-lg border border-zinc-300 ${className}`} style={{ width: size, height: size }}>
        <div className="relative w-4 h-4 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#DB0011] transform rotate-45" />
          <div className="absolute w-2 h-2 bg-white transform rotate-45" />
        </div>
      </div>
    );
  }

  // 38. Accenture
  if (normalized.includes('accenture')) {
    return (
      <div className={`flex items-center justify-center bg-black border border-zinc-800 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-[#A100FF] font-black text-base leading-none">&gt;</span>
      </div>
    );
  }

  // 39. TCS + TCS NQT
  if (normalized.includes('tcs') || normalized.includes('tata consultancy')) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-r from-[#003B71] to-[#0072CE] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black text-[10px] tracking-tight">TCS</span>
      </div>
    );
  }

  // 40. Infosys
  if (normalized.includes('infosys')) {
    return (
      <div className={`flex items-center justify-center bg-[#007CC3] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-bold text-[10px] tracking-tight font-sans">Infy</span>
      </div>
    );
  }

  // 41. Cognizant
  if (normalized.includes('cognizant')) {
    return (
      <div className={`flex items-center justify-center bg-[#0033A0] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black text-xs font-sans">C</span>
      </div>
    );
  }

  // 42. Wipro
  if (normalized.includes('wipro')) {
    return (
      <div className={`flex items-center justify-center bg-white border border-zinc-300 rounded-lg ${className}`} style={{ width: size, height: size }}>
        <div className="flex items-center gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E51837]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#3FA535]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0082C9]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FABE00]" />
        </div>
      </div>
    );
  }

  // 43. HCLTech
  if (normalized.includes('hcl') || normalized.includes('hcltech')) {
    return (
      <div className={`flex items-center justify-center bg-[#006699] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-black text-[10px] tracking-tight">HCL</span>
      </div>
    );
  }

  // 44. Tech Mahindra
  if (normalized.includes('tech mahindra') || normalized.includes('mahindra')) {
    return (
      <div className={`flex items-center justify-center bg-[#E31837] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <span className="text-white font-bold text-[9px] tracking-tight">TM</span>
      </div>
    );
  }

  // 45. Capgemini
  if (normalized.includes('capgemini')) {
    return (
      <div className={`flex items-center justify-center bg-[#0070AD] rounded-lg ${className}`} style={{ width: size, height: size }}>
        <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5S10.52 7.5 13 7.5c1.19 0 2.27.47 3.08 1.23l-1.42 1.42c-.45-.43-1.04-.65-1.66-.65-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.62 0 1.21-.22 1.66-.65l1.42 1.42c-.81.76-1.89 1.23-3.08 1.23z" />
        </svg>
      </div>
    );
  }

  // Generic fallback with initials and colorful badge
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-200 font-bold text-xs border border-zinc-700 ${className}`}
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  );
};
