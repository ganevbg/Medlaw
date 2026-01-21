export default function HeroSection() {
    return (
        <section className="relative w-full pt-5 sm:pt-40 pb-2 overflow-hidden">
            {/* Main hero image - fixed height banner with max width */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="/lawyers-consulting-doctors.jpg"
                        alt="Юристи съветват лекари"
                        className="w-full h-full object-cover object-[center_30%]"
                    />
                </div>
            </div>
        </section>
    )
}
