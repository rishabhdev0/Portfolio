import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "ee6eeb4c-af84-4807-ba93-10819590c705");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! 🎉");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log("Error", error);
            setResult("Failed to send. Please try again.");
        }
        
        setIsSubmitting(false);
        
        // Clear message after 5 seconds
        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    return (
        <section id="contact" className="py-20 bg-neo-yellow border-b-3 border-black">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white border-3 border-black shadow-neo p-8 md:p-12">
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 text-center uppercase">
                        Say Hello
                    </h2>

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-bold mb-2 uppercase">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    className="neo-input" 
                                    placeholder="JOHN DOE" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-2 uppercase">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="neo-input" 
                                    placeholder="JOHN@EXAMPLE.COM" 
                                    required 
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-bold mb-2 uppercase">Subject</label>
                            <select name="subject" className="neo-input bg-white" required>
                                <option>JUST SAYING HI</option>
                                <option>PROJECT INQUIRY</option>
                                <option>FREELANCE WORK</option>
                                <option>OTHER</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-bold mb-2 uppercase">Message</label>
                            <textarea 
                                name="message"
                                className="neo-input h-32 resize-none" 
                                placeholder="TELL ME SOMETHING COOL..."
                                required
                            ></textarea>
                        </div>

                        {result && (
                            <div className={`p-4 border-2 border-black font-bold text-center ${result.includes("successfully") ? "bg-green-200" : "bg-red-200"}`}>
                                {result}
                            </div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className={`w-full bg-neo-main text-white font-bold text-xl py-4 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? "SENDING..." : "SEND IT"} <Send size={24} />
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;