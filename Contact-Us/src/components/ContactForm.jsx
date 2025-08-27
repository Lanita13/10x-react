import { useState } from "react"

export default function ContactForm() {
  
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

   
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>

            <form className="space-y-4">
               
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>

              
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@mail.com"
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

               
                <div>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Write subject"
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

              
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        placeholder="Write your message..."
                        rows="4"
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Characters: {formData.message.length}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="h-4 w-4"
                    />
                    <label className="text-sm text-gray-700">
                        I agree to the terms and conditions
                    </label>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-black  py-2 px-4 rounded-lg transition"
                >
                    Send Message
                </button>

                <div className="bg-gray-50 shadow-inner rounded-lg p-6 mt-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Live Preview</h3>
                    <p><strong>Name:</strong> {formData.fullName || "Your name will appear here..."}</p>
                    <p><strong>Email:</strong> {formData.email || "Your email will appear here..."}</p>
                    <p><strong>Subject:</strong> {formData.subject || "Subject will appear here..."}</p>
                    <p><strong>Message:</strong> {formData.message || "Your message will appear here..."}</p>
                </div>
            </form>
        </div>
    )
}
