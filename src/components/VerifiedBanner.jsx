import { ShieldCheck } from 'lucide-react'

export default function VerifiedBanner() {
    return (
        <section className="mx-auto mt-6 max-w-[1232px] px-4">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#E8F4FD] px-6 py-4">
                <div className="flex items-center gap-3">
                    <ShieldCheck size={28} className="text-[#0077B6]" strokeWidth={2} />
                    <div>
                        <p className="text-[14px] font-bold text-dubizzle-dark">
                            Got a verified badge yet?
                        </p>
                        <p className="text-[12px] text-dubizzle-gray">
                            Get more visibility · Enhance your credibility
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    className="rounded-lg bg-white px-5 py-2 text-[13px] font-bold text-dubizzle-dark shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
                >
                    Get Started
                </button>
            </div>
        </section>
    )
}
