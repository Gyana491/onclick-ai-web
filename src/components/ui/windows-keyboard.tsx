import React, { useState, useEffect } from 'react';

// Icon Components
const BrightnessLowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]">
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 5l0 .01"></path><path d="M17 7l0 .01"></path><path d="M19 12l0 .01"></path><path d="M17 17l0 .01"></path><path d="M12 19l0 .01"></path><path d="M7 17l0 .01"></path><path d="M5 12l0 .01"></path><path d="M7 7l0 .01"></path>
    </svg>
);

const BrightnessHighIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]">
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 5l0 -2"></path><path d="M17 7l1.4 -1.4"></path><path d="M19 12l2 0"></path><path d="M17 17l1.4 1.4"></path><path d="M12 19l0 2"></path><path d="M7 17l-1.4 1.4"></path><path d="M6 12l-2 0"></path><path d="M7 7l-1.4 -1.4"></path>
    </svg>
);

const TaskViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]">
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path><path d="M3 10h18"></path><path d="M10 3v18"></path>
    </svg>
);

const VolumeDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]">
        <path d="M15 8a5 5 0 0 1 0 8"></path><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a .8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
    </svg>
);

const VolumeUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]">
        <path d="M15 8a5 5 0 0 1 0 8"></path><path d="M17.7 5a9 9 0 0 1 0 14"></path><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a .8 .8 0 0 1 1.5 .5v14a .8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
    </svg>
);

const WindowsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);

const ControlIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[6px] w-[6px]"><path d="M6 15l6 -6l6 6"></path></svg>
);

const AltIcon = () => (
    <svg fill="none" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-[6px] w-[6px]">
        <rect stroke="currentColor" strokeWidth="2" x="18" y="5" width="10" height="2"></rect><polygon stroke="currentColor" strokeWidth="2" points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "></polygon><rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none"></rect>
    </svg>
);

//================================================================//
//  Key Component
//  A reusable component for rendering each keyboard key.
//================================================================//

const Key = ({ children, className = '', style = {}, isPressed = false, heightClass = 'h-6' }: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    isPressed?: boolean;
    heightClass?: string;
}) => {
    // Shared style for the inset shadow effect on each key
    const keyInnerBoxShadow = { 
        boxShadow: 'rgb(13, 13, 15) 0px -0.5px 2px 0px inset, rgb(13, 13, 15) -0.5px 0px 2px 0px inset, 0px 0px 1px 0px rgba(255,255,255,0.1)' 
    };
    
    // Enhanced style for the glowing "pressed" keys with neon green animation
    const pressedKeyStyle = isPressed ? {
        boxShadow: '0px 0px 8px 4px #00ff88, 0 0 16px #00ff88, 0 0 24px rgba(0, 255, 136, 0.6)',
        transform: 'translateY(-1px) scale(1.02)',
        animation: 'neonBreathing 2s ease-in-out infinite',
        willChange: 'box-shadow, transform',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    } : {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    return (
        <div 
            className="rounded-[4px] p-[0.5px] cursor-pointer bg-gradient-to-b from-zinc-600 to-zinc-800 shadow-md shadow-white/10 transition-all duration-200 ease-out hover:scale-[0.98] hover:shadow-none active:scale-[0.96]"
            style={{...style, ...pressedKeyStyle}}
        >
            <div 
                className={`flex ${heightClass} rounded-[3.5px] bg-gradient-to-b from-[#1A191D] to-[#0A090D] ${className}`}
                style={keyInnerBoxShadow}
            >
                <div className="flex w-full h-full flex-col items-center justify-center text-[5px] text-zinc-300 font-medium">
                    {children}
                </div>
            </div>
        </div>
    );
};

//================================================================//
//  Keyboard Component
//  Assembles all the keys into the final keyboard layout.
//================================================================//

const Keyboard = ({ pressedKeys }: { pressedKeys: string[] }) => {
    const isKeyPressed = (keyId: string) => pressedKeys.includes(keyId);

    return (
        <div className="mx-auto h-fit w-fit rounded-xl bg-gradient-to-b from-zinc-800 to-black p-2 shadow-2xl shadow-green-500/20 transition-all duration-500 ease-out" style={{ transform: 'scale(1.7) rotateX(12deg)', transformOrigin: 'top center' }}>
            {/* --- Row 1: Function Keys --- */}
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
                <Key className="w-10 items-end justify-start pb-[2px] pl-[4px]">
                   <span className="items-start">esc</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex flex-col items-center"><BrightnessLowIcon /><span className="mt-1">F1</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex flex-col items-center"><BrightnessHighIcon /><span className="mt-1">F2</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex flex-col items-center"><TaskViewIcon /><span className="mt-1">F3</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F4</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F5</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F6</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F7</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F8</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F9</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[8px]">F10</span>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex flex-col items-center"><VolumeDownIcon /><span className="mt-1">F11</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex flex-col items-center"><VolumeUpIcon /><span className="mt-1">F12</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span className="text-[6px]">Del</span>
                </Key>
            </div>

            {/* --- Row 2: Number Keys --- */}
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
                {(['~`', '!1', '@2', '#3', '$4', '%5', '^6', '&7', '*8', '(9', ')0', '_-', '+='] as string[])
                    .map((k: string) => (
                        <Key key={k} className="w-6 items-center justify-center">
                            <div className="text-center"><span className="block">{k[0]}</span><span className="block">{k.substring(1)}</span></div>
                        </Key>
                    ))
                }
                <Key className="w-10">
                    <div className="flex w-full h-full items-end justify-end pr-[4px] pb-[2px]">
                        <span>backspace</span>
                    </div>
                </Key>
            </div>

            {/* --- Row 3: QWERTY Keys --- */}
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
                <Key className="w-10">
                     <div className="flex w-full h-full items-end justify-start pb-[2px] pl-[4px]">
                        <span>tab</span>
                    </div>
                </Key>
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(k => (
                    <Key key={k} className="w-6 items-center justify-center"><span className="text-[8px]">{k}</span></Key>
                ))}
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">{'{'}</span><span className="block">{'['}</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">{'}'}</span><span className="block">{']'}</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">|</span><span className="block">\</span></div>
                </Key>
            </div>
            
            {/* --- Row 4: Home Row --- */}
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
                <Key className="w-[2.8rem]">
                    <div className="flex w-full h-full items-end justify-start pb-[2px] pl-[4px]">
                        <span>caps lock</span>
                    </div>
                </Key>
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(k => (
                    <Key key={k} className="w-6 items-center justify-center"><span className="text-[8px]">{k}</span></Key>
                ))}
                 <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">:</span><span className="block">;</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">"</span><span className="block">'</span></div>
                </Key>
                <Key className="w-[2.85rem]" isPressed={isKeyPressed('ENTER')}>
                    <div className="flex w-full h-full items-end justify-end pr-[4px] pb-[2px]">
                        <span>enter</span>
                    </div>
                </Key>
            </div>

            {/* --- Row 5: Bottom Letter Row --- */}
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
                 <Key className="w-[3.65rem]">
                    <div className="flex w-full h-full items-end justify-start pb-[2px] pl-[4px]">
                        <span>shift</span>
                    </div>
                </Key>
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(k => (
                    <Key key={k} className="w-6 items-center justify-center"><span className="text-[8px]">{k}</span></Key>
                ))}
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">&lt;</span><span className="block">,</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">&gt;</span><span className="block">.</span></div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="text-center"><span className="block">?</span><span className="block">/</span></div>
                </Key>
                <Key className="w-[3.65rem]">
                    <div className="flex w-full h-full items-end justify-end pr-[4px] pb-[2px]">
                        <span>shift</span>
                    </div>
                </Key>
            </div>
            
             {/* --- Row 6: Control Row --- */}
            <div className="flex w-full shrink-0 items-end gap-[2px]">
                <Key className="w-8 items-center justify-center" isPressed={isKeyPressed('CTRL_LEFT')}>
                    <div className="flex h-full w-full flex-col items-center justify-center gap-y-[2px] py-1">
                        <div className="w-full flex justify-end pr-1">
                            <ControlIcon />
                        </div>
                        <span>ctrl</span>
                    </div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-y-[2px] py-1">
                        <div className="w-full flex justify-end pr-1">
                           <WindowsIcon />
                        </div>
                        <span>win</span>
                    </div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-y-[2px] py-1">
                        <div className="w-full flex justify-end pr-1">
                           <AltIcon />
                        </div>
                        <span>alt</span>
                    </div>
                </Key>
                
                <Key className="w-[8.2rem] items-center justify-center">
                    <span className="sr-only">space</span>
                </Key>

                <Key className="w-6 items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-y-[2px] py-1">
                        <div className="w-full flex justify-start pl-1">
                            <AltIcon />
                        </div>
                        <span>alt</span>
                    </div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-y-[2px] py-1">
                        <div className="w-full flex justify-start pl-1">
                            <WindowsIcon />
                        </div>
                        <span>win</span>
                    </div>
                </Key>
                <Key className="w-6 items-center justify-center">
                    <span>menu</span>
                </Key>
                <Key className="w-8 items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-y-[2px] py-1">
                        <div className="w-full flex justify-start pl-1">
                            <ControlIcon />
                        </div>
                        <span>ctrl</span>
                    </div>
                </Key>
            </div>
        </div>
    )
}

export default function WindowsKeyboard() {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);

    useEffect(() => {
        // Always highlight Ctrl + Enter keys with neon green effect
        setPressedKeys(['CTRL_LEFT', 'ENTER']);
    }, []);

    return (
        <>
            <style>{`
                @keyframes neonBreathing {
                    0%, 100% {
                        box-shadow: 0 0 8px 4px #00ff88, 0 0 16px #00ff88, 0 0 24px rgba(0, 255, 136, 0.4);
                        transform: translateY(-1px) scale(1.02);
                    }
                    50% {
                        box-shadow: 0 0 12px 6px #00ff88, 0 0 32px #00ff88, 0 0 48px rgba(0, 255, 136, 0.8);
                        transform: translateY(-2px) scale(1.03);
                    }
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black w-full py-20 perspective-1000 relative transition-all duration-1000">
                {/* Title */}
                <div className="mb-16 animate-fade-in-up">
                    <h1 className="text-5xl font-light text-white text-center tracking-wide">
                        As simple as{' '}
                        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent font-extrabold">
                            Ctrl + Enter
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 text-center mt-4 max-w-2xl mx-auto">
                        Your Windows Assistant is always ready. Just press Ctrl+Enter anywhere to get instant answers.
                    </p>
                </div>
                <Keyboard pressedKeys={pressedKeys} />
            </div>
        </>
    );
} 