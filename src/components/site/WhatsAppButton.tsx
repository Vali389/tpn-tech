export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18005550142?text=Hello%20TPN%20Tech%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20talent%20and%20staffing%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.65)] transition-all duration-300 ease-[var(--ease-premium)] hover:scale-110 hover:shadow-[0_0_45px_rgba(37,211,102,0.9)] group active:scale-95 border-2 border-white/40"
    >
      {/* Pulsing indicator ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

      {/* Official WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 relative z-10 transition-transform duration-300 group-hover:rotate-12"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.812 0-3.593-.487-5.155-1.412l-.369-.22-3.834 1.006 1.024-3.737-.242-.385c-1.017-1.62-1.554-3.504-1.553-5.433 0-5.717 4.654-10.371 10.375-10.371 2.77 0 5.372 1.08 7.33 3.04 1.958 1.96 3.037 4.564 3.035 7.335 0 5.719-4.655 10.377-10.375 10.377m0-19.227c-4.88 0-8.847 3.967-8.849 8.849 0 1.653.456 3.27 1.32 4.681l.195.318-.582 2.127 2.176-.57.309.184c1.361.808 2.923 1.233 4.515 1.233 4.882 0 8.85-3.967 8.851-8.85 0-2.366-.921-4.59-2.595-6.264-1.674-1.674-3.9-2.595-6.266-2.595 shadow-md" />
      </svg>
    </a>
  );
}
