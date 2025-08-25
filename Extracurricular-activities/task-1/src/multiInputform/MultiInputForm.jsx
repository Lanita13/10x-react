import React, { useState } from "react";

function MultiInputForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 p-6">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                    Multi Input Form
                </h2>


                <div className="space-y-6">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="სახელი"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 rounded-xl p-3 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="გვარი"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 rounded-xl p-3 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />

                    <input
                        type="number"
                        name="age"
                        placeholder="ასაკი"
                        value={form.age}
                        onChange={handleChange}
                        className="w-full bg-gray-50 rounded-xl p-3 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                </div>


                <p className="mt-8 p-4 text-lg font-medium text-gray-700 bg-green-50 rounded-xl shadow-sm text-center border border-green-200">
                    სახელი:{" "}
                    <span className="font-semibold text-green-600">
                        {form.firstName} {form.lastName}
                    </span>
                    , ასაკი:{" "}
                    <span className="font-semibold text-green-600">{form.age}</span>
                </p>
            </div>
        </div>
    );
}

export default MultiInputForm;
