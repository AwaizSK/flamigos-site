import { useState } from "react";

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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbw-bv1MQ-uN90O40-RvtpO9YyQqx9TqfFcHbzEjXSith-99f0514NHa1OwyBnedNwM/exec",
                {
                    method: "POST", 
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (result.success) {
                alert("Registration successful!");
                setFormData({
                    name: "",
                    email: "",
                    age: "",
                    address: "",
                    phone: "",
                    instagram: "",
                    difficulty: "",
                });
            } else {
                alert("Submission failed");
            }
        } catch (error) {
            alert("Error submitting form");
            console.error(error);
        }
    };

    return (
        <div className="size-full flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">
                    Event Registration
                </h1>

                <div>
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    {/* Age */}
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    {/* Address */}
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    {/* Instagram */}
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram ID"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                    />

                    {/* Difficulty */}
                    <select
                        name="difficulty"
                        required
                        className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={handleChange}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select Difficulty
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        <option value="not_sure">Not Sure</option>
                    </select>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Submit Registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventRegistrationForm;
