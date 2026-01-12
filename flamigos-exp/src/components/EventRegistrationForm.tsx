import { useRef, useState } from "react";

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        address: "",
        phone: "",
        instagram: "",
        difficulty: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);
    const isFirstLoad = useRef(true);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
    };

    const handleIframeLoad = () => {
        // Skip first iframe load
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        setIsSubmitting(false);
        alert("Registration submitted successfully!");

        // Reset form UI
        formRef.current?.reset();

        // Reset React state
        setFormData({
            name: "",
            email: "",
            age: "",
            address: "",
            phone: "",
            instagram: "",
            difficulty: "",
        });
    };

    return (
        <div className="relative size-full flex items-center justify-center bg-gray-100 p-4">
            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-lg px-6 py-4 flex flex-col items-center gap-3 shadow-lg">
                        <div className="h-8 w-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-sm font-medium">
                            Submitting your registration...
                        </p>
                    </div>
                </div>
            )}

            {/* Hidden iframe to avoid CORS */}
            <iframe
                name="hidden_iframe"
                style={{ display: "none" }}
                onLoad={handleIframeLoad}
            />

            <form
                ref={formRef}
                action="https://script.google.com/macros/s/AKfycbwqqBo93iNLijTlKcrrfS2lIWBb9GzrDQwQRYcFOpWfPIZT3b-k9wbqsbi2j4cOxwfZrg/exec"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">
                    Event Registration
                </h1>

                <div className="space-y-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        required
                        value={formData.age}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram ID"
                        value={formData.instagram}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    <select
                        name="difficulty"
                        value={formData.difficulty}
                        required
                        className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select Difficulty
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        <option value="not_sure">Not Sure</option>
                    </select>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventRegistrationForm;
