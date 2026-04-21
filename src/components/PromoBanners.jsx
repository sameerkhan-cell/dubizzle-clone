import { ArrowRight } from 'lucide-react'

export default function PromoBanners() {
    return (
        <div className="mx-auto mt-6 flex max-w-[1232px] flex-col gap-4 px-4">
            {/* Top Full-width Banner - Sell/Rent home */}
            <div className="flex h-[80px] w-full cursor-pointer items-center justify-between rounded-lg bg-gradient-to-r from-[#FFF5DA] to-[#FFE6BC] px-6 transition-shadow hover:shadow-card">
                <div className="flex items-center gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=150&q=80"
                        alt="Property"
                        className="h-[56px] w-[80px] rounded object-cover shadow-sm"
                    />
                    <div>
                        <h3 className="text-[17px] font-bold text-[#4A3B18]">
                            Looking to sell or rent your home?
                        </h3>
                        <p className="text-[13px] text-[#6E5924]">
                            Reach more buyers or renters through an agent partner
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    className="flex h-10 items-center gap-1.5 rounded bg-white px-5 text-[14px] font-bold text-dubizzle-red shadow-sm transition-colors hover:text-red-700 active:scale-[0.98]"
                >
                    Get started now
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* Bottom Two Banners */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Left - New Projects */}
                <div className="flex h-[96px] cursor-pointer items-center justify-between rounded-lg bg-[#F0F5FA] px-6 transition-shadow hover:shadow-card">
                    <div className="flex flex-1 items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80"
                            alt="New Projects"
                            className="h-[64px] w-[90px] rounded object-cover shadow-sm"
                        />
                        <div>
                            <h3 className="text-[16px] font-bold text-[#143250]">
                                Introducing New Projects
                            </h3>
                            <p className="mb-2 text-[12px] text-[#2D5A85]">
                                Get access to the latest property developments
                            </p>
                            <button
                                type="button"
                                className="flex items-center gap-1 text-[13px] font-bold text-dubizzle-red transition-colors hover:text-red-700"
                            >
                                Explore Now <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right - Agents */}
                <div className="flex h-[96px] cursor-pointer items-center justify-between rounded-lg bg-[#F2FAF8] px-6 transition-shadow hover:shadow-card">
                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h3 className="text-[16px] font-bold text-[#184841]">
                                Discover Agents and Agencies!
                            </h3>
                            <p className="mb-2 text-[12px] text-[#297C70]">
                                Connect with our partners to find your ideal home
                            </p>
                            <button
                                type="button"
                                className="flex items-center gap-1 text-[13px] font-bold text-dubizzle-red transition-colors hover:text-red-700"
                            >
                                Browse Now <ArrowRight size={14} />
                            </button>
                        </div>
                        <div className="flex -space-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                                alt="Agent"
                                className="h-[64px] w-[64px] rounded-full border-2 border-white object-cover shadow-md"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                                alt="Agent"
                                className="relative z-10 h-[64px] w-[64px] rounded-full border-2 border-white object-cover shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
