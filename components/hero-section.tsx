export default function HeroSection() {
    return (
        <section className="relative w-full pt-3 sm:pt-10 pb-2 overflow-hidden">
            {/* Main hero image - fixed height banner with max width */}
            <div className="relative w-full h-50 sm:h-100 lg:h-200 rounded-xl overflow-hidden shadow-lg">
                <img
                    src="/hero-attorneys-doctors.jpg"
                    alt="Юристи съветват лекари"
                    className="w-full h-full object-cover object-[center_30%]"
                />
            </div>
        </section>
    )
}
